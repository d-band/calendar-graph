export default function render(vnode, ctx, e) {
  const { tag, props, children } = vnode;
  if (tag === 'svg') {
    const { width, height } = props;
    ctx.width = width;
    ctx.height = height;
  }
  if (tag === 'rect') {
    const {
      x, y, width, height, fill, onClick
    } = props;

    // From https://github.com/canvg/canvg
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x, y);
    if (e && onClick && ctx.isPointInPath(e.x, e.y)) {
      onClick();
    }
    ctx.closePath();

    if (fill) {
      ctx.fillStyle = fill;
    }
    ctx.fill();
  }
  if (tag === 'text') {
    const { x, y, style } = props;
    if (style) {
      ctx.fillStyle = style.fill;
      const BL = {
        central: 'middle',
        middle: 'middle',
        hanging: 'hanging',
        alphabetic: 'alphabetic',
        ideographic: 'ideographic'
      };
      const AL = {
        start: 'start',
        middle: 'center',
        end: 'end'
      };
      ctx.textBaseline = BL[style['dominant-baseline']] || 'alphabetic';
      ctx.textAlign = AL[style['text-anchor']] || 'start';
      ctx.font = `${style['font-weight'] || ''} ${style['font-size']} ${style['font-family']}`;
    }
    ctx.fillText(children.join(''), x, y);
  }

  children.forEach((v) => {
    if (typeof v !== 'string') {
      render(v, ctx, e);
    }
  });
}
