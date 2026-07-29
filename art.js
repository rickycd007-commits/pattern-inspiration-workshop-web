const FITTED_PATHS = window.FITTED_PATHS;

const GARMENT_VARIANTS = {
  top: [
    {
      id: "cross-top",
      name: "交领短衫",
      thumb: "/assets/garments/fitted/v1/thumb/cross-top.png",
      detail: "cross-top",
      paths: [[
        ["M", 62, 25], ["Q", 51, 27, 43, 36], ["L", 18, 61], ["Q", 14, 67, 20, 73],
        ["L", 35, 87], ["L", 46, 71], ["L", 45, 132], ["Q", 80, 143, 115, 132],
        ["L", 114, 71], ["L", 125, 87], ["L", 140, 73], ["Q", 146, 67, 142, 61],
        ["L", 117, 36], ["Q", 109, 27, 98, 25], ["L", 89, 43], ["L", 71, 43], ["Z"]
      ]],
      points: [
        [0.38, 0.10], [0.28, 0.14], [0.20, 0.22], [0.05, 0.55],
        [0.16, 0.68], [0.30, 0.42], [0.31, 0.84], [0.69, 0.84],
        [0.70, 0.42], [0.84, 0.68], [0.95, 0.55], [0.80, 0.22],
        [0.72, 0.14], [0.62, 0.10], [0.57, 0.22], [0.43, 0.22]
      ],
      anchor: { x: 0.285, y: 0.385, w: 0.43, h: 0.34 }
    },
    {
      id: "wide-top",
      name: "宽袖上衣",
      thumb: "/assets/garments/fitted/v1/thumb/wide-top.png",
      detail: "wide-top",
      paths: [[
        ["M", 58, 28], ["Q", 80, 20, 102, 28], ["L", 119, 37], ["L", 147, 75],
        ["Q", 150, 81, 144, 86], ["L", 126, 98], ["L", 112, 77], ["L", 113, 132],
        ["Q", 80, 142, 47, 132], ["L", 48, 77], ["L", 34, 98], ["L", 16, 86],
        ["Q", 10, 81, 13, 75], ["L", 41, 37], ["Z"]
      ]],
      points: [
        [0.36, 0.10], [0.25, 0.14], [0.16, 0.22], [0.03, 0.62],
        [0.15, 0.72], [0.31, 0.43], [0.30, 0.84], [0.70, 0.84],
        [0.69, 0.43], [0.85, 0.72], [0.97, 0.62], [0.84, 0.22],
        [0.75, 0.14], [0.64, 0.10], [0.58, 0.21], [0.42, 0.21]
      ],
      anchor: { x: 0.275, y: 0.39, w: 0.45, h: 0.35 }
    },
    {
      id: "stand-collar-top",
      name: "立领盘扣衫",
      detail: "stand-collar-top",
      paths: [[
        ["M", 66, 24], ["Q", 80, 18, 94, 24], ["L", 100, 29], ["L", 122, 39],
        ["L", 148, 78], ["Q", 151, 84, 145, 89], ["L", 127, 101], ["L", 112, 77],
        ["L", 114, 132], ["Q", 80, 143, 46, 132], ["L", 48, 77], ["L", 33, 101],
        ["L", 15, 89], ["Q", 9, 84, 12, 78], ["L", 38, 39], ["L", 60, 29], ["Z"]
      ]],
      points: [
        [0.41, 0.12], [0.30, 0.18], [0.16, 0.28], [0.04, 0.58],
        [0.18, 0.72], [0.30, 0.47], [0.29, 0.85], [0.71, 0.85],
        [0.70, 0.47], [0.82, 0.72], [0.96, 0.58], [0.84, 0.28],
        [0.70, 0.18], [0.59, 0.12]
      ],
      anchor: { x: 0.27, y: 0.385, w: 0.46, h: 0.35 }
    },
    {
      id: "diagonal-top",
      name: "斜襟短衫",
      detail: "diagonal-top",
      paths: [[
        ["M", 62, 23], ["Q", 80, 18, 98, 23], ["L", 118, 35], ["L", 145, 67],
        ["Q", 149, 74, 143, 80], ["L", 128, 94], ["L", 113, 73], ["L", 115, 129],
        ["Q", 80, 140, 45, 129], ["L", 47, 73], ["L", 32, 94], ["L", 17, 80],
        ["Q", 11, 74, 15, 67], ["L", 42, 35], ["Z"]
      ]],
      points: [
        [0.39, 0.11], [0.27, 0.17], [0.15, 0.28], [0.05, 0.55],
        [0.20, 0.68], [0.30, 0.46], [0.29, 0.83], [0.71, 0.83],
        [0.70, 0.46], [0.80, 0.68], [0.95, 0.55], [0.85, 0.28],
        [0.73, 0.17], [0.61, 0.11]
      ],
      anchor: { x: 0.275, y: 0.385, w: 0.45, h: 0.35 }
    },
    {
      id: "diagonal-long-top",
      name: "斜襟长衫",
      detail: "diagonal-long-top",
      paths: [[
        ["M", 62, 21], ["Q", 80, 17, 98, 21], ["L", 118, 35], ["L", 145, 70],
        ["Q", 149, 76, 143, 83], ["L", 126, 99], ["L", 112, 78], ["L", 121, 146],
        ["Q", 80, 154, 39, 146], ["L", 48, 78], ["L", 34, 99], ["L", 17, 83],
        ["Q", 11, 76, 15, 70], ["L", 42, 35], ["Z"]
      ]],
      points: [
        [0.39, 0.10], [0.27, 0.17], [0.15, 0.29], [0.05, 0.56],
        [0.21, 0.70], [0.30, 0.47], [0.24, 0.92], [0.76, 0.92],
        [0.70, 0.47], [0.79, 0.70], [0.95, 0.56], [0.85, 0.29],
        [0.73, 0.17], [0.61, 0.10]
      ],
      anchor: { x: 0.27, y: 0.38, w: 0.46, h: 0.43 }
    }
  ],
  bottom: [
    {
      id: "trousers",
      name: "束口长裤",
      thumb: "/assets/garments/fitted/v1/thumb/trousers.png",
      detail: "trousers",
      paths: [[
        ["M", 43, 24], ["Q", 80, 18, 117, 24], ["L", 120, 43], ["L", 132, 135],
        ["Q", 111, 143, 90, 135], ["L", 80, 76], ["L", 70, 135],
        ["Q", 49, 143, 28, 135], ["L", 40, 43], ["Z"]
      ]],
      points: [
        [0.28, 0.12], [0.72, 0.12], [0.75, 0.25], [0.84, 0.90],
        [0.58, 0.90], [0.50, 0.48], [0.42, 0.90], [0.16, 0.90],
        [0.25, 0.25]
      ],
      anchor: { x: 0.335, y: 0.555, w: 0.33, h: 0.32 }
    },
    {
      id: "skirt",
      name: "简约长裙",
      thumb: "/assets/garments/fitted/v1/thumb/skirt.png",
      detail: "skirt",
      paths: [[
        ["M", 48, 25], ["Q", 80, 18, 112, 25], ["L", 115, 45], ["L", 137, 136],
        ["Q", 80, 149, 23, 136], ["L", 45, 45], ["Z"]
      ]],
      points: [
        [0.30, 0.12], [0.70, 0.12], [0.73, 0.24], [0.88, 0.90],
        [0.12, 0.90], [0.27, 0.24]
      ],
      anchor: { x: 0.325, y: 0.555, w: 0.35, h: 0.33 }
    },
    {
      id: "pleated-long-skirt",
      name: "百褶长裙",
      detail: "pleated-long-skirt",
      paths: [[
        ["M", 54, 20], ["Q", 80, 17, 106, 20], ["L", 110, 35], ["L", 135, 142],
        ["Q", 80, 151, 25, 142], ["L", 50, 35], ["Z"]
      ]],
      points: [
        [0.34, 0.10], [0.66, 0.10], [0.69, 0.22], [0.86, 0.91],
        [0.14, 0.91], [0.31, 0.22]
      ],
      anchor: { x: 0.315, y: 0.555, w: 0.37, h: 0.34 }
    },
    {
      id: "embroidered-long-skirt",
      name: "绣花长裙",
      detail: "embroidered-long-skirt",
      paths: [[
        ["M", 55, 20], ["Q", 80, 17, 105, 20], ["L", 109, 34], ["L", 132, 139],
        ["Q", 80, 147, 28, 139], ["L", 51, 34], ["Z"]
      ]],
      points: [
        [0.34, 0.10], [0.66, 0.10], [0.68, 0.22], [0.84, 0.89],
        [0.16, 0.89], [0.32, 0.22]
      ],
      anchor: { x: 0.32, y: 0.555, w: 0.36, h: 0.34 }
    },
    {
      id: "wide-leg-pants",
      name: "阔腿裤",
      detail: "wide-leg-pants",
      paths: [[
        ["M", 42, 22], ["Q", 80, 17, 118, 22], ["L", 120, 37], ["L", 136, 140],
        ["Q", 111, 146, 87, 140], ["L", 80, 75], ["L", 73, 140],
        ["Q", 49, 146, 24, 140], ["L", 40, 37], ["Z"]
      ]],
      points: [
        [0.26, 0.11], [0.74, 0.11], [0.76, 0.24], [0.86, 0.90],
        [0.55, 0.90], [0.50, 0.47], [0.45, 0.90], [0.14, 0.90],
        [0.24, 0.24]
      ],
      anchor: { x: 0.32, y: 0.555, w: 0.36, h: 0.33 }
    }
  ],
  outer: [
    {
      id: "short-coat",
      name: "对襟短褙",
      thumb: "/assets/garments/fitted/v1/thumb/short-coat.png",
      detail: "short-coat",
      paths: [
        [
          ["M", 74, 24], ["Q", 60, 20, 48, 29], ["L", 22, 52], ["Q", 14, 60, 19, 70],
          ["L", 33, 92], ["L", 48, 77], ["L", 45, 132], ["Q", 57, 138, 72, 136],
          ["L", 77, 53], ["L", 67, 36], ["Z"]
        ],
        [
          ["M", 86, 24], ["Q", 100, 20, 112, 29], ["L", 138, 52], ["Q", 146, 60, 141, 70],
          ["L", 127, 92], ["L", 112, 77], ["L", 115, 132], ["Q", 103, 138, 88, 136],
          ["L", 83, 53], ["L", 93, 36], ["Z"]
        ]
      ],
      points: [
        [0.46, 0.15], [0.38, 0.13], [0.30, 0.18], [0.14, 0.33],
        [0.12, 0.44], [0.21, 0.58], [0.30, 0.48], [0.28, 0.83],
        [0.45, 0.85], [0.55, 0.85], [0.72, 0.83], [0.70, 0.48],
        [0.79, 0.58], [0.88, 0.44], [0.86, 0.33], [0.70, 0.18],
        [0.62, 0.13], [0.54, 0.15], [0.50, 0.25]
      ],
      panels: [
        [
          [0.42, 0.24], [0.40, 0.12], [0.33, 0.08], [0.24, 0.16],
          [0.18, 0.28], [0.25, 0.38], [0.27, 0.88], [0.43, 0.88],
          [0.47, 0.31]
        ],
        [
          [0.58, 0.24], [0.60, 0.12], [0.67, 0.08], [0.76, 0.16],
          [0.82, 0.28], [0.75, 0.38], [0.73, 0.88], [0.57, 0.88],
          [0.53, 0.31]
        ]
      ],
      anchor: { x: 0.30, y: 0.382, w: 0.40, h: 0.32 }
    },
    {
      id: "long-robe",
      name: "广袖长袍",
      thumb: "/assets/garments/fitted/v1/thumb/long-robe.png",
      detail: "long-robe",
      paths: [
        [
          ["M", 74, 19], ["Q", 58, 18, 46, 29], ["L", 17, 57], ["Q", 11, 64, 16, 73],
          ["L", 35, 101], ["L", 49, 84], ["L", 37, 143], ["Q", 55, 149, 73, 145],
          ["L", 77, 52], ["L", 66, 33], ["Z"]
        ],
        [
          ["M", 86, 19], ["Q", 102, 18, 114, 29], ["L", 143, 57], ["Q", 149, 64, 144, 73],
          ["L", 125, 101], ["L", 111, 84], ["L", 123, 143], ["Q", 105, 149, 87, 145],
          ["L", 83, 52], ["L", 94, 33], ["Z"]
        ]
      ],
      points: [
        [0.46, 0.12], [0.36, 0.11], [0.29, 0.18], [0.11, 0.36],
        [0.10, 0.46], [0.22, 0.63], [0.31, 0.53], [0.23, 0.89],
        [0.46, 0.91], [0.54, 0.91], [0.77, 0.89], [0.69, 0.53],
        [0.78, 0.63], [0.90, 0.46], [0.89, 0.36], [0.71, 0.18],
        [0.64, 0.11], [0.54, 0.12], [0.50, 0.24]
      ],
      panels: [
        [
          [0.46, 0.22], [0.40, 0.10], [0.30, 0.08], [0.18, 0.18],
          [0.10, 0.34], [0.20, 0.45], [0.25, 0.92], [0.43, 0.92],
          [0.47, 0.27]
        ],
        [
          [0.54, 0.22], [0.60, 0.10], [0.70, 0.08], [0.82, 0.18],
          [0.90, 0.34], [0.80, 0.45], [0.75, 0.92], [0.57, 0.92],
          [0.53, 0.27]
        ]
      ],
      anchor: { x: 0.285, y: 0.38, w: 0.43, h: 0.43 }
    },
    {
      id: "cloud-shoulder",
      name: "云肩披肩",
      detail: "cloud-shoulder",
      paths: [[
        ["M", 63, 27], ["Q", 80, 20, 97, 27], ["L", 119, 37],
        ["Q", 137, 48, 149, 66], ["Q", 138, 78, 125, 87], ["Q", 116, 97, 106, 100],
        ["Q", 96, 91, 80, 93], ["Q", 64, 91, 54, 100], ["Q", 44, 97, 35, 87],
        ["Q", 22, 78, 11, 66], ["Q", 23, 48, 41, 37], ["Z"]
      ]],
      points: [
        [0.39, 0.14], [0.26, 0.20], [0.08, 0.42], [0.20, 0.61],
        [0.34, 0.66], [0.50, 0.59], [0.66, 0.66], [0.80, 0.61],
        [0.92, 0.42], [0.74, 0.20], [0.61, 0.14]
      ],
      anchor: { x: 0.255, y: 0.382, w: 0.49, h: 0.22 }
    },
    {
      id: "sleeveless-robe",
      name: "无袖罩袍",
      detail: "sleeveless-robe",
      paths: [
        [
          ["M", 75, 20], ["Q", 62, 19, 53, 30], ["L", 43, 39], ["L", 45, 142],
          ["Q", 57, 149, 74, 144], ["L", 78, 54], ["L", 67, 35], ["Z"]
        ],
        [
          ["M", 85, 20], ["Q", 98, 19, 107, 30], ["L", 117, 39], ["L", 115, 142],
          ["Q", 103, 149, 86, 144], ["L", 82, 54], ["L", 93, 35], ["Z"]
        ]
      ],
      points: [
        [0.47, 0.11], [0.34, 0.17], [0.27, 0.25], [0.28, 0.91],
        [0.46, 0.92], [0.54, 0.92], [0.72, 0.91], [0.73, 0.25],
        [0.66, 0.17], [0.53, 0.11]
      ],
      anchor: { x: 0.31, y: 0.38, w: 0.38, h: 0.47 }
    },
    {
      id: "long-cape",
      name: "长披衫",
      detail: "long-cape",
      paths: [
        [
          ["M", 75, 18], ["Q", 60, 18, 47, 29], ["L", 15, 58], ["Q", 8, 65, 13, 75],
          ["L", 33, 103], ["L", 48, 86], ["L", 31, 147], ["Q", 55, 154, 74, 147],
          ["L", 78, 52], ["L", 66, 31], ["Z"]
        ],
        [
          ["M", 85, 18], ["Q", 100, 18, 113, 29], ["L", 145, 58], ["Q", 152, 65, 147, 75],
          ["L", 127, 103], ["L", 112, 86], ["L", 129, 147], ["Q", 105, 154, 86, 147],
          ["L", 82, 52], ["L", 94, 31], ["Z"]
        ]
      ],
      points: [
        [0.47, 0.10], [0.30, 0.17], [0.08, 0.39], [0.20, 0.68],
        [0.30, 0.54], [0.18, 0.94], [0.46, 0.94], [0.54, 0.94],
        [0.82, 0.94], [0.70, 0.54], [0.80, 0.68], [0.92, 0.39],
        [0.70, 0.17], [0.53, 0.10]
      ],
      anchor: { x: 0.27, y: 0.377, w: 0.46, h: 0.48 }
    },
    {
      id: "short-vest",
      name: "短款坎肩",
      detail: "short-vest",
      paths: [[
        ["M", 65, 24], ["Q", 80, 18, 95, 24], ["L", 119, 37], ["L", 144, 68],
        ["Q", 148, 74, 142, 80], ["L", 125, 94], ["L", 111, 74], ["L", 115, 128],
        ["Q", 80, 137, 45, 128], ["L", 49, 74], ["L", 35, 94], ["L", 18, 80],
        ["Q", 12, 74, 16, 68], ["L", 41, 37], ["Z"]
      ]],
      points: [
        [0.41, 0.12], [0.27, 0.18], [0.14, 0.29], [0.05, 0.55],
        [0.21, 0.68], [0.31, 0.46], [0.29, 0.82], [0.71, 0.82],
        [0.69, 0.46], [0.79, 0.68], [0.95, 0.55], [0.86, 0.29],
        [0.73, 0.18], [0.59, 0.12]
      ],
      anchor: { x: 0.275, y: 0.382, w: 0.45, h: 0.32 }
    }
  ]
};

