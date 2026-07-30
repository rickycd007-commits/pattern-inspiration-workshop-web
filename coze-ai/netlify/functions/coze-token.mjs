import { getJWTToken } from '@coze/api';

const requiredVariables = [
  'COZE_CLIENT_ID',
  'COZE_PUBLIC_KEY_ID',
  'COZE_PRIVATE_KEY',
];

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(body),
  };
}

function normalizePrivateKey(value) {
  const privateKey = value.trim().replace(/\\n/g, '\n').replace(/\r\n?/g, '\n');
  const match = privateKey.match(/-----BEGIN ([A-Z ]*PRIVATE KEY)-----([\s\S]*?)-----END \1-----/);

  if (!match) {
    return privateKey;
  }

  const body = match[2].replace(/\s+/g, '');
  const lines = body.match(/.{1,64}/g) || [];

  return [
    `-----BEGIN ${match[1]}-----`,
    ...lines,
    `-----END ${match[1]}-----`,
  ].join('\n');
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return json(405, { message: '仅支持 POST 请求' });
  }

  const missingVariable = requiredVariables.find(name => !process.env[name]);

  if (missingVariable) {
    console.error(`Missing environment variable: ${missingVariable}`);
    return json(500, { message: '服务端凭证尚未配置完整' });
  }

  try {
    const token = await getJWTToken({
      baseURL: 'https://api.coze.cn',
      appId: process.env.COZE_CLIENT_ID,
      aud: 'api.coze.cn',
      keyid: process.env.COZE_PUBLIC_KEY_ID,
      privateKey: normalizePrivateKey(process.env.COZE_PRIVATE_KEY),
      durationSeconds: 900,
    });

    return json(200, {
      access_token: token.access_token,
      expires_in: token.expires_in,
    });
  } catch (error) {
    console.error('Coze JWT token request failed', error);
    return json(502, { message: 'Coze 临时访问凭证申请失败' });
  }
}
