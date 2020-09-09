import React from 'react';

const formatNumber = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
}).format;

function calculateTotal(pieChart) {
<<<<<<< HEAD
  return `${Math.abs(formatNumber(pieChart.getAllSeries()[0].getVisiblePoints().reduce((s, p) => p.originalValue - 10, 0)))}/10`;
=======
  return `${pieChart.getAllSeries()[0].getVisiblePoints()[0].data.total}/15`;
>>>>>>> PhotoPortfolio
}

export default function TooltipTemplate(pieChart) {
  const { country } = pieChart.getAllSeries()[0].getVisiblePoints()[0].data;
  return (
    <svg>
<<<<<<< HEAD
      <text textAnchor="middle" x="170" y="130" style={{ fontSize: 20, fill: '#494949' }}>
        <tspan x="130">{country}</tspan>
        <tspan x="130" dy="20px" style={{ fontWeight: 600 }}>
=======
      <text textAnchor="middle" x="160" y="130" style={{ fontSize: 20, fill: '#494949' }}>
        <tspan x="125">{country}</tspan>
        <tspan x="130" dy="25px" style={{ fontWeight: 500 }}>
>>>>>>> PhotoPortfolio
          {
          calculateTotal(pieChart)
        }
        </tspan>
      </text>
    </svg>
  );
}