const GARMENTS = {
  top: { ...GARMENT_VARIANTS.top[0], name: "上衣" },
  bottom: { ...GARMENT_VARIANTS.bottom[0], name: "下装" },
  outer: { ...GARMENT_VARIANTS.outer[0], name: "外衫" }
};

const OUTFIT_FIT = {
  top: {
    "cross-top": { x: 0.2773, y: 0.3887, w: 0.4453, h: 0.2715 },
    "wide-top": { x: 0.2656, y: 0.3906, w: 0.4688, h: 0.2813 },
    "stand-collar-top": { x: 0.2676, y: 0.3887, w: 0.4648, h: 0.2813 },
    "diagonal-top": { x: 0.2734, y: 0.3887, w: 0.4531, h: 0.2773 },
    "diagonal-long-top": { x: 0.2695, y: 0.3867, w: 0.4609, h: 0.3496 }
  },
  bottom: {
    trousers: { x: 0.3789, y: 0.5703, w: 0.2422, h: 0.3105 },
    skirt: { x: 0.3535, y: 0.5703, w: 0.2930, h: 0.3027 },
    "pleated-long-skirt": { x: 0.3438, y: 0.5684, w: 0.3125, h: 0.3145 },
    "embroidered-long-skirt": { x: 0.3496, y: 0.5684, w: 0.3008, h: 0.3125 },
    "wide-leg-pants": { x: 0.3633, y: 0.5684, w: 0.2734, h: 0.3164 }
  },
  outer: {
    "short-coat": { x: 0.2676, y: 0.3828, w: 0.4648, h: 0.2773 },
    "long-robe": { x: 0.2598, y: 0.3789, w: 0.4805, h: 0.4902 },
    "cloud-shoulder": { x: 0.2539, y: 0.3828, w: 0.4922, h: 0.2188 },
    "sleeveless-robe": { x: 0.3125, y: 0.3828, w: 0.3750, h: 0.4746 },
    "long-cape": { x: 0.2480, y: 0.3789, w: 0.5039, h: 0.4902 },
    "short-vest": { x: 0.2734, y: 0.3828, w: 0.4531, h: 0.2773 }
  }
};

