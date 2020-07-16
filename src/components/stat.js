import React from 'react'

const Stat = ({ stats }) => {
  return stats.map((stat, i) => (
    <div key={`${stat.country}-${i}`}>
      <br />
      <b>{stat.country}</b>
      <br />
      Cases: {stat.cases} | Today: {stat.todayCases} | Active: {stat.active}{' '}
      <br />
      Deaths: {stat.deaths} | Recovered: {stat.recovered} | Critical:{' '}
      {stat.critical}
    </div>
  ))
}

export default Stat