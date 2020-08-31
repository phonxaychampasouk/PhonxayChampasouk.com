import React from 'react';

const formatNumber = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
}).format;

function calculateTotal(pieChart) {
  return `${pieChart.getAllSeries()[0].getVisiblePoints()[0].data.total}/15`;
}

export default function TooltipTemplate(pieChart) {
  const { country } = pieChart.getAllSeries()[0].getVisiblePoints()[0].data;
  return (
    <svg>
      <text textAnchor="middle" x="160" y="130" style={{ fontSize: 20, fill: '#494949' }}>
        <tspan x="125">{country}</tspan>
        <tspan x="130" dy="25px" style={{ fontWeight: 500 }}>
          {
          calculateTotal(pieChart)
        }
        </tspan>
      </text>
    </svg>
  );
}
