import { Component } from 'react';

import PieChart, {
  Series,
  Legend,
  Label,
  Connector,
  Size,
} from 'devextreme-react/pie-chart';

import { data } from './data.js';
import CenterTemplate from './CenterTemplate.js';

class Skills extends Component {

  customizeLabel(e) {
    return `${e.argumentText}\n${e.valueText}`;
  }

  render() {
    const pies = data.map(skill => (
      <PieChart
        id="pie-chart"
        key={skill.country}
        dataSource={[skill, {country: 'sample', total: (10-skill.total)}]}
        resolveLabelOverlapping="shift"
        sizeGroup="piesGroup"
        innerRadius={0.7}
        centerRender={CenterTemplate}
        type="doughnut"
      >
        <Size 
        width={172}
        height={170}
        />
        <Series
          argumentField="country"
          valueField="total"
        />
        <Legend visible={false}></Legend>
      </PieChart>
    ));

    return (
      <div>
        <div className="pies-container">
          {pies}
        </div>
      </div>
    );
  }
}

export default Skills;
// import Paper from '@material-ui/core/Paper';
// import {
//   Chart,
//   PieSeries,
//   Title,
// } from '@devexpress/dx-react-chart-material-ui';

// import { Animation } from '@devexpress/dx-react-chart';

// const chartData = [
//   [
//     { skill: 'JavaScript', val: 8 },
//     { skill: 'null', val: 2 },
//   ], [
//     { skill: 'Reactjs', val: 9 },
//     { skill: 'null', val: 2 },
//   ], [
//     { skill: 'CSS', val: 8 },
//     { skill: 'null', val: 2 },
//   ], [
//     { skill: 'MongoDb', val: 8 },
//     { skill: 'null', val: 1 },
//   ], [
//     { skill: 'NoSql', val: 8 },
//     { skill: 'null', val: 2 },
//   ], [
//     { skill: 'ExpressJs', val: 10 },
//     { skill: 'null', val: 0 },
//   ], [
//     { skill: 'AWS', val: 9 },
//     { skill: 'null', val: 1 },
//   ],
//   [
//     { skill: 'Azure', val: 9 },
//     { skill: 'null', val: 1 },
//   ],
//   [
//     { skill: 'Docker', val: 7 },
//     { skill: 'null', val: 3 },
//   ],
// ];
// const skillsChart = chartData.map((skill, i) => (
//   <div className="skill-cards" key={i}>
//     <Chart
//       data={skill}
//       width={170}
//       height={200}
//     >
//       <PieSeries
//         valueField="val"
//         argumentField="skill"
//         innerRadius={0.6}
//       />
//       <Title
//         text={skill[0].skill}
//         position="bottom"
//       />
//       <Animation />
//     </Chart>
//   </div>
// ));
// const Skills = () => (
//   <>
//     {skillsChart}
//   </>
// );

// export default Skills;
