import React from 'react';

const formatNumber = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
}).format;

function calculateTotal(pieChart) {
  return Math.abs(formatNumber(pieChart.getAllSeries()[0].getVisiblePoints().reduce((s, p) => p.originalValue - s, 0)));
}

function getImagePath(country) {
  return `images/flags/${country.replace(/\s/, '').toLowerCase()}.svg`;
}

export default function TooltipTemplate(pieChart) {
  const { country } = pieChart.getAllSeries()[0].getVisiblePoints()[0].data;
  console.log('pieCharts',pieChart);
  return (
    <svg>
      <circle cx="200" cy="150" r={pieChart.getInnerRadius() - 6} fill="#eee" />
      <text textAnchor="middle" x="100" y="150" style={{ fontSize: 30, fill: '#494949' }}>
        <tspan x="200">{country}</tspan>
        <tspan x="200" dy="35px" style={{ fontWeight: 600 }}>
          {
          calculateTotal(pieChart)
        }
        </tspan>
      </text>
    </svg>
  );
}
