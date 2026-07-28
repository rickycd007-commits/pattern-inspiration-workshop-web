function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function simplifyPath(points, maxPoints = 56) {
  if (points.length <= maxPoints) return points.slice();
  const step = Math.ceil(points.length / maxPoints);
  const result = points.filter((point, index) => index % step === 0);
  const last = points[points.length - 1];
  if (result[result.length - 1] !== last) result.push(last);
  return result;
}

function createCutPiece(points, sourceType, sourceKind, sourceRect, canvasWidth, canvasHeight, order) {
  const simplified = simplifyPath(points);
  const xs = simplified.map((point) => point.x);
  const ys = simplified.map((point) => point.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const width = Math.max(20, maxX - minX);
  const height = Math.max(20, maxY - minY);
  const centerX = minX + width / 2;
  const centerY = minY + height / 2;
  const maxInitialSize = Math.min(canvasWidth, canvasHeight) * 0.42;
  const initialScale = Math.min(1, maxInitialSize / Math.max(width, height));

  return {
    id: `piece-${Date.now()}-${order}`,
    sourceType,
    sourceKind,
    points: simplified.map((point) => ({
      x: (point.x - centerX) / width,
      y: (point.y - centerY) / height
    })),
    crop: {
      x: clamp((minX - sourceRect.x) / sourceRect.width, 0, 1),
      y: clamp((minY - sourceRect.y) / sourceRect.height, 0, 1),
      width: clamp(width / sourceRect.width, 0.02, 1),
      height: clamp(height / sourceRect.height, 0.02, 1)
    },
    width,
    height,
    x: canvasWidth * 0.5 + ((order % 3) - 1) * 22,
    y: canvasHeight * 0.5 + ((order % 2) ? 18 : -12),
    scale: initialScale,
    rotation: 0,
    order,
    motion: "none"
  };
}

function tracePiece(ctx, piece) {
  const points = piece.points || [];
  if (!points.length) return;
  ctx.beginPath();
  ctx.moveTo(points[0].x * piece.width, points[0].y * piece.height);
  for (let index = 1; index < points.length; index += 1) {
    ctx.lineTo(points[index].x * piece.width, points[index].y * piece.height);
  }
  ctx.closePath();
}

function drawImageCrop(ctx, image, crop, width, height) {
  const imageWidth = image.naturalWidth || image.width || 1;
  const imageHeight = image.naturalHeight || image.height || 1;
  const sourceX = clamp(crop.x, 0, 1) * imageWidth;
  const sourceY = clamp(crop.y, 0, 1) * imageHeight;
  const sourceWidth = Math.max(1, Math.min(imageWidth - sourceX, crop.width * imageWidth));
  const sourceHeight = Math.max(1, Math.min(imageHeight - sourceY, crop.height * imageHeight));
  ctx.drawImage(
    image,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    -width / 2,
    -height / 2,
    width,
    height
  );
}

function pieceAnimation(piece, time) {
  const phase = time / 560 + piece.order * 0.7;
  if (piece.motion === "swing") return { x: 0, y: 0, rotation: Math.sin(phase) * 0.15, scale: 1 };
  if (piece.motion === "float") return { x: 0, y: Math.sin(phase) * 13, rotation: 0, scale: 1 };
  if (piece.motion === "pulse") return { x: 0, y: 0, rotation: 0, scale: 1 + Math.sin(phase) * 0.1 };
  if (piece.motion === "spin") return { x: 0, y: 0, rotation: time / 1700, scale: 1 };
  return { x: 0, y: 0, rotation: 0, scale: 1 };
}

function overallAnimation(type, time) {
  const phase = time / 720;
  if (type === "float") return { x: 0, y: Math.sin(phase) * 12, rotation: 0, scale: 1 };
  if (type === "sway") return { x: 0, y: 0, rotation: Math.sin(phase) * 0.05, scale: 1 };
  if (type === "breathe") return { x: 0, y: 0, rotation: 0, scale: 1 + Math.sin(phase) * 0.035 };
  return { x: 0, y: 0, rotation: 0, scale: 1 };
}

function drawCollage(ctx, pieces, images, width, height, options = {}) {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fffdf5";
  ctx.fillRect(0, 0, width, height);

  const time = options.animate ? (options.time || Date.now()) : 0;
  const overall = options.animate
    ? overallAnimation(options.overallMotion, time)
    : { x: 0, y: 0, rotation: 0, scale: 1 };
  const ordered = pieces.slice().sort((a, b) => a.order - b.order);

  ctx.save();
  ctx.translate(width / 2 + overall.x, height / 2 + overall.y);
  ctx.rotate(overall.rotation);
  ctx.scale(overall.scale, overall.scale);
  ctx.translate(-width / 2, -height / 2);

  ordered.forEach((piece) => {
    const image = images && images[piece.sourceType];
    if (!image) return;
    const motion = options.animate
      ? pieceAnimation(piece, time)
      : { x: 0, y: 0, rotation: 0, scale: 1 };
    ctx.save();
    ctx.translate(piece.x + motion.x, piece.y + motion.y);
    ctx.rotate(piece.rotation + motion.rotation);
    ctx.scale(piece.scale * motion.scale, piece.scale * motion.scale);
    tracePiece(ctx, piece);
    ctx.clip();
    drawImageCrop(ctx, image, piece.crop, piece.width, piece.height);
    ctx.restore();

    if (options.selectedId === piece.id && !options.hideSelection) {
      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate(piece.rotation);
      ctx.scale(piece.scale, piece.scale);
      tracePiece(ctx, piece);
      ctx.setLineDash([7 / piece.scale, 5 / piece.scale]);
      ctx.lineWidth = 2 / piece.scale;
      ctx.strokeStyle = "#d47c56";
      ctx.stroke();
      ctx.restore();
    }
  });
  ctx.restore();
}

function pointInPiece(point, piece) {
  const dx = point.x - piece.x;
  const dy = point.y - piece.y;
  const cos = Math.cos(-piece.rotation);
  const sin = Math.sin(-piece.rotation);
  const local = {
    x: (dx * cos - dy * sin) / piece.scale / piece.width,
    y: (dx * sin + dy * cos) / piece.scale / piece.height
  };
  const points = piece.points || [];
  let inside = false;
  for (let current = 0, previous = points.length - 1; current < points.length; previous = current, current += 1) {
    const a = points[current];
    const b = points[previous];
    const crosses = ((a.y > local.y) !== (b.y > local.y))
      && (local.x < (b.x - a.x) * (local.y - a.y) / ((b.y - a.y) || 0.0001) + a.x);
    if (crosses) inside = !inside;
  }
  return inside;
}

window.Collage = {
  createCutPiece,
  drawCollage,
  pointInPiece
};
