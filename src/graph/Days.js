import h from '../h';
import { formatDate } from '../utils';

export default function Days({
  values, size, space, padX, padY, colorFun, onClick, onHover
}) {
  return (
    <g>
      {values.map((v, i) => {
        const s = size + space * 2;
        const x = padX + i * s + space;
        const y0 = padY + space;
        return (
          <g>
            {v.map((d) => (
              <rect
                class="cg-day"
                x={x}
                y={d.day * s + y0}
                width={size}
                height={size}
                fill={colorFun(d)}
                data-count={d.count}
                data-date={formatDate(d.date)}
                onClick={() => onClick(d)}
                onMouseOver={() => onHover(d)}                
              />
            ))}
          </g>
        );
      })}
    </g>
  );
}
