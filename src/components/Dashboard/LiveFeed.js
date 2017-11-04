import React from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis} from 'recharts';
import CustomPanel from '../Common/Panel';

const data = [
  {name: 'Day 1', noise: 40, temperature: 22},
  {name: 'Day 2', noise: 30, temperature: 22},
  {name: 'Day 3', noise: 20, temperature: 22},
  {name: 'Day 4', noise: 27, temperature: 22},
  {name: 'Day 5', noise: 18, temperature: 23},
  {name: 'Day 6', noise: 23, temperature: 23},
  {name: 'Day 7', noise: 34, temperature: 23},
];

class OverallFeel extends React.Component {
  constructor() {
    super();
    this.state = {
      data,
      counter: 7,
      width: 600
    };
    this.onIntervalSetting = this.onIntervalSetting.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onIntervalSetting);
    this.setState({width: document.getElementById('live-feed').clientWidth});
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onIntervalSetting);
  }

  onIntervalSetting() {
    this.setState({width: document.getElementById('live-feed').clientWidth});
    setInterval(() => {
      let dataSlice = [];
      if (this.state.data.length > 12) {
        dataSlice = this.state.data.slice(6, 12);
      } else {
        dataSlice = this.state.data.slice();
      }
      this.setState({
        data: [
          ...dataSlice,
          {name: `Day ${this.state.counter + 1}`, noise: Math.random() * 40, temperature: Math.random() * 3 + 22},
        ],
        counter: this.state.counter + 1,
      });
    }, 2000);
  }

  render() {
    return (
      <CustomPanel title={'Feel'}>
        <div id="live-feed">
          <LineChart
            width={this.state.width}
            height={330}
            data={this.state.data}
            margin={{top: 5, right: 20, left: 10, bottom: 5}}
          >
            <XAxis dataKey="name"/>
            <Tooltip/>
            <CartesianGrid stroke="#e5e5e5"/>
            <Line type="monotone" dataKey="noise" stroke="#193852" yAxisId={0}/>
            <Line type="monotone" dataKey="temperature" stroke="#452123" yAxisId={0}/>
          </LineChart>
        </div>
      </CustomPanel>
    );
  }
}

export default OverallFeel;
