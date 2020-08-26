const CompassCenter = ({ origin }) => {
  const orange = { base: 'gold', highlight: 'darkOrange' };
  const red = { base: 'tomato', highlight: 'orangeRed' };
  const circleStyle = {
    stroke: red.base, strokeWidth: 8, fill: orange.base,
  };
  const innerRadius = 30;

  return (
    <g>
      <circle
        cx={origin.x}
        cy={origin.y}
        r={innerRadius}
        style={circleStyle}
      />
    </g>
  );
};

export default CompassCenter;
