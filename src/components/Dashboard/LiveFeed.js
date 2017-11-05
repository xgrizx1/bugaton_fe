import React from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis} from 'recharts';
import CustomPanel from '../Common/Panel';
import {getRequest} from 'request';

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
      counter: 7,
      width: 600,
    };
    this.onIntervalSetting = this.onIntervalSetting.bind(this);
  }

  componentWillMount() {
    getRequest('getAverageEventsWeekly')
      .then(response => {
        const resp = response.data;
        let arr = new Array(resp.noise_events.length);
        for (let i = 0; i < arr.length; i++) {
          arr[i] = {
            name: `Day ${i + 1}`,
          };
        }

        Object.keys(resp).forEach(i => {
          let next = resp[i];
          for (let j = 0; j < next.length; j++) {
            arr[j][i] = next[j];
          }
        });
        if (arr.length > 5) {
          arr = arr.slice(0, 5);
        }
        this.setState({data: arr});
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    window.addEventListener('resize', this.onIntervalSetting);
    this.onIntervalSetting();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onIntervalSetting);
  }

  onIntervalSetting() {
    this.setState({width: document.getElementById('live-feed').clientWidth});
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
            <Line type="monotone" dataKey="noise_events" stroke="#193852" yAxisId={0}/>
            <Line type="monotone" dataKey="temperature_events" stroke="#452123" yAxisId={0}/>
            <Line type="monotone" dataKey="light_events" stroke="#952123" yAxisId={0}/>
            <Line type="monotone" dataKey="motion_events" stroke="#052123" yAxisId={0}/>
            <Line type="monotone" dataKey="humidity_events" stroke="#662123" yAxisId={0}/>
          </LineChart>
        </div>
      </CustomPanel>
    );
  }
}

export default OverallFeel;