const ROLE_FIT = {
  fisher: { x: 0, y: 0, w: 0, h: 0 },
  fairy: { x: 0, y: 0, w: 0, h: 0 },
  guardian: { x: 0, y: 0.022, w: -0.018, h: -0.005 }
};

function garmentSpec(garmentType, variantId) {
  const variants = GARMENT_VARIANTS[garmentType] || [];
  return variants.find((item) => item.id === variantId) || variants[0] || GARMENTS[garmentType];
}

const PATTERN_COLORS = {
  wave: ["#315f70", "#d9eef0"],
  lotus: ["#d98665", "#f7d8be"],
  cloud: ["#c6a25f", "#fff0c9"],
  meander: ["#b36f45", "#f5d5af"],
  water: ["#4b8191", "#cce9e8"],
  bird: ["#486b68", "#f0b49a"],
  scroll: ["#b49352", "#f6e7bd"],
  ruyi: ["#5e927f", "#d9eee1"],
  flame: ["#c95e42", "#f5bf68"],
  crane: ["#315f70", "#f7f0d5"]
};

function roundedPath(ctx, points, x, y, w, h, smooth = true, append = false) {
  if (!points || points.length < 3) return;
  const mapped = points.map(([px, py]) => [x + px * w, y + py * h]);
  if (!append) ctx.beginPath();
  if (!smooth) {
    ctx.moveTo(mapped[0][0], mapped[0][1]);
    mapped.slice(1).forEach(([px, py]) => ctx.lineTo(px, py));
    ctx.closePath();
    return;
  }
  const last = mapped[mapped.length - 1];
  const first = mapped[0];
  ctx.moveTo((last[0] + first[0]) / 2, (last[1] + first[1]) / 2);
  mapped.forEach((point, index) => {
    const next = mapped[(index + 1) % mapped.length];
    ctx.quadraticCurveTo(point[0], point[1], (point[0] + next[0]) / 2, (point[1] + next[1]) / 2);
  });
  ctx.closePath();
}

function vectorPath(ctx, commands, x, y, w, h, append = false) {
  if (!commands || !commands.length) return;
  if (!append) ctx.beginPath();
  commands.forEach((command) => {
    const [type, ...values] = command;
    if (type === "M") {
      ctx.moveTo(x + values[0] / 160 * w, y + values[1] / 160 * h);
    } else if (type === "L") {
      ctx.lineTo(x + values[0] / 160 * w, y + values[1] / 160 * h);
    } else if (type === "Q") {
      ctx.quadraticCurveTo(
        x + values[0] / 160 * w,
        y + values[1] / 160 * h,
        x + values[2] / 160 * w,
        y + values[3] / 160 * h
      );
    } else if (type === "Z") {
      ctx.closePath();
    }
  });
}

function guidePath(ctx, garmentType, width, height, variantId) {
  const item = garmentSpec(garmentType, variantId);
  const boxW = Math.min(width * 0.76, height * 0.82);
  const boxH = height * 0.78;
  const boxX = (width - boxW) / 2;
  const boxY = height * 0.09;
  if (item.paths) {
    ctx.beginPath();
    item.paths.forEach((path) => vectorPath(ctx, path, boxX, boxY, boxW, boxH, true));
  } else if (item.panels) {
    ctx.beginPath();
    item.panels.forEach((panel) => roundedPath(ctx, panel, boxX, boxY, boxW, boxH, true, true));
  } else {
    roundedPath(ctx, item.points, boxX, boxY, boxW, boxH, true);
  }
  return { x: boxX, y: boxY, w: boxW, h: boxH, points: item.points };
}

