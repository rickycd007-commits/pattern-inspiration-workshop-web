const PROJECT_ID = '7667984507940749347';
const TOKEN_ENDPOINT = '/.netlify/functions/coze-token';

const loadingCard = document.querySelector('#loading-card');
const loadingMessage = document.querySelector('#loading-message');
const retryButton = document.querySelector('#retry-button');
const serviceStatus = document.querySelector('#service-status');

let sdkStarted = false;
let cachedToken = '';
let tokenExpiresAt = 0;

async function requestAccessToken() {
  if (cachedToken && Date.now() < tokenExpiresAt) {
    return cachedToken;
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok || !result.access_token) {
    throw new Error(result.message || '临时访问凭证获取失败');
  }

  cachedToken = result.access_token;
  tokenExpiresAt = Date.now() + Math.max(60, result.expires_in - 60) * 1000;
  return cachedToken;
}

function showError(error) {
  loadingCard.hidden = false;
  loadingMessage.textContent = `${error.message}。请检查网络后重试。`;
  retryButton.hidden = false;
  serviceStatus.textContent = '连接失败';
}

async function startChat() {
  retryButton.hidden = true;
  loadingMessage.textContent = '正在获取临时访问凭证，请稍候。';
  serviceStatus.textContent = '正在连接知识库';

  try {
    await requestAccessToken();

    if (!window.CozeWebSDK?.init) {
      throw new Error('问答组件加载失败');
    }

    if (!sdkStarted) {
      window.CozeWebSDK.init({
        projectId: PROJECT_ID,
        refreshToken: requestAccessToken,
      });
      sdkStarted = true;
    }

    loadingCard.hidden = true;
    serviceStatus.textContent = '知识库已连接';
  } catch (error) {
    showError(error);
  }
}

retryButton.addEventListener('click', startChat);
startChat();
