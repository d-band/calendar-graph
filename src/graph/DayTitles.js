import h from '../h';

export default function DayTitles({
  styles, size, space, padX, padY
}) {
  const s = size + space * 2;
  const half = s / 2;
  const days = [{
    v: 'M',
    y: padY + (s * 1) + half,
  }, {
    v: 'W',
    y: padY + (s * 3) + half,
  }, {
    v: 'F',
    y: padY + (s * 5) + half,
  }];
  return (
    <g>
      {days.map((d, i) => <text key={i} x={padX / 2} y={d.y} style={styles.text2}>{d.v}</text>)}
    </g>
  );
}
