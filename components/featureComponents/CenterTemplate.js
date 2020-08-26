import React from 'react';

const formatNumber = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
}).format;

function calculateTotal(pieChart) {
  return Math.abs(formatNumber(pieChart.getAllSeries()[0].getVisiblePoints().reduce((s, p) => p.originalValue - s, 0)));
}

export default function TooltipTemplate(pieChart) {
  const { country } = pieChart.getAllSeries()[0].getVisiblePoints()[0].data;
  console.log('pieCharts',pieChart);
  return (
    <svg>
      <text textAnchor="middle" x="160" y="130" style={{ fontSize: 20, fill: '#494949' }}>
        <tspan x="130">{country}</tspan>
        <tspan x="130" dy="25px" style={{ fontWeight: 600 }}>
          {
          calculateTotal(pieChart)
        }
        </tspan>
      </text>
    </svg>
  );
}
