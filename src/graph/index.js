import h from '../h';
import {
  diffDays, formatDate, noop, today, oneYearAgo, rectColor
} from '../utils';
import Days from './Days';
import Months from './Months';
import DayTitles from './DayTitles';
import getStyles from './styles';

export default function Graph({
  data = [],
  onClick = noop,
  colorFun = rectColor,
  startDate = oneYearAgo(),
  endDate = today(),
  size = 12,
  space = 1,
  padX = 20,
  padY = 20,
  styleOptions = {}
}) {
  const values = [];
  const days = diffDays(startDate, endDate);
  const dataTmp = data.reduce((memo, v) => {
    memo[v.date] = v.count;
    return memo;
  }, {});
  // Compute values
  let group = 0;
  for (let i = 0; i <= days; i += 1) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);

    const day = date.getDay();
    const count = dataTmp[formatDate(date)] || 0;

    if ((day === 0 && i !== 0) || i === 0) {
      values.push([]);
      group += 1;
    }

    values[group - 1].push({ count, date, day });
  }

  const s = size + space * 2;
  const width = (group * s) + (padX * 2);
  const height = 7 * s + padY + 10;
  const box = `0 0 ${width} ${height}`;
  const styles = getStyles(styleOptions);

  const attrs = {
    styles, values, size, space, colorFun, padX, padY, onClick
  };
  return (
    <svg width={width} height={height} viewBox={box}>
      <rect x={0} y={0} width={width} height={height} fill="#fff" />
      <Days {...attrs} />
      <Months {...attrs} />
      <DayTitles {...attrs} />
    </svg>
  );
}
