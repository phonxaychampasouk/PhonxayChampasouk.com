import { Component } from 'react';
import {
  VictoryChart, VictoryPolarAxis, VictoryStack, VictoryBar, VictoryTheme,
} from 'victory';
import * as _ from 'underscore';
import CompassCenter from './CompassCenter';
import CenterLabel from './CompassLabel';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wind: this.getWindData(),
      directions: {
        0: 'Javascript',
        45: 'MongoDb',
        90: 'MySql',
        135: 'PostgresQl',
        180: 'React',
        225: 'Nextjs',
        270: 'Frontend',
        315: 'Backend',
      },
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({ wind: this.getWindData() });
    }, 4000);
  }

  getWindData() {
    
    return _.keys({
      100: 'Javascript',
      45: 'MongoDb',
      90: 'MySql',
      135: 'PostgresQl',
      180: 'React',
      225: 'Nextjs',
      270: 'Frontend',
      315: 'Backend',
    }).map((d) => {
      const speed = 90;
      return {
        windSpeed: speed,
        windGust: speed + _.random(1, 10),
        techStack: d,
      };
    });
  }

  render() {
    const { directions } = this.state;

    const orange = { base: 'gold', highlight: 'darkOrange' };

    const red = { base: 'tomato', highlight: 'orangeRed' };

    const innerRadius = 0;

    return (
      <VictoryChart
        polar
        animate={{ duration: 9000, easing: 'bounce' }}
        theme={VictoryTheme.material}
        innerRadius={innerRadius}
        domainPadding={{ y: 10 }}
        events={[{
          childName: 'all',
          target: 'data',
          eventHandlers: {
            onMouseOver: () => [
              { target: 'labels', mutation: () => ({ active: true }) },
              { target: 'data', mutation: () => ({ active: true }) },
            ],
            onMouseOut: () => [
              { target: 'labels', mutation: () => ({ active: false }) },
              { target: 'data', mutation: () => ({ active: false }) },
            ],
          },
        }]}
      >
        <VictoryPolarAxis
          dependentAxis
          labelPlacement="vertical"
          style={{ axis: { stroke: 'none' } }}
          tickFormat={() => ''}
        />
        <VictoryPolarAxis
          labelPlacement="parallel"
          tickValues={_.keys(directions).map((k) => +k)}
          tickFormat={_.values(directions)}
        />
        <VictoryStack>
          <VictoryBar
            style={{
              data: {
                fill: ({ active }) => (active ? orange.highlight : orange.base),
                width: 40,
              },
            }}
            data={this.state.wind}
            x="techStack"
            y="windSpeed"
            labels={() => ''}
            labelComponent={<CenterLabel directions={this.state.directions} color={orange} />}
          />
          <VictoryBar
            style={{
              data: {
                fill: (d, a) => (a ? red.highlight : red.base),
                width: 40,
              },
            }}
            data={this.state.wind}
            x="techStack"
            y={(d) => d.windGust - d.windSpeed}
            labels={() => ''}
            labelComponent={<CenterLabel directions={this.state.directions} color={red} />}
          />
        </VictoryStack>
        <CompassCenter />
      </VictoryChart>
    );
  }
}

export default Skills;
