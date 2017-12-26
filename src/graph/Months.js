import h from '../h';

const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function Months({
  styles, values, size, space, padX, padY
}) {
  const s = size + space * 2;
  const s2 = s * 2;
  const months = [];
  values.forEach((group, i) => {
    group.forEach((d, j) => {
      if (j === 0 && d.day === 0) {
        const month = d.date.getMonth();
        const x = i * s + padX + space;
        const last = months.slice(-1).pop();
        if (!last || (month !== last.month && (x - last.x) > s2)) {
          months.push({ month, x });
        }
      }
    });
  });
  return (
    <g>
      {months.map((v, i) => <text key={i} x={v.x} y={padY / 2} style={styles.text}>{MONTH[v.month]}</text>)}
    </g>
  );
}