function getGuideShape(garmentType, width, height, variantId) {
  const item = garmentSpec(garmentType, variantId);
  const boxW = Math.min(width * 0.76, height * 0.82);
  const boxH = height * 0.78;
  const boxX = (width - boxW) / 2;
  const boxY = height * 0.09;
  return item.points.map(([x, y]) => ({
    x: boxX + x * boxW,
    y: boxY + y * boxH
  }));
}

function customShapePath(ctx, points) {
  if (!points || points.length < 3) return false;
  const last = points[points.length - 1];
  const first = points[0];
  ctx.beginPath();
  ctx.moveTo((last.x + first.x) / 2, (last.y + first.y) / 2);
  points.forEach((point, index) => {
    const next = points[(index + 1) % points.length];
    ctx.quadraticCurveTo(point.x, point.y, (point.x + next.x) / 2, (point.y + next.y) / 2);
  });
  ctx.closePath();
  return true;
}

function roundRectPath(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function patternLabelLines(value) {
  const labels = String(value || "")
    .split("·")
    .map((item) => item.trim())
    .filter(Boolean);
  if (!labels.length) return [""];
  const lines = [];
  for (let i = 0; i < labels.length; i += 3) {
    lines.push(labels.slice(i, i + 3).join(" · "));
  }
  return lines.slice(0, 3);
}

function drawTextureCover(ctx, image, bounds) {
  const sourceWidth = image.width || image.naturalWidth || 1;
  const sourceHeight = image.height || image.naturalHeight || 1;
  const scale = Math.max(bounds.w / sourceWidth, bounds.h / sourceHeight);
  const drawWidth = sourceWidth * scale;
  const drawHeight = sourceHeight * scale;
  ctx.drawImage(
    image,
    bounds.x + (bounds.w - drawWidth) / 2,
    bounds.y + (bounds.h - drawHeight) / 2,
    drawWidth,
    drawHeight
  );
}

function textilePatchPath(ctx, item) {
  const radius = item.size * 0.52;
  ctx.beginPath();
  if (item.patchShape === "leaf") {
    ctx.ellipse(0, 0, radius, radius * 0.62, 0, 0, Math.PI * 2);
  } else if (item.patchShape === "flower") {
    for (let index = 0; index < 16; index += 1) {
      const angle = -Math.PI / 2 + index * Math.PI / 8;
      const r = index % 2 === 0 ? radius : radius * 0.72;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
  } else {
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
  }
}

function drawTextilePatch(ctx, image, item) {
  ctx.save();
  ctx.translate(item.x, item.y);
  ctx.rotate(item.rotation || 0);
  textilePatchPath(ctx, item);
  ctx.save();
  ctx.clip();
  drawTextureCover(ctx, image, {
    x: -item.size * 0.52,
    y: -item.size * 0.52,
    w: item.size * 1.04,
    h: item.size * 1.04
  });
  ctx.restore();
  textilePatchPath(ctx, item);
  ctx.strokeStyle = "rgba(255, 249, 230, 0.92)";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.strokeStyle = "rgba(43, 91, 82, 0.80)";
  ctx.lineWidth = 1.8;
  ctx.stroke();
  ctx.restore();
}

function drawImageMotif(ctx, image, item, opacity = 1) {
  const sourceWidth = image.width || image.naturalWidth || 1;
  const sourceHeight = image.height || image.naturalHeight || 1;
  const scale = item.size / Math.max(sourceWidth, sourceHeight);
  const width = sourceWidth * scale;
  const height = sourceHeight * scale;
  ctx.save();
  ctx.translate(item.x, item.y);
  ctx.rotate(item.rotation || 0);
  ctx.globalAlpha = opacity;
  ctx.drawImage(image, -width / 2, -height / 2, width, height);
  ctx.restore();
}

function drawFabricVolume(ctx, bounds) {
  const sideShade = ctx.createLinearGradient(bounds.x, 0, bounds.x + bounds.w, 0);
  sideShade.addColorStop(0, "rgba(35, 66, 60, 0.22)");
  sideShade.addColorStop(0.20, "rgba(255, 255, 255, 0.04)");
  sideShade.addColorStop(0.50, "rgba(255, 255, 255, 0.16)");
  sideShade.addColorStop(0.80, "rgba(255, 255, 255, 0.04)");
  sideShade.addColorStop(1, "rgba(35, 66, 60, 0.22)");
  ctx.fillStyle = sideShade;
  ctx.fillRect(bounds.x, bounds.y, bounds.w, bounds.h);

  const verticalShade = ctx.createLinearGradient(0, bounds.y, 0, bounds.y + bounds.h);
  verticalShade.addColorStop(0, "rgba(255, 255, 255, 0.16)");
  verticalShade.addColorStop(0.55, "rgba(255, 255, 255, 0)");
  verticalShade.addColorStop(1, "rgba(55, 66, 53, 0.16)");
  ctx.fillStyle = verticalShade;
  ctx.fillRect(bounds.x, bounds.y, bounds.w, bounds.h);
}

function motif(ctx, type, x, y, size, rotation = 0, opacity = 1) {
  const colors = PATTERN_COLORS[type] || PATTERN_COLORS.cloud;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.globalAlpha = opacity;
  ctx.strokeStyle = colors[0];
  ctx.fillStyle = colors[1];
  ctx.lineWidth = Math.max(2, size * 0.055);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  if (type === "lotus") {
    for (let i = -2; i <= 2; i += 1) {
      ctx.beginPath();
      ctx.ellipse(i * size * 0.12, 0, size * 0.16, size * 0.32, i * 0.22, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(-size * 0.35, size * 0.22);
    ctx.quadraticCurveTo(0, size * 0.40, size * 0.35, size * 0.22);
    ctx.stroke();
  } else if (type === "flame") {
    ctx.beginPath();
    ctx.moveTo(0, size * 0.42);
    ctx.bezierCurveTo(-size * 0.40, size * 0.18, -size * 0.30, -size * 0.12, -size * 0.08, -size * 0.36);
    ctx.bezierCurveTo(-size * 0.10, -size * 0.05, size * 0.04, -size * 0.02, size * 0.12, -size * 0.48);
    ctx.bezierCurveTo(size * 0.42, -size * 0.12, size * 0.40, size * 0.20, 0, size * 0.42);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, size * 0.28);
    ctx.quadraticCurveTo(-size * 0.12, size * 0.04, size * 0.08, -size * 0.16);
    ctx.quadraticCurveTo(size * 0.24, size * 0.10, 0, size * 0.28);
    ctx.stroke();
  } else if (type === "crane") {
    ctx.beginPath();
    ctx.ellipse(0, size * 0.08, size * 0.18, size * 0.12, -0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(size * 0.10, 0);
    ctx.bezierCurveTo(size * 0.18, -size * 0.24, size * 0.36, -size * 0.30, size * 0.34, -size * 0.42);
    ctx.moveTo(size * 0.34, -size * 0.42);
    ctx.lineTo(size * 0.48, -size * 0.46);
    ctx.moveTo(-size * 0.06, size * 0.04);
    ctx.quadraticCurveTo(-size * 0.42, -size * 0.28, -size * 0.46, size * 0.10);
    ctx.quadraticCurveTo(-size * 0.22, -size * 0.02, -size * 0.06, size * 0.04);
    ctx.moveTo(-size * 0.05, size * 0.18);
    ctx.lineTo(-size * 0.10, size * 0.46);
    ctx.moveTo(size * 0.08, size * 0.18);
    ctx.lineTo(size * 0.13, size * 0.46);
    ctx.stroke();
  } else if (type === "cloud" || type === "ruyi") {
    ctx.beginPath();
    ctx.moveTo(-size * 0.42, size * 0.15);
    ctx.bezierCurveTo(-size * 0.38, -size * 0.08, -size * 0.18, -size * 0.15, -size * 0.05, 0);
    ctx.bezierCurveTo(size * 0.02, -size * 0.28, size * 0.38, -size * 0.19, size * 0.33, size * 0.08);
    ctx.bezierCurveTo(size * 0.56, size * 0.08, size * 0.52, size * 0.34, size * 0.25, size * 0.31);
    ctx.lineTo(-size * 0.35, size * 0.31);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(size * 0.02, size * 0.13, size * 0.13, 0.2, Math.PI * 1.8);
    ctx.stroke();
  } else if (type === "meander") {
    const s = size * 0.18;
    ctx.strokeRect(-s * 2, -s * 2, s * 4, s * 4);
    ctx.strokeRect(-s, -s, s * 2, s * 2);
    ctx.beginPath();
    ctx.moveTo(-s * 2, 0);
    ctx.lineTo(-s, 0);
    ctx.lineTo(-s, -s);
    ctx.moveTo(0, -s * 2);
    ctx.lineTo(0, -s);
    ctx.lineTo(s, -s);
    ctx.moveTo(s * 2, 0);
    ctx.lineTo(s, 0);
    ctx.lineTo(s, s);
    ctx.moveTo(0, s * 2);
    ctx.lineTo(0, s);
    ctx.lineTo(-s, s);
    ctx.stroke();
  } else if (type === "bird") {
    ctx.beginPath();
    ctx.ellipse(size * 0.05, size * 0.04, size * 0.18, size * 0.12, -0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-size * 0.02, size * 0.02);
    ctx.quadraticCurveTo(-size * 0.36, -size * 0.33, -size * 0.42, size * 0.08);
    ctx.quadraticCurveTo(-size * 0.20, size * 0.02, -size * 0.02, size * 0.02);
    ctx.moveTo(size * 0.18, -size * 0.03);
    ctx.lineTo(size * 0.36, -size * 0.10);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(size * 0.14, -size * 0.08, size * 0.02, 0, Math.PI * 2);
    ctx.fillStyle = colors[0];
    ctx.fill();
  } else if (type === "scroll") {
    for (let i = 0; i < 3; i += 1) {
      ctx.beginPath();
      ctx.arc(0, 0, size * (0.12 + i * 0.10), i * 0.8, Math.PI * (1.8 + i * 0.5));
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(-size * 0.42, size * 0.30);
    ctx.quadraticCurveTo(0, size * 0.10, size * 0.42, size * 0.30);
    ctx.stroke();
  } else {
    const lines = type === "water" ? 4 : 3;
    for (let i = 0; i < lines; i += 1) {
      const yy = (i - (lines - 1) / 2) * size * 0.16;
      ctx.beginPath();
      ctx.moveTo(-size * 0.45, yy);
      ctx.bezierCurveTo(-size * 0.20, yy - size * 0.18, 0, yy + size * 0.18, size * 0.20, yy);
      ctx.bezierCurveTo(size * 0.32, yy - size * 0.10, size * 0.42, yy - size * 0.05, size * 0.48, yy);
      ctx.stroke();
    }
  }
  ctx.restore();
}

function designClipPath(ctx, design, garmentType, width, height) {
  const shape = design.shapes && design.shapes[design.shapes.length - 1];
  if (design.mode === "free" && shape && shape.points.length >= 3) {
    customShapePath(ctx, shape.points);
    return { custom: true, points: shape.points };
  }
  if (design.mode === "free" && !design.guideVisible) {
    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    return { x: 0, y: 0, w: width, h: height };
  }
  return guidePath(ctx, garmentType, width, height, design.variant);
}

function drawGarmentDetails(ctx, garmentType, bounds, variantId, fitted = false) {
  const x = bounds.x;
  const y = bounds.y;
  const w = bounds.w;
  const h = bounds.h;
  const spec = garmentSpec(garmentType, variantId);
  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();

  if (spec.detail === "cross-top") {
    ctx.moveTo(x + w * 0.38, y + h * 0.18);
    ctx.quadraticCurveTo(x + w * 0.46, y + h * 0.30, x + w * 0.55, y + h * 0.38);
    ctx.moveTo(x + w * 0.62, y + h * 0.18);
    ctx.quadraticCurveTo(x + w * 0.54, y + h * 0.30, x + w * 0.45, y + h * 0.38);
    ctx.moveTo(x + w * 0.30, y + h * 0.70);
    ctx.lineTo(x + w * 0.70, y + h * 0.70);
    ctx.moveTo(x + w * 0.07, y + h * 0.55);
    ctx.lineTo(x + w * 0.17, y + h * 0.66);
    ctx.moveTo(x + w * 0.93, y + h * 0.55);
    ctx.lineTo(x + w * 0.83, y + h * 0.66);
  } else if (spec.detail === "wide-top") {
    ctx.moveTo(x + w * 0.41, y + h * 0.19);
    ctx.quadraticCurveTo(x + w * 0.50, y + h * 0.29, x + w * 0.59, y + h * 0.19);
    ctx.moveTo(x + w * 0.31, y + h * 0.70);
    ctx.lineTo(x + w * 0.69, y + h * 0.70);
    ctx.moveTo(x + w * 0.05, y + h * 0.60);
    ctx.lineTo(x + w * 0.15, y + h * 0.70);
    ctx.moveTo(x + w * 0.95, y + h * 0.60);
    ctx.lineTo(x + w * 0.85, y + h * 0.70);
  } else if (spec.detail === "stand-collar-top") {
    ctx.moveTo(x + w * 0.44, y + h * 0.18);
    ctx.quadraticCurveTo(x + w * 0.50, y + h * 0.13, x + w * 0.56, y + h * 0.18);
    ctx.moveTo(x + w * 0.50, y + h * 0.18);
    ctx.lineTo(x + w * 0.50, y + h * 0.78);
    [0.34, 0.48, 0.62].forEach((ratio) => {
      ctx.moveTo(x + w * 0.48, y + h * ratio);
      ctx.quadraticCurveTo(x + w * 0.54, y + h * ratio, x + w * 0.55, y + h * (ratio + 0.03));
    });
    ctx.moveTo(x + w * 0.05, y + h * 0.60);
    ctx.lineTo(x + w * 0.17, y + h * 0.71);
    ctx.moveTo(x + w * 0.95, y + h * 0.60);
    ctx.lineTo(x + w * 0.83, y + h * 0.71);
  } else if (spec.detail === "diagonal-top" || spec.detail === "diagonal-long-top") {
    ctx.moveTo(x + w * 0.40, y + h * 0.17);
    ctx.quadraticCurveTo(x + w * 0.48, y + h * 0.28, x + w * 0.60, y + h * 0.38);
    ctx.quadraticCurveTo(x + w * 0.54, y + h * 0.53, x + w * 0.47, y + h * 0.62);
    ctx.moveTo(x + w * 0.08, y + h * 0.58);
    ctx.lineTo(x + w * 0.20, y + h * 0.69);
    ctx.moveTo(x + w * 0.92, y + h * 0.58);
    ctx.lineTo(x + w * 0.80, y + h * 0.69);
    ctx.moveTo(x + w * 0.31, y + h * (spec.detail === "diagonal-long-top" ? 0.82 : 0.73));
    ctx.lineTo(x + w * 0.69, y + h * (spec.detail === "diagonal-long-top" ? 0.82 : 0.73));
    if (spec.detail === "diagonal-long-top") {
      ctx.moveTo(x + w * 0.58, y + h * 0.43);
      ctx.quadraticCurveTo(x + w * 0.65, y + h * 0.51, x + w * 0.62, y + h * 0.68);
    }
  } else if (spec.detail === "trousers") {
    ctx.moveTo(x + w * 0.27, y + h * 0.20);
    ctx.lineTo(x + w * 0.73, y + h * 0.20);
    ctx.moveTo(x + w * 0.50, y + h * 0.23);
    ctx.lineTo(x + w * 0.50, y + h * 0.52);
    ctx.moveTo(x + w * 0.18, y + h * 0.82);
    ctx.lineTo(x + w * 0.41, y + h * 0.82);
    ctx.moveTo(x + w * 0.59, y + h * 0.82);
    ctx.lineTo(x + w * 0.82, y + h * 0.82);
  } else if (spec.detail === "skirt") {
    ctx.moveTo(x + w * 0.29, y + h * 0.22);
    ctx.lineTo(x + w * 0.71, y + h * 0.22);
    [0.40, 0.50, 0.60].forEach((ratio) => {
      ctx.moveTo(x + w * ratio, y + h * 0.28);
      ctx.lineTo(x + w * (0.50 + (ratio - 0.50) * 1.45), y + h * 0.84);
    });
    ctx.moveTo(x + w * 0.16, y + h * 0.78);
    ctx.lineTo(x + w * 0.84, y + h * 0.78);
    ctx.moveTo(x + w * 0.14, y + h * 0.84);
    ctx.lineTo(x + w * 0.86, y + h * 0.84);
  } else if (spec.detail === "pleated-long-skirt") {
    ctx.moveTo(x + w * 0.31, y + h * 0.19);
    ctx.lineTo(x + w * 0.69, y + h * 0.19);
    [0.34, 0.42, 0.50, 0.58, 0.66].forEach((ratio) => {
      ctx.moveTo(x + w * (0.50 + (ratio - 0.50) * 0.58), y + h * 0.24);
      ctx.lineTo(x + w * ratio, y + h * 0.87);
    });
  } else if (spec.detail === "embroidered-long-skirt") {
    ctx.moveTo(x + w * 0.31, y + h * 0.19);
    ctx.lineTo(x + w * 0.69, y + h * 0.19);
    [0.40, 0.50, 0.60].forEach((ratio) => {
      ctx.moveTo(x + w * (0.50 + (ratio - 0.50) * 0.66), y + h * 0.26);
      ctx.lineTo(x + w * ratio, y + h * 0.82);
    });
    ctx.moveTo(x + w * 0.16, y + h * 0.80);
    ctx.quadraticCurveTo(x + w * 0.50, y + h * 0.88, x + w * 0.84, y + h * 0.80);
    ctx.moveTo(x + w * 0.15, y + h * 0.86);
    ctx.quadraticCurveTo(x + w * 0.50, y + h * 0.94, x + w * 0.85, y + h * 0.86);
  } else if (spec.detail === "wide-leg-pants") {
    ctx.moveTo(x + w * 0.25, y + h * 0.19);
    ctx.lineTo(x + w * 0.75, y + h * 0.19);
    ctx.moveTo(x + w * 0.50, y + h * 0.22);
    ctx.lineTo(x + w * 0.50, y + h * 0.49);
    ctx.moveTo(x + w * 0.13, y + h * 0.84);
    ctx.lineTo(x + w * 0.44, y + h * 0.84);
    ctx.moveTo(x + w * 0.56, y + h * 0.84);
    ctx.lineTo(x + w * 0.87, y + h * 0.84);
    ctx.moveTo(x + w * 0.30, y + h * 0.27);
    ctx.quadraticCurveTo(x + w * 0.24, y + h * 0.43, x + w * 0.22, y + h * 0.57);
    ctx.moveTo(x + w * 0.70, y + h * 0.27);
    ctx.quadraticCurveTo(x + w * 0.76, y + h * 0.43, x + w * 0.78, y + h * 0.57);
  } else if (spec.detail === "short-coat" || spec.detail === "long-robe") {
    ctx.moveTo(x + w * 0.40, y + h * 0.13);
    ctx.quadraticCurveTo(x + w * 0.45, y + h * 0.23, x + w * 0.47, y + h * 0.36);
    ctx.lineTo(x + w * 0.44, y + h * 0.88);
    ctx.moveTo(x + w * 0.60, y + h * 0.13);
    ctx.quadraticCurveTo(x + w * 0.55, y + h * 0.23, x + w * 0.53, y + h * 0.36);
    ctx.lineTo(x + w * 0.56, y + h * 0.88);
    ctx.moveTo(x + w * 0.18, y + h * 0.34);
    ctx.lineTo(x + w * 0.25, y + h * 0.44);
    ctx.moveTo(x + w * 0.82, y + h * 0.34);
    ctx.lineTo(x + w * 0.75, y + h * 0.44);
    if (spec.detail === "long-robe") {
      ctx.moveTo(x + w * 0.25, y + h * 0.84);
      ctx.quadraticCurveTo(x + w * 0.35, y + h * 0.88, x + w * 0.43, y + h * 0.86);
      ctx.moveTo(x + w * 0.57, y + h * 0.86);
      ctx.quadraticCurveTo(x + w * 0.65, y + h * 0.88, x + w * 0.75, y + h * 0.84);
    }
  } else if (spec.detail === "cloud-shoulder") {
    ctx.moveTo(x + w * 0.50, y + h * 0.18);
    ctx.lineTo(x + w * 0.50, y + h * 0.60);
    ctx.moveTo(x + w * 0.22, y + h * 0.50);
    ctx.quadraticCurveTo(x + w * 0.34, y + h * 0.67, x + w * 0.50, y + h * 0.58);
    ctx.quadraticCurveTo(x + w * 0.66, y + h * 0.67, x + w * 0.78, y + h * 0.50);
    ctx.moveTo(x + w * 0.30, y + h * 0.35);
    ctx.quadraticCurveTo(x + w * 0.50, y + h * 0.50, x + w * 0.70, y + h * 0.35);
  } else if (spec.detail === "sleeveless-robe") {
    ctx.moveTo(x + w * 0.43, y + h * 0.12);
    ctx.quadraticCurveTo(x + w * 0.47, y + h * 0.24, x + w * 0.48, y + h * 0.88);
    ctx.moveTo(x + w * 0.57, y + h * 0.12);
    ctx.quadraticCurveTo(x + w * 0.53, y + h * 0.24, x + w * 0.52, y + h * 0.88);
    ctx.moveTo(x + w * 0.28, y + h * 0.78);
    ctx.lineTo(x + w * 0.28, y + h * 0.90);
    ctx.moveTo(x + w * 0.72, y + h * 0.78);
    ctx.lineTo(x + w * 0.72, y + h * 0.90);
  } else if (spec.detail === "long-cape") {
    ctx.moveTo(x + w * 0.40, y + h * 0.12);
    ctx.quadraticCurveTo(x + w * 0.46, y + h * 0.23, x + w * 0.47, y + h * 0.90);
    ctx.moveTo(x + w * 0.60, y + h * 0.12);
    ctx.quadraticCurveTo(x + w * 0.54, y + h * 0.23, x + w * 0.53, y + h * 0.90);
    ctx.moveTo(x + w * 0.12, y + h * 0.42);
    ctx.lineTo(x + w * 0.23, y + h * 0.61);
    ctx.moveTo(x + w * 0.88, y + h * 0.42);
    ctx.lineTo(x + w * 0.77, y + h * 0.61);
    ctx.moveTo(x + w * 0.20, y + h * 0.87);
    ctx.quadraticCurveTo(x + w * 0.34, y + h * 0.94, x + w * 0.46, y + h * 0.90);
    ctx.moveTo(x + w * 0.54, y + h * 0.90);
    ctx.quadraticCurveTo(x + w * 0.66, y + h * 0.94, x + w * 0.80, y + h * 0.87);
  } else if (spec.detail === "short-vest") {
    ctx.moveTo(x + w * 0.40, y + h * 0.17);
    ctx.quadraticCurveTo(x + w * 0.48, y + h * 0.28, x + w * 0.61, y + h * 0.42);
    ctx.moveTo(x + w * 0.60, y + h * 0.17);
    ctx.quadraticCurveTo(x + w * 0.52, y + h * 0.29, x + w * 0.44, y + h * 0.40);
    ctx.moveTo(x + w * 0.31, y + h * 0.72);
    ctx.lineTo(x + w * 0.69, y + h * 0.72);
    ctx.moveTo(x + w * 0.08, y + h * 0.58);
    ctx.lineTo(x + w * 0.20, y + h * 0.69);
    ctx.moveTo(x + w * 0.92, y + h * 0.58);
    ctx.lineTo(x + w * 0.80, y + h * 0.69);
  }

  ctx.strokeStyle = "rgba(255, 249, 230, 0.82)";
  ctx.lineWidth = fitted ? 3 : 5;
  ctx.stroke();
  ctx.strokeStyle = "rgba(43, 91, 82, 0.82)";
  ctx.lineWidth = fitted ? 1.25 : 2;
  ctx.stroke();
  ctx.restore();
}

function drawDesign(ctx, design, garmentType, width, height, options = {}) {
  const showGuide = options.showGuide !== false;
  const selectedPattern = options.selectedPattern;
  if (options.clear !== false) ctx.clearRect(0, 0, width, height);

  const shape = design.shapes && design.shapes[design.shapes.length - 1];
  if (shape && design.mode === "free") {
    customShapePath(ctx, shape.points);
    ctx.fillStyle = shape.fill || design.baseColor || "#f7dfbd";
    ctx.fill();
    ctx.strokeStyle = "#50786f";
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  if (showGuide && (design.mode === "template" || design.guideVisible)) {
    guidePath(ctx, garmentType, width, height, design.variant);
    const freeGuide = design.mode === "free";
    ctx.strokeStyle = freeGuide ? "rgba(112, 145, 133, 0.38)" : (design.patterns.length ? "#50786f" : "#799b92");
    ctx.lineWidth = freeGuide ? 1.5 : (design.patterns.length ? 3 : 2);
    ctx.setLineDash(freeGuide || !design.patterns.length ? [9, 8] : []);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  ctx.save();
  designClipPath(ctx, design, garmentType, width, height);
  ctx.clip();

  if (!shape || design.mode === "template") {
    ctx.fillStyle = design.baseColor || "#f7dfbd";
    designClipPath(ctx, design, garmentType, width, height);
    ctx.fill();
  }

  const textureImage = options.textureImages && options.textureImages[design.fabric];
  if (textureImage) {
    const bounds = boundsForDesign(design, garmentType, width, height);
    drawTextureCover(ctx, textureImage, bounds);
    drawFabricVolume(ctx, bounds);
  }

  const overlays = [
    ...(design.patterns || []).map((item, index) => ({
      kind: "pattern",
      item,
      index,
      order: Number.isFinite(item.order) ? item.order : index + 1
    })),
    ...(design.strokes || []).map((stroke, index) => ({
      kind: "stroke",
      stroke,
      order: Number.isFinite(stroke.order) ? stroke.order : (design.patterns || []).length + index + 1
    }))
  ].sort((a, b) => a.order - b.order);

  overlays.forEach((overlay) => {
    if (overlay.kind === "pattern") {
      const item = overlay.item;
      const patternImage = options.textureImages && options.textureImages[item.type];
      if (item.image) {
        if (patternImage) drawImageMotif(ctx, patternImage, item, overlay.index === selectedPattern ? 1 : 0.96);
      } else if (item.patch && patternImage) {
        drawTextilePatch(ctx, patternImage, item);
      } else {
        motif(ctx, item.type, item.x, item.y, item.size, item.rotation, overlay.index === selectedPattern ? 1 : 0.92);
      }
      return;
    }

    const stroke = overlay.stroke;
    ctx.save();
    ctx.strokeStyle = stroke.erase ? (design.baseColor || "#f7dfbd") : stroke.color;
    ctx.lineWidth = stroke.erase ? stroke.size * 2.2 : stroke.size;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    stroke.points.forEach((point, index) => {
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();
    ctx.restore();
  });

  const fittedDetail = options.textureImages &&
    options.textureImages[`fitted-detail-${design.variant}`];
  if (fittedDetail && options.showAssetDetails !== false) {
    const fit = OUTFIT_FIT[garmentType][design.variant];
    const bounds = boundsForDesign(design, garmentType, width, height);
    ctx.save();
    ctx.globalAlpha = 0.62;
    ctx.drawImage(
      fittedDetail,
      fit.x * 512,
      fit.y * 512,
      fit.w * 512,
      fit.h * 512,
      bounds.x,
      bounds.y,
      bounds.w,
      bounds.h
    );
    ctx.restore();
  }
  ctx.restore();

  if (options.showOutline !== false && (textureImage || design.completed || (design.patterns || []).length)) {
    designClipPath(ctx, design, garmentType, width, height);
    ctx.strokeStyle = "rgba(43, 91, 82, 0.78)";
    ctx.lineWidth = 2.2;
    ctx.stroke();
  }

  if (options.showDetails !== false && (design.mode !== "free" || options.fitted)) {
    drawGarmentDetails(
      ctx,
      garmentType,
      boundsForDesign(design, garmentType, width, height),
      design.variant,
      Boolean(options.fitted)
    );
  }

  if (selectedPattern !== null && selectedPattern !== undefined && design.patterns[selectedPattern]) {
    const item = design.patterns[selectedPattern];
    ctx.save();
    ctx.strokeStyle = "#e19a67";
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 4]);
    ctx.strokeRect(item.x - item.size * 0.55, item.y - item.size * 0.55, item.size * 1.1, item.size * 1.1);
    ctx.setLineDash([]);
    ctx.restore();
  }

  if (options.showNodes && shape) {
    shape.points.forEach((point) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#fff8e8";
      ctx.fill();
      ctx.strokeStyle = "#df8f5f";
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  }

  if (options.showDetails !== false && garmentType === "outer" && shape && !options.fitted) {
    const bounds = boundsForDesign(design, garmentType, width, height);
    ctx.save();
    ctx.strokeStyle = "rgba(72, 112, 102, 0.66)";
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(bounds.x + bounds.w * 0.50, bounds.y + bounds.h * 0.27);
    ctx.lineTo(bounds.x + bounds.w * 0.50, bounds.y + bounds.h * 0.88);
    ctx.stroke();
    ctx.restore();
  }
}

function boundsForDesign(design, garmentType, width, height) {
  const shape = design.shapes && design.shapes[design.shapes.length - 1];
  if (design.mode === "free" && shape && shape.points.length) {
    const xs = shape.points.map((p) => p.x);
    const ys = shape.points.map((p) => p.y);
    return {
      x: Math.min(...xs),
      y: Math.min(...ys),
      w: Math.max(20, Math.max(...xs) - Math.min(...xs)),
      h: Math.max(20, Math.max(...ys) - Math.min(...ys))
    };
  }
  const guide = guidePath(
    { beginPath() {}, moveTo() {}, lineTo() {}, quadraticCurveTo() {}, closePath() {} },
    garmentType,
    width,
    height,
    design.variant
  );
  return { x: guide.x, y: guide.y, w: guide.w, h: guide.h };
}

function templateShapeBounds(design, garmentType, width, height) {
  const spec = garmentSpec(garmentType, design.variant);
  if (design.mode === "free" || !spec.paths) {
    return boundsForDesign(design, garmentType, width, height);
  }
  const boxW = Math.min(width * 0.76, height * 0.82);
  const boxH = height * 0.78;
  const boxX = (width - boxW) / 2;
  const boxY = height * 0.09;
  const xs = [];
  const ys = [];
  spec.paths.forEach((path) => {
    path.forEach((command) => {
      const values = command.slice(1);
      for (let index = 0; index < values.length; index += 2) {
        xs.push(values[index]);
        ys.push(values[index + 1]);
      }
    });
  });
  return {
    x: boxX + Math.min(...xs) / 160 * boxW,
    y: boxY + Math.min(...ys) / 160 * boxH,
    w: (Math.max(...xs) - Math.min(...xs)) / 160 * boxW,
    h: (Math.max(...ys) - Math.min(...ys)) / 160 * boxH
  };
}

function getFittingPlacement(design, garmentType, canvasWidth, canvasHeight, roleId, outfitMode = false) {
  const spec = garmentSpec(garmentType, design.variant);
  const adjustment = ROLE_FIT[roleId] || ROLE_FIT.fisher;
  const sourceWidth = design.canvasWidth || canvasWidth;
  const sourceHeight = design.canvasHeight || canvasHeight;

  if (outfitMode) {
    const fit = OUTFIT_FIT[garmentType][spec.id];
    const width = fit.w + adjustment.w;
    const height = fit.h + adjustment.h;
    return {
      bounds: templateShapeBounds(design, garmentType, sourceWidth, sourceHeight),
      target: {
        x: (fit.x + adjustment.x - adjustment.w / 2) * canvasWidth,
        y: (fit.y + adjustment.y - adjustment.h / 2) * canvasHeight,
        w: width * canvasWidth,
        h: height * canvasHeight
      }
    };
  }

  const baseAnchor = spec.anchor;
  const anchor = {
    x: baseAnchor.x + adjustment.x,
    y: baseAnchor.y + adjustment.y + (garmentType === "bottom" ? 0 : -0.02),
    w: baseAnchor.w + adjustment.w,
    h: baseAnchor.h + adjustment.h
  };
  return {
    bounds: boundsForDesign(design, garmentType, sourceWidth, sourceHeight),
    target: {
      x: anchor.x * canvasWidth,
      y: anchor.y * canvasHeight,
      w: anchor.w * canvasWidth,
      h: anchor.h * canvasHeight
    }
  };
}

function drawGarmentOnCharacter(ctx, design, garmentType, canvasWidth, canvasHeight, options = {}) {
  if (!design || !design.completed) return;
  const sourceWidth = design.canvasWidth || canvasWidth;
  const sourceHeight = design.canvasHeight || canvasHeight;
  const placement = getFittingPlacement(
    design,
    garmentType,
    canvasWidth,
    canvasHeight,
    options.roleId,
    options.outfitMode
  );
  const { bounds, target } = placement;

  ctx.save();
  ctx.translate(target.x, target.y);
  ctx.scale(target.w / bounds.w, target.h / bounds.h);
  ctx.translate(-bounds.x, -bounds.y);
  if (options.showShadow !== false) {
    ctx.save();
    designClipPath(ctx, design, garmentType, sourceWidth, sourceHeight);
    ctx.fillStyle = "rgba(38, 57, 51, 0.08)";
    ctx.shadowColor = "rgba(38, 57, 51, 0.30)";
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 5;
    ctx.fill();
    ctx.restore();
  }
  drawDesign(ctx, design, garmentType, sourceWidth, sourceHeight, {
    clear: false,
    showGuide: false,
    showDetails: options.showDetails !== false,
    showOutline: options.showOutline !== false,
    fitted: true,
    selectedPattern: null,
    textureImages: options.textureImages,
    showAssetDetails: false
  });
  ctx.restore();
}

function fittedGarmentMaskPath(ctx, garmentType, variant, width, height, roleId) {
  const adjustment = ROLE_FIT[roleId] || ROLE_FIT.fisher;
  const paths = FITTED_PATHS[variant] || [];
  paths.forEach((path, index) => {
    roundedPath(
      ctx,
      path,
      (adjustment.x - adjustment.w / 2) * width,
      (adjustment.y - adjustment.h / 2) * height,
      (1 + adjustment.w) * width,
      (1 + adjustment.h) * height,
      false,
      index > 0
    );
  });
}

function drawFittedGarmentLayer(ctx, design, garmentType, width, height, options) {
  if (!design || !design.completed) return;
  ctx.save();
  fittedGarmentMaskPath(ctx, garmentType, design.variant, width, height, options.roleId);
  ctx.clip();
  ctx.globalCompositeOperation = "source-over";
  ctx.globalAlpha = 1;
  ctx.fillStyle = design.baseColor || "#f7dfbd";
  ctx.fillRect(0, 0, width, height);
  const textureImage = options.textureImages && options.textureImages[design.fabric];
  if (textureImage) drawTextureCover(ctx, textureImage, { x: 0, y: 0, w: width, h: height });
  drawGarmentOnCharacter(ctx, design, garmentType, width, height, {
    ...options,
    outfitMode: true,
    showShadow: false,
    showDetails: false,
    showOutline: false
  });
  ctx.restore();
}

function drawHybridOutfit(ctx, designs, width, height, options) {
  drawFittedGarmentLayer(ctx, designs.bottom, "bottom", width, height, options);
  drawFittedGarmentLayer(ctx, designs.top, "top", width, height, options);
  drawFittedGarmentLayer(ctx, designs.outer, "outer", width, height, options);
}

function drawCharacterScene(ctx, image, designs, width, height, options = {}) {
  ctx.clearRect(0, 0, width, height);
  if (options.poster) {
    if (options.backgroundImage) {
      ctx.drawImage(options.backgroundImage, 0, 0, width, height);
      ctx.fillStyle = "rgba(255, 252, 238, 0.22)";
      ctx.fillRect(0, 0, width, height);
    } else {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#fff9e8");
      gradient.addColorStop(1, "#edf5e9");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }
    ctx.strokeStyle = "#d8bb7e";
    ctx.lineWidth = Math.max(3, width * 0.008);
    ctx.strokeRect(width * 0.035, height * 0.035, width * 0.93, height * 0.93);
  }

  const artSize = options.poster
    ? height * 0.88
    : Math.min(width * 0.92, height * 0.86);
  const artWidth = artSize * 0.92;
  const artHeight = Math.min(height * (options.poster ? 0.92 : 0.94), artSize * 1.12);
  const artX = options.poster
    ? Math.max(width * 0.035, width * 0.30 - artWidth / 2)
    : (width - artWidth) / 2;
  const artY = (height - artHeight) / 2;

  ctx.save();
  ctx.translate(artX, artY);
  ctx.scale(artWidth / width, artHeight / height);
  ctx.drawImage(image, 0, 0, width, height);
  const outfitMode = ["bottom", "top", "outer"].every((type) => designs[type]?.completed);
  if (outfitMode) {
    drawHybridOutfit(ctx, designs, width, height, options);
  } else {
    ["bottom", "top", "outer"].forEach((type) => {
      drawFittedGarmentLayer(ctx, designs[type], type, width, height, options);
    });
  }
  const handImage = options.textureImages &&
    options.textureImages[`fitted-hands-${options.roleId || "fisher"}`];
  if (handImage) ctx.drawImage(handImage, 0, 0, width, height);
  ctx.restore();

  if (options.poster && options.showInfo) {
    ctx.fillStyle = "rgba(255, 251, 238, 0.82)";
    roundRectPath(ctx, width * 0.60, height * 0.28, width * 0.32, height * 0.37, height * 0.035);
    ctx.fill();
    ctx.strokeStyle = "rgba(193, 157, 91, 0.40)";
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = "#315e56";
    ctx.textAlign = "center";
    ctx.font = `600 ${Math.round(height * 0.050)}px "STKaiti", serif`;
    ctx.fillText(options.title || "我的纹样新衣", width * 0.76, height * 0.40);
    ctx.font = `${Math.round(height * 0.027)}px "STKaiti", serif`;
    ctx.fillStyle = "#6d7d72";
    ctx.fillText(options.roleName || "", width * 0.76, height * 0.48);
    ctx.font = `${Math.round(height * 0.021)}px "STKaiti", serif`;
    patternLabelLines(options.patternNames).forEach((line, index) => {
      ctx.fillText(line, width * 0.76, height * (0.545 + index * 0.038));
    });
  }
}

window.Art = {
  GARMENTS,
  GARMENT_VARIANTS,
  getGuideShape,
  getFittingPlacement,
  drawDesign,
  drawCharacterScene
};
