(() => {
  "use strict";

  const { GARMENT_VARIANTS, drawDesign, drawCharacterScene } = window.Art;
  const { createCutPiece, drawCollage, pointInPiece } = window.Collage;

  const LABELS = {
    top: { name: "上衣", icon: "👕" },
    bottom: { name: "下装", icon: "👖" },
    outer: { name: "外衫", icon: "🥼" }
  };
  const VARIANT_NAMES = {
    "cross-top": "交领短衫",
    "wide-top": "宽袖上衣",
    trousers: "束口长裤",
    skirt: "百褶长裙",
    "short-coat": "对襟短衫",
    "long-robe": "广袖长袍"
  };
  const FABRICS = [
    { type: "indigo", name: "蓝印花布", note: "靛蓝花纹", src: "./assets/textiles/indigo-burst-v1.jpg" },
    { type: "coral", name: "牡丹花布", note: "朱红富贵", src: "./assets/textiles/coral-peony-v1.jpg" },
    { type: "botanical", name: "花草棉布", note: "米白小花", src: "./assets/textiles/ivory-botanical-v1.jpg" },
    { type: "cloudwater", name: "云水织锦", note: "青绿云水", src: "./assets/textiles/teal-cloud-water-v1.jpg" }
  ];
  const MOTIFS = [
    { type: "lotus", name: "莲花", note: "清雅吉祥", src: "./assets/ui/motifs/lotus.png", image: true },
    { type: "flame", name: "火焰纹", note: "光明勇气", src: "./assets/ui/motifs/flame.png", image: true },
    { type: "cloud", name: "祥云", note: "平安如意", src: "./assets/ui/motifs/cloud.png", image: true },
    { type: "crane", name: "仙鹤", note: "高洁长寿", src: "./assets/ui/motifs/crane.png", image: true },
    { type: "ruyi", name: "如意", note: "顺心如意", src: "./assets/ui/motifs/ruyi.png", image: true },
    { type: "water", name: "海浪", note: "勇敢向前", src: "./assets/ui/motifs/water.png", image: true },
    { type: "meander", name: "回纹", note: "连续不断", src: "./assets/ui/motifs/meander.png", image: true },
    { type: "bird", name: "花鸟", note: "春意盎然", src: "./assets/ui/motifs/bird.png", image: true }
  ];
  const ROLES = [
    { id: "fisher", name: "渔家福娃", src: "./assets/characters/fisher-v2.png" },
    { id: "fairy", name: "护童仙童", src: "./assets/characters/fairy.png" },
    { id: "guardian", name: "神话神将", src: "./assets/characters/guardian.png" }
  ];
  const TOOLS = [
    { id: "brush", name: "画花纹", src: "./assets/ui/tools/brush.png" },
    { id: "eraser", name: "擦一擦", src: "./assets/ui/tools/eraser.png" },
    { id: "color", name: "换颜色", src: "./assets/ui/tools/color.png" },
    { id: "undo", name: "退一步", src: "./assets/ui/tools/undo.png" },
    { id: "redo", name: "再回来", src: "./assets/ui/tools/redo.png" }
  ];
  const COLORS = ["#315f70", "#5f9485", "#d98665", "#e8b56a", "#f2d5a0", "#8e6a57", "#6e759b", "#f7dfbd"];
  const SOUND = {
    motif: ["./assets/audio/motif-add.wav", .38],
    eraser: ["./assets/audio/eraser.wav", .28],
    complete: ["./assets/audio/garment-complete.wav", .45],
    fitting: ["./assets/audio/fitting-success.wav", .42],
    poster: ["./assets/audio/poster-ready.wav", .48]
  };

  const state = {
    route: "template",
    stage: "design",
    materialTab: "garment",
    freeMaterialTab: "fabric",
    activeGarment: "top",
    selectedTool: "brush",
    selectedColor: COLORS[0],
    selectedPattern: -1,
    designZoom: 1.55,
    sound: true,
    activeRole: "fisher",
    worn: { top: true, bottom: true, outer: true },
    fitZoom: 1,
    fitPan: { x: 0, y: 0 },
    fabrics: FABRICS.slice(),
    motifs: MOTIFS.slice(),
    customCounts: { fabric: 0, motif: 0 },
    freeStage: "cut",
    freeMaterialType: "",
    cutPath: [],
    cutReady: false,
    pieces: [],
    nextPieceOrder: 1,
    selectedPieceId: "",
    collagePlaying: true,
    overallMotion: "float"
  };

  function freshDesign(type) {
    return {
      mode: "template",
      variant: GARMENT_VARIANTS[type][0].id,
      guideVisible: true,
      baseColor: "#f7dfbd",
      fabric: "",
      strokes: [],
      shapes: [],
      patterns: [],
      nextLayerOrder: 1,
      completed: false,
      canvasWidth: 1000,
      canvasHeight: 600
    };
  }
  state.designs = { top: freshDesign("top"), bottom: freshDesign("bottom"), outer: freshDesign("outer") };
  state.undo = { top: [], bottom: [], outer: [] };
  state.redo = { top: [], bottom: [], outer: [] };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const canvas = $("#designCanvas");
  const ctx = canvas.getContext("2d");
  const freeCanvas = $("#freeCanvas");
  const freeCtx = freeCanvas.getContext("2d");
  const fitCanvas = $("#fittingCanvas");
  const fitCtx = fitCanvas.getContext("2d");
  const posterCanvas = $("#posterCanvas");
  const posterCtx = posterCanvas.getContext("2d");
  canvas.width = 1000; canvas.height = 600;
  freeCanvas.width = 1000; freeCanvas.height = 600;
  fitCanvas.width = 900; fitCanvas.height = 900;
  posterCanvas.width = 1400; posterCanvas.height = 800;

  const imageMap = {};
  const roleImages = {};
  let posterBackground = null;
  let pointerState = null;
  const designPointers = new Map();
  let designPinch = null;
  let fitPointer = null;
  let animationFrame = 0;
  let toastTimer = 0;

  function image(src) {
    return new Promise((resolve) => {
      const item = new Image();
      item.onload = () => resolve(item);
      item.onerror = () => resolve(null);
      item.src = src;
    });
  }

  async function preload() {
    const materials = [...state.fabrics, ...state.motifs];
    await Promise.all(materials.map(async (item) => {
      imageMap[item.type] = await image(item.src);
    }));
    await Promise.all(ROLES.map(async (role) => {
      roleImages[role.id] = await image(role.src);
      imageMap[`fitted-hands-${role.id}`] = await image(`./assets/characters/hands/${role.id}.png`);
    }));
    const details = ["cross-top", "wide-top", "trousers", "skirt", "short-coat", "long-robe"];
    await Promise.all(details.map(async (variant) => {
      imageMap[`fitted-detail-${variant}`] = await image(`./assets/garments/fitted/v1/detail/${variant}.png`);
    }));
    posterBackground = await image("./assets/backgrounds/workshop-bg-v2.jpg");
    renderDesignCanvas();
    renderFreeCanvas();
  }

  function playSound(name) {
    if (!state.sound || !SOUND[name]) return;
    const audio = new Audio(SOUND[name][0]);
    audio.volume = SOUND[name][1];
    audio.play().catch(() => {});
  }

  function toast(message) {
    const node = $("#toast");
    node.textContent = message;
    node.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => node.classList.remove("show"), 1800);
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function pushHistory() {
    const type = state.activeGarment;
    state.undo[type].push(clone(state.designs[type]));
    if (state.undo[type].length > 30) state.undo[type].shift();
    state.redo[type] = [];
  }

  function restoreHistory(direction) {
    const type = state.activeGarment;
    const from = direction === "undo" ? state.undo[type] : state.redo[type];
    const to = direction === "undo" ? state.redo[type] : state.undo[type];
    if (!from.length) return toast(direction === "undo" ? "没有可撤销的操作" : "没有可重做的操作");
    to.push(clone(state.designs[type]));
    state.designs[type] = from.pop();
    state.selectedPattern = -1;
    renderAllDesignUI();
  }

  function nextOrder(design) {
    const order = design.nextLayerOrder || 1;
    design.nextLayerOrder = order + 1;
    return order;
  }

  function currentDesign() {
    return state.designs[state.activeGarment];
  }

  function completedCount() {
    return Object.values(state.designs).filter((design) => design.completed).length;
  }

  function activeVariant() {
    const design = currentDesign();
    return GARMENT_VARIANTS[state.activeGarment].find((item) => item.id === design.variant) || GARMENT_VARIANTS[state.activeGarment][0];
  }

  function renderMaterialList() {
    const list = $("#materialList");
    if (state.materialTab === "garment") {
      list.innerHTML = GARMENT_VARIANTS[state.activeGarment].map((item) => `
        <button class="material-card garment ${currentDesign().variant === item.id ? "active" : ""}" data-variant="${item.id}">
          <img src=".${item.thumb}" alt=""><span>${VARIANT_NAMES[item.id]}</span>
          <small>${currentDesign().variant === item.id ? "正在使用" : "点击换版"}</small>
        </button>`).join("");
      return;
    }
    const kind = state.materialTab;
    const items = kind === "fabric" ? state.fabrics : state.motifs;
    const selectedType = kind === "fabric" ? currentDesign().fabric : currentDesign().patterns[state.selectedPattern]?.type;
    list.innerHTML = items.map((item) => `
      <button class="material-card ${selectedType === item.type ? "active" : ""}" data-material="${item.type}" data-kind="${kind}">
        <img src="${item.src}" alt=""><span>${item.name}</span><small>${item.note}</small>
      </button>`).join("") + `
      <button class="material-card upload-card" data-upload="${kind}">
        <b>${state.customCounts[kind] ? "＋" : "⇧"}</b>
        <span>${state.customCounts[kind] ? "新增图片" : "上传图片"}</span>
        <small>${state.customCounts[kind]}/8</small>
      </button>`;
  }

  function renderFreeMaterials() {
    const kind = state.freeMaterialTab;
    const items = kind === "fabric" ? state.fabrics : state.motifs;
    $("#freeMaterialList").innerHTML = items.map((item) => `
      <button class="material-card ${state.freeMaterialType === item.type ? "active" : ""}" data-free-material="${item.type}">
        <img src="${item.src}" alt=""><span>${item.name}</span><small>${item.note}</small>
      </button>`).join("") + `
      <button class="material-card upload-card" data-free-upload="${kind}">
        <b>${state.customCounts[kind] ? "＋" : "⇧"}</b>
        <span>${state.customCounts[kind] ? "新增图片" : "上传图片"}</span><small>${state.customCounts[kind]}/8</small>
      </button>`;
  }

  function renderTools() {
    $("#toolList").innerHTML = TOOLS.map((tool) => `
      <button class="tool-button ${state.selectedTool === tool.id ? "active" : ""}" data-tool="${tool.id}">
        <img src="${tool.src}" alt=""><span>${tool.name}</span>
      </button>`).join("");
    $("#palette").innerHTML = COLORS.map((color) => `<button data-color="${color}" style="background:${color}" aria-label="${color}"></button>`).join("");
  }

  function renderGarmentNav() {
    $("#garmentNav").innerHTML = Object.entries(LABELS).map(([type, label]) => `
      <button data-garment="${type}" class="${state.activeGarment === type ? "active" : ""} ${state.designs[type].completed ? "done" : ""}">
        <span>${label.icon}　${label.name}</span><small>${VARIANT_NAMES[state.designs[type].variant]}</small>
      </button>`).join("");
  }

  function renderCloset() {
    const count = completedCount();
    $("#progressText").textContent = `${count}/3`;
    $("#progressChip").innerHTML = `小衣橱 <b>${count}/3</b>`;
    $("#progressFill").style.width = `${count / 3 * 100}%`;
    $("#closetList").innerHTML = Object.entries(LABELS).map(([type, label]) => `
      <div class="closet-item ${state.designs[type].completed ? "done" : ""}"><span>${label.icon} ${label.name}</span><b>${state.designs[type].completed ? "✓" : "○"}</b></div>`).join("");
    $("#goFitting").disabled = count < 3;
    $("#goFitting").textContent = count === 3 ? "下一站 · 请角色试穿" : `完成三件后试穿 · ${count}/3`;
  }

  function renderDesignCanvas() {
    const design = currentDesign();
    drawDesign(ctx, design, state.activeGarment, canvas.width, canvas.height, {
      showGuide: $("#guideToggle").checked,
      selectedPattern: state.selectedPattern >= 0 ? state.selectedPattern : null,
      textureImages: imageMap
    });
    canvas.style.transform = `scale(${state.designZoom})`;
    $("#designZoomLabel").textContent = `${Math.round(state.designZoom * 100)}%`;
    $("#selectionTools").classList.toggle("hidden", state.selectedPattern < 0);
  }

  function setDesignZoom(value) {
    state.designZoom = Math.max(.8, Math.min(2, value));
    renderDesignCanvas();
  }

  function renderAllDesignUI() {
    const label = LABELS[state.activeGarment].name;
    const variant = VARIANT_NAMES[activeVariant().id];
    $("#currentLabel").textContent = `${label} · ${variant}`;
    $("#canvasTag").textContent = `${label} · ${variant}`;
    renderMaterialList();
    renderTools();
    renderGarmentNav();
    renderCloset();
    renderDesignCanvas();
  }

  function switchMaterialTab(tab) {
    state.materialTab = tab;
    state.selectedPattern = -1;
    $$(".material-tabs [data-tab]").forEach((button) => button.classList.toggle("active", button.dataset.tab === tab));
    renderMaterialList();
    renderDesignCanvas();
  }

  function switchGarment(type) {
    state.activeGarment = type;
    state.selectedPattern = -1;
    if (state.materialTab === "garment") renderMaterialList();
    renderAllDesignUI();
  }

  function chooseVariant(id) {
    if (currentDesign().variant === id) return;
    pushHistory();
    currentDesign().variant = id;
    currentDesign().completed = false;
    renderAllDesignUI();
  }

  function applyMaterial(type, kind) {
    const design = currentDesign();
    pushHistory();
    if (kind === "fabric") {
      design.fabric = type;
      state.selectedPattern = -1;
    } else {
      const index = design.patterns.filter((item) => !item.patch).length;
      const source = state.motifs.find((item) => item.type === type);
      design.patterns.push({
        type,
        image: true,
        patch: false,
        order: nextOrder(design),
        x: canvas.width * (.44 + index % 3 * .06),
        y: canvas.height * (.42 + index % 2 * .12),
        size: Math.min(canvas.width, canvas.height) * .18,
        rotation: 0,
        custom: Boolean(source?.custom)
      });
      state.selectedPattern = design.patterns.length - 1;
      state.selectedTool = "material";
      playSound("motif");
    }
    renderAllDesignUI();
  }

  function uploadMaterial(file, kind) {
    if (!file) return;
    if (state.customCounts[kind] >= 8) return toast("每一类最多上传 8 张图片");
    const type = `custom-${kind}-${Date.now()}`;
    const src = URL.createObjectURL(file);
    const item = {
      type,
      name: `自定义${kind === "fabric" ? "花布" : "纹样"} ${state.customCounts[kind] + 1}`,
      note: "我的图片",
      src,
      image: kind === "motif",
      custom: true
    };
    state.customCounts[kind] += 1;
    (kind === "fabric" ? state.fabrics : state.motifs).push(item);
    image(src).then((loaded) => {
      imageMap[type] = loaded;
      state.freeMaterialType = type;
      if (state.route === "free") {
        state.freeMaterialTab = kind;
        renderFreeMaterials();
        renderFreeCanvas();
      } else {
        state.materialTab = kind;
        applyMaterial(type, kind);
      }
    });
  }

  function pointOnCanvas(event, targetCanvas) {
    const rect = targetCanvas.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * targetCanvas.width / rect.width,
      y: (event.clientY - rect.top) * targetCanvas.height / rect.height
    };
  }

  function hitPattern(point) {
    const patterns = currentDesign().patterns;
    for (let index = patterns.length - 1; index >= 0; index -= 1) {
      const item = patterns[index];
      if (Math.abs(item.x - point.x) < item.size * .65 && Math.abs(item.y - point.y) < item.size * .65) return index;
    }
    return -1;
  }

  function designPointerDown(event) {
    canvas.setPointerCapture(event.pointerId);
    if (event.pointerType === "touch") {
      designPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      if (designPointers.size >= 2) {
        if (pointerState?.kind === "stroke") {
          const design = currentDesign();
          const index = design.strokes.indexOf(pointerState.stroke);
          if (index >= 0) design.strokes.splice(index, 1);
          state.undo[state.activeGarment].pop();
        }
        pointerState = null;
        const [first, second] = Array.from(designPointers.values());
        designPinch = {
          distance: Math.max(1, Math.hypot(second.x - first.x, second.y - first.y)),
          zoom: state.designZoom
        };
        return;
      }
    }
    const point = pointOnCanvas(event, canvas);
    const design = currentDesign();
    const hit = hitPattern(point);
    if (hit >= 0) {
      pushHistory();
      state.selectedPattern = hit;
      state.selectedTool = "material";
      pointerState = { kind: "pattern", index: hit, offsetX: point.x - design.patterns[hit].x, offsetY: point.y - design.patterns[hit].y };
      renderAllDesignUI();
      return;
    }
    if (state.selectedPattern >= 0) {
      state.selectedPattern = -1;
      pointerState = null;
      renderDesignCanvas();
      return;
    }
    if (!["brush", "eraser"].includes(state.selectedTool)) return;
    pushHistory();
    const stroke = {
      color: state.selectedColor,
      size: state.selectedTool === "eraser" ? 17 : 7,
      erase: state.selectedTool === "eraser",
      order: nextOrder(design),
      points: [point]
    };
    design.strokes.push(stroke);
    pointerState = { kind: "stroke", stroke };
    if (state.selectedTool === "eraser") playSound("eraser");
    renderDesignCanvas();
  }

  function designPointerMove(event) {
    if (event.pointerType === "touch" && designPointers.has(event.pointerId)) {
      designPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      if (designPinch && designPointers.size >= 2) {
        const [first, second] = Array.from(designPointers.values());
        const distance = Math.max(1, Math.hypot(second.x - first.x, second.y - first.y));
        setDesignZoom(designPinch.zoom * distance / designPinch.distance);
        return;
      }
    }
    if (!pointerState) return;
    const point = pointOnCanvas(event, canvas);
    if (pointerState.kind === "pattern") {
      const item = currentDesign().patterns[pointerState.index];
      item.x = point.x - pointerState.offsetX;
      item.y = point.y - pointerState.offsetY;
    } else {
      const points = pointerState.stroke.points;
      const last = points[points.length - 1];
      if (Math.hypot(point.x - last.x, point.y - last.y) > 3) points.push(point);
    }
    renderDesignCanvas();
  }

  function designPointerUp(event) {
    if (event?.pointerType === "touch") {
      designPointers.delete(event.pointerId);
      if (designPinch) {
        if (designPointers.size < 2) designPinch = null;
        pointerState = null;
        return;
      }
    }
    pointerState = null;
  }

  function adjustPattern(action) {
    const design = currentDesign();
    const item = design.patterns[state.selectedPattern];
    if (!item) return;
    pushHistory();
    if (action === "smaller") item.size = Math.max(25, item.size * .86);
    if (action === "larger") item.size = Math.min(380, item.size * 1.16);
    if (action === "rotate") item.rotation += Math.PI / 8;
    if (action === "forward") {
      design.patterns.splice(state.selectedPattern, 1);
      item.order = nextOrder(design);
      design.patterns.push(item);
      state.selectedPattern = design.patterns.length - 1;
    }
    if (action === "delete") {
      design.patterns.splice(state.selectedPattern, 1);
      state.selectedPattern = -1;
      state.selectedTool = "brush";
    }
    renderAllDesignUI();
  }

  function completeGarment() {
    const design = currentDesign();
    if (!design.fabric && !design.patterns.length && !design.strokes.length) return toast("先挑一块花布、加入纹样或画一画");
    design.completed = true;
    playSound("complete");
    toast(`${LABELS[state.activeGarment].name}已经收进小衣橱`);
    const next = ["top", "bottom", "outer"].find((type) => !state.designs[type].completed);
    if (next) switchGarment(next);
    else renderAllDesignUI();
  }

  function setRoute(route) {
    state.route = route;
    $$(".route").forEach((button) => button.classList.toggle("active", button.dataset.route === route));
    $("#templateWorkspace").classList.toggle("hidden", route !== "template");
    $("#freeWorkspace").classList.toggle("hidden", route !== "free");
    $("#currentLabel").textContent = route === "template" ? `${LABELS[state.activeGarment].name} · ${VARIANT_NAMES[activeVariant().id]}` : "自由拼剪 · 不限制作品形状";
    $("#guideControl").classList.toggle("hidden", route === "free");
    $("#progressChip").classList.toggle("hidden", route === "free");
    if (route === "free") renderFreeCanvas();
  }

  function sourceImageBounds(item) {
    const img = imageMap[item];
    if (!img) return { x: 0, y: 0, width: freeCanvas.width, height: freeCanvas.height };
    const scale = Math.min(freeCanvas.width * .82 / img.width, freeCanvas.height * .82 / img.height);
    const width = img.width * scale;
    const height = img.height * scale;
    return { x: (freeCanvas.width - width) / 2, y: (freeCanvas.height - height) / 2, width, height };
  }

  function renderFreeCanvas(staticFrame = false) {
    cancelAnimationFrame(animationFrame);
    const hint = $("#freeHint");
    if (state.freeStage === "cut") {
      freeCtx.clearRect(0, 0, freeCanvas.width, freeCanvas.height);
      freeCtx.fillStyle = "#fffdf5";
      freeCtx.fillRect(0, 0, freeCanvas.width, freeCanvas.height);
      const img = imageMap[state.freeMaterialType];
      if (img) {
        const bounds = sourceImageBounds(state.freeMaterialType);
        freeCtx.drawImage(img, bounds.x, bounds.y, bounds.width, bounds.height);
        freeCtx.fillStyle = "rgba(255,253,245,.28)";
        freeCtx.fillRect(0, 0, freeCanvas.width, freeCanvas.height);
      }
      if (state.cutPath.length) {
        freeCtx.beginPath();
        freeCtx.moveTo(state.cutPath[0].x, state.cutPath[0].y);
        state.cutPath.slice(1).forEach((point) => freeCtx.lineTo(point.x, point.y));
        if (state.cutReady) freeCtx.closePath();
        freeCtx.strokeStyle = "#d67d56";
        freeCtx.lineWidth = 4;
        freeCtx.setLineDash(state.cutReady ? [10, 7] : []);
        freeCtx.stroke();
        if (state.cutReady) {
          freeCtx.fillStyle = "rgba(255, 247, 222, .18)";
          freeCtx.fill();
        }
        freeCtx.setLineDash([]);
      }
      hint.classList.toggle("hidden", Boolean(img));
      hint.textContent = img ? "" : "在左侧挑一块花布或纹样";
      return;
    }
    hint.classList.add("hidden");
    drawCollage(freeCtx, state.pieces, imageMap, freeCanvas.width, freeCanvas.height, {
      selectedId: state.freeStage === "compose" ? state.selectedPieceId : "",
      animate: state.freeStage === "showcase" && state.collagePlaying && !staticFrame,
      overallMotion: state.overallMotion,
      time: performance.now(),
      hideSelection: state.freeStage === "showcase"
    });
    if (state.freeStage === "showcase" && state.collagePlaying && !staticFrame) {
      animationFrame = requestAnimationFrame(() => renderFreeCanvas());
    }
  }

  function updateFreeStageUI() {
    $$("[data-free-stage]").forEach((button) => button.classList.toggle("active", button.dataset.freeStage === state.freeStage));
    $("#cutActions").classList.toggle("hidden", state.freeStage !== "cut");
    $("#composeActions").classList.toggle("hidden", state.freeStage !== "compose");
    $("#showcaseActions").classList.toggle("hidden", state.freeStage !== "showcase");
    $("#freeToolTitle").textContent = state.freeStage === "cut" ? "裁切工具" : state.freeStage === "compose" ? "部件工具" : "动画与保存";
    $("#freeTitle").textContent = state.freeStage === "cut" ? "① 自由画出想要的裁片" : state.freeStage === "compose" ? "② 拖动、缩放、旋转和叠加" : "③ 让拼剪作品动起来";
    $("#pieceCount").textContent = `${state.pieces.length} 个拼剪部件`;
    $("#retryCut").disabled = !state.cutPath.length;
    $("#confirmCut").disabled = !state.cutReady;
    const piece = state.pieces.find((item) => item.id === state.selectedPieceId);
    $("#pieceMotion").value = piece?.motion || "none";
    $("#overallMotion").value = state.overallMotion;
    $("#playAnimation").textContent = state.collagePlaying ? "⏸ 暂停动画" : "▶ 播放动画";
    renderFreeCanvas();
  }

  function chooseFreeMaterial(type) {
    state.freeMaterialType = type;
    state.cutPath = [];
    state.cutReady = false;
    state.freeStage = "cut";
    renderFreeMaterials();
    updateFreeStageUI();
  }

  function freePointerDown(event) {
    freeCanvas.setPointerCapture(event.pointerId);
    const point = pointOnCanvas(event, freeCanvas);
    if (state.freeStage === "cut") {
      if (!state.freeMaterialType) return toast("先选择一块花布或纹样");
      state.cutPath = [point];
      state.cutReady = false;
      pointerState = { kind: "cut", pointerId: event.pointerId };
      updateFreeStageUI();
      return;
    }
    if (state.freeStage !== "compose") return;
    const ordered = state.pieces.slice().sort((a, b) => b.order - a.order);
    const hit = ordered.find((piece) => pointInPiece(point, piece));
    if (!hit) {
      state.selectedPieceId = "";
      renderFreeCanvas();
      return;
    }
    hit.order = state.nextPieceOrder++;
    state.selectedPieceId = hit.id;
    pointerState = { kind: "piece", id: hit.id, x: point.x, y: point.y, startX: hit.x, startY: hit.y };
    updateFreeStageUI();
  }

  function freePointerMove(event) {
    if (!pointerState) return;
    const point = pointOnCanvas(event, freeCanvas);
    if (pointerState.kind === "cut") {
      const last = state.cutPath[state.cutPath.length - 1];
      if (Math.hypot(point.x - last.x, point.y - last.y) > 5) state.cutPath.push(point);
    } else if (pointerState.kind === "piece") {
      const piece = state.pieces.find((item) => item.id === pointerState.id);
      if (piece) {
        piece.x = pointerState.startX + point.x - pointerState.x;
        piece.y = pointerState.startY + point.y - pointerState.y;
      }
    }
    renderFreeCanvas();
  }

  function freePointerUp() {
    if (pointerState?.kind === "cut") {
      state.cutReady = state.cutPath.length >= 3;
      if (!state.cutReady) state.cutPath = [];
    }
    pointerState = null;
    updateFreeStageUI();
  }

  function confirmCut() {
    if (!state.cutReady) return;
    const bounds = sourceImageBounds(state.freeMaterialType);
    const item = state.freeMaterialTab;
    const piece = createCutPiece(
      state.cutPath,
      state.freeMaterialType,
      item,
      { x: bounds.x, y: bounds.y, width: bounds.width, height: bounds.height },
      freeCanvas.width,
      freeCanvas.height,
      state.nextPieceOrder++
    );
    state.pieces.push(piece);
    state.selectedPieceId = piece.id;
    state.cutPath = [];
    state.cutReady = false;
    state.freeStage = "compose";
    updateFreeStageUI();
    toast("裁片已放进拼搭画布");
  }

  function pieceAction(action) {
    const index = state.pieces.findIndex((item) => item.id === state.selectedPieceId);
    if (index < 0) return toast("先点选一个部件");
    const piece = state.pieces[index];
    if (action === "smaller") piece.scale = Math.max(.15, piece.scale * .86);
    if (action === "larger") piece.scale = Math.min(4, piece.scale * 1.16);
    if (action === "rotate") piece.rotation += Math.PI / 8;
    if (action === "forward") piece.order = state.nextPieceOrder++;
    if (action === "copy") {
      const copy = clone(piece);
      copy.id = `piece-${Date.now()}-${state.nextPieceOrder}`;
      copy.order = state.nextPieceOrder++;
      copy.x += 25; copy.y += 25;
      state.pieces.push(copy);
      state.selectedPieceId = copy.id;
    }
    if (action === "delete") {
      state.pieces.splice(index, 1);
      state.selectedPieceId = "";
    }
    updateFreeStageUI();
  }

  function freeWheel(event) {
    if (state.freeStage !== "compose") return;
    const piece = state.pieces.find((item) => item.id === state.selectedPieceId);
    if (!piece) return;
    event.preventDefault();
    piece.scale = Math.max(.15, Math.min(4, piece.scale * (event.deltaY < 0 ? 1.08 : .92)));
    renderFreeCanvas();
  }

  function saveCanvas(target, filename) {
    const link = document.createElement("a");
    link.download = filename;
    link.href = target.toDataURL("image/png");
    link.click();
  }

  function setStage(stage) {
    if (stage === "fitting" && completedCount() < 3) return toast("请先完成三件服饰");
    state.stage = stage;
    $$(".stage-page").forEach((page) => page.classList.toggle("active", page.id === `${stage}Stage`));
    $$(".step").forEach((step) => step.classList.toggle("active", step.dataset.stage === stage));
    if (stage === "fitting") {
      renderFittingUI();
      playSound("fitting");
    }
    if (stage === "poster") {
      renderPoster();
      playSound("poster");
    }
  }

  function sceneDesigns() {
    const result = {};
    Object.keys(LABELS).forEach((type) => {
      result[type] = clone(state.designs[type]);
      result[type].completed = Boolean(state.worn[type] && state.designs[type].completed);
    });
    return result;
  }

  function renderRoleList() {
    $("#roleList").innerHTML = ROLES.map((role) => `
      <button class="role-card ${state.activeRole === role.id ? "active" : ""}" data-role="${role.id}">
        <img src="${role.src}" alt=""><b>${role.name}</b><i></i>
      </button>`).join("");
  }

  function renderWearList() {
    $("#wearList").innerHTML = Object.entries(LABELS).map(([type, label]) => `
      <button class="wear-card ${state.worn[type] ? "active" : ""}" data-wear="${type}">
        <span>${label.icon}</span><span><b>${label.name}</b><small>${state.worn[type] ? "已经穿上" : "点击穿上"}</small></span><i></i>
      </button>`).join("");
  }

  function renderFittingCanvas() {
    const fittingWrap = fitCanvas.parentElement;
    const fittingSize = Math.min(fittingWrap.clientWidth, fittingWrap.clientHeight);
    if (fittingSize > 0) {
      fitCanvas.style.width = `${fittingSize}px`;
      fitCanvas.style.height = `${fittingSize}px`;
    }
    drawCharacterScene(fitCtx, roleImages[state.activeRole], sceneDesigns(), fitCanvas.width, fitCanvas.height, {
      textureImages: imageMap,
      roleId: state.activeRole,
      showDetails: false,
      showOutline: false
    });
    fitCanvas.style.transform = `translate(${state.fitPan.x}px, ${state.fitPan.y}px) scale(${state.fitZoom})`;
    $("#fitZoomLabel").textContent = `${Math.round(state.fitZoom * 100)}%`;
  }

  function renderFittingUI() {
    renderRoleList();
    renderWearList();
    const role = ROLES.find((item) => item.id === state.activeRole);
    $("#fittingTitle").textContent = `${role.name}正在试穿`;
    renderFittingCanvas();
  }

  function setFitZoom(value) {
    state.fitZoom = Math.max(1, Math.min(2.5, value));
    if (state.fitZoom === 1) state.fitPan = { x: 0, y: 0 };
    renderFittingCanvas();
  }

  function renderPoster() {
    const role = ROLES.find((item) => item.id === state.activeRole);
    const names = new Set();
    Object.values(state.designs).forEach((design) => {
      const fabric = state.fabrics.find((item) => item.type === design.fabric);
      if (fabric) names.add(fabric.name);
      design.patterns.forEach((pattern) => {
        const item = state.motifs.find((motif) => motif.type === pattern.type);
        if (item) names.add(item.name);
      });
    });
    drawCharacterScene(posterCtx, roleImages[state.activeRole], state.designs, posterCanvas.width, posterCanvas.height, {
      poster: true,
      backgroundImage: posterBackground,
      showInfo: $("#showInfo").checked,
      title: $("#workTitle").value.trim() || "我的纹样新衣",
      roleName: role.name,
      patternNames: Array.from(names).join(" · ") || "传统纹样创作",
      textureImages: imageMap,
      roleId: state.activeRole,
      showDetails: false,
      showOutline: false
    });
  }

  function resetAll() {
    state.designs = { top: freshDesign("top"), bottom: freshDesign("bottom"), outer: freshDesign("outer") };
    state.activeGarment = "top";
    state.selectedPattern = -1;
    state.worn = { top: true, bottom: true, outer: true };
    setStage("design");
    setRoute("template");
    renderAllDesignUI();
  }

  function bindEvents() {
    document.addEventListener("click", (event) => {
      const target = event.target.closest("button");
      if (!target) return;
      if (target.dataset.route) setRoute(target.dataset.route);
      if (target.dataset.tab) switchMaterialTab(target.dataset.tab);
      if (target.dataset.variant) chooseVariant(target.dataset.variant);
      if (target.dataset.garment) switchGarment(target.dataset.garment);
      if (target.dataset.material) applyMaterial(target.dataset.material, target.dataset.kind);
      if (target.dataset.upload) {
        $("#materialUpload").dataset.kind = target.dataset.upload;
        $("#materialUpload").click();
      }
      if (target.dataset.tool) {
        if (["undo", "redo"].includes(target.dataset.tool)) restoreHistory(target.dataset.tool);
        else {
          state.selectedTool = target.dataset.tool;
          $("#palette").classList.toggle("hidden", target.dataset.tool !== "color");
          if (target.dataset.tool !== "material") state.selectedPattern = -1;
          renderTools(); renderDesignCanvas();
        }
      }
      if (target.dataset.color) {
        pushHistory();
        state.selectedColor = target.dataset.color;
        currentDesign().baseColor = target.dataset.color;
        state.selectedTool = "brush";
        $("#palette").classList.add("hidden");
        renderTools(); renderDesignCanvas();
      }
      if (target.dataset.adjust) adjustPattern(target.dataset.adjust);
      if (target.dataset.zoom) {
        setDesignZoom(state.designZoom + (target.dataset.zoom === "in" ? .15 : -.15));
      }
      if (target.dataset.freeTab) {
        state.freeMaterialTab = target.dataset.freeTab;
        $$("[data-free-tab]").forEach((button) => button.classList.toggle("active", button.dataset.freeTab === state.freeMaterialTab));
        renderFreeMaterials();
      }
      if (target.dataset.freeMaterial) chooseFreeMaterial(target.dataset.freeMaterial);
      if (target.dataset.freeUpload) {
        $("#freeMaterialUpload").dataset.kind = target.dataset.freeUpload;
        $("#freeMaterialUpload").click();
      }
      if (target.dataset.freeStage) {
        if (target.dataset.freeStage !== "cut" && !state.pieces.length) return toast("先剪出一个部件");
        state.freeStage = target.dataset.freeStage;
        state.collagePlaying = target.dataset.freeStage === "showcase";
        updateFreeStageUI();
      }
      if (target.dataset.pieceAction) pieceAction(target.dataset.pieceAction);
      if (target.dataset.stage) setStage(target.dataset.stage);
      if (target.dataset.role) {
        state.activeRole = target.dataset.role;
        renderFittingUI();
      }
      if (target.dataset.wear) {
        state.worn[target.dataset.wear] = !state.worn[target.dataset.wear];
        renderFittingUI();
      }
      if (target.dataset.fitZoom) setFitZoom(state.fitZoom + (target.dataset.fitZoom === "in" ? .15 : -.15));
    });

    $("#materialUpload").addEventListener("change", (event) => {
      uploadMaterial(event.target.files[0], event.target.dataset.kind);
      event.target.value = "";
    });
    $("#freeMaterialUpload").addEventListener("change", (event) => {
      uploadMaterial(event.target.files[0], event.target.dataset.kind);
      event.target.value = "";
    });
    $("#guideToggle").addEventListener("change", renderDesignCanvas);
    $("#soundToggle").addEventListener("click", () => {
      state.sound = !state.sound;
      $("#soundToggle").textContent = state.sound ? "🔊" : "🔇";
    });
    $("#fullscreenButton").addEventListener("click", () => {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
      else document.exitFullscreen?.();
    });
    $("#completeGarment").addEventListener("click", completeGarment);
    $("#goFitting").addEventListener("click", () => setStage("fitting"));
    $("#backToDesign").addEventListener("click", () => setStage("design"));
    $("#wearAll").addEventListener("click", () => {
      state.worn = { top: true, bottom: true, outer: true };
      renderFittingUI();
    });
    $("#goPoster").addEventListener("click", () => {
      if (!Object.values(state.worn).some(Boolean)) return toast("至少穿上一件服饰");
      setStage("poster");
    });
    $("#changeRole").addEventListener("click", () => setStage("fitting"));
    $("#workTitle").addEventListener("input", renderPoster);
    $("#showInfo").addEventListener("change", renderPoster);
    $("#savePoster").addEventListener("click", () => {
      renderPoster();
      saveCanvas(posterCanvas, "纹样灵感工坊-作品海报.png");
      toast("高清海报已下载");
    });
    $("#restart").addEventListener("click", resetAll);

    canvas.addEventListener("pointerdown", designPointerDown);
    canvas.addEventListener("pointermove", designPointerMove);
    canvas.addEventListener("pointerup", designPointerUp);
    canvas.addEventListener("pointercancel", designPointerUp);
    canvas.addEventListener("wheel", (event) => {
      event.preventDefault();
      setDesignZoom(state.designZoom * (event.deltaY < 0 ? 1.08 : .92));
    }, { passive: false });
    document.addEventListener("keydown", (event) => {
      if (state.stage !== "design" || state.route !== "template") return;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;
      if (["+", "="].includes(event.key)) {
        event.preventDefault();
        setDesignZoom(state.designZoom + .15);
      } else if (["-", "_"].includes(event.key)) {
        event.preventDefault();
        setDesignZoom(state.designZoom - .15);
      } else if (event.key === "0") {
        event.preventDefault();
        setDesignZoom(1.55);
      }
    });

    freeCanvas.addEventListener("pointerdown", freePointerDown);
    freeCanvas.addEventListener("pointermove", freePointerMove);
    freeCanvas.addEventListener("pointerup", freePointerUp);
    freeCanvas.addEventListener("pointercancel", freePointerUp);
    freeCanvas.addEventListener("wheel", freeWheel, { passive: false });
    $("#retryCut").addEventListener("click", () => {
      state.cutPath = []; state.cutReady = false; updateFreeStageUI();
    });
    $("#confirmCut").addEventListener("click", confirmCut);
    $("#addMorePiece").addEventListener("click", () => {
      state.freeStage = "cut"; state.cutPath = []; state.cutReady = false; updateFreeStageUI();
    });
    $("#goShowcase").addEventListener("click", () => {
      if (!state.pieces.length) return toast("请先完成至少一个拼剪部件");
      state.freeStage = "showcase"; state.collagePlaying = true; updateFreeStageUI();
    });
    $("#editCollage").addEventListener("click", () => {
      state.freeStage = "compose"; state.collagePlaying = false; updateFreeStageUI();
    });
    $("#playAnimation").addEventListener("click", () => {
      state.collagePlaying = !state.collagePlaying; updateFreeStageUI();
    });
    $("#pieceMotion").addEventListener("change", (event) => {
      const piece = state.pieces.find((item) => item.id === state.selectedPieceId);
      if (piece) piece.motion = event.target.value;
      renderFreeCanvas();
    });
    $("#overallMotion").addEventListener("change", (event) => {
      state.overallMotion = event.target.value; renderFreeCanvas();
    });
    $("#saveCollage").addEventListener("click", () => {
      renderFreeCanvas(true);
      saveCanvas(freeCanvas, "纹样灵感工坊-自由拼剪.png");
      if (state.collagePlaying) renderFreeCanvas();
      toast("拼剪作品已下载");
    });

    fitCanvas.addEventListener("wheel", (event) => {
      event.preventDefault();
      setFitZoom(state.fitZoom + (event.deltaY < 0 ? .1 : -.1));
    }, { passive: false });
    fitCanvas.addEventListener("pointerdown", (event) => {
      if (state.fitZoom <= 1) return;
      fitCanvas.setPointerCapture(event.pointerId);
      fitPointer = { x: event.clientX, y: event.clientY, panX: state.fitPan.x, panY: state.fitPan.y };
    });
    fitCanvas.addEventListener("pointermove", (event) => {
      if (!fitPointer) return;
      state.fitPan = { x: fitPointer.panX + event.clientX - fitPointer.x, y: fitPointer.panY + event.clientY - fitPointer.y };
      renderFittingCanvas();
    });
    fitCanvas.addEventListener("pointerup", () => { fitPointer = null; });
    fitCanvas.addEventListener("pointercancel", () => { fitPointer = null; });
    window.addEventListener("resize", () => {
      if (state.stage === "fitting") renderFittingCanvas();
    });
  }

  function init() {
    renderAllDesignUI();
    renderFreeMaterials();
    updateFreeStageUI();
    bindEvents();
    preload();
  }

  init();
})();
