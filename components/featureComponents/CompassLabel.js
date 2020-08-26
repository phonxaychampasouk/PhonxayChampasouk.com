import { VictoryLabel } from 'victory';

const CompassLabel = ({directions , datum, active, color }) => {
  const text = [`${directions[datum._x]}`, `${Math.round(datum._y1)} mph`];
  const baseStyle = { fill: color.highlight, textAnchor: 'middle' };
  const style = [
    { ...baseStyle, fontSize: 38, fontWeight: 'bold' },
    { ...baseStyle, fontSize: 12 },
  ];
  return active
    ? (
      <VictoryLabel
        text={text}
        style={style}
        x={175}
        y={75}
        renderInPortal
      />
    ) : null;
};

export default CompassLabel;
