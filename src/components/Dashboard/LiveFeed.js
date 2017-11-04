import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from 'recharts';
import CustomPanel from '../Common/Panel';

const data = [
  { name: 'Day 1', mood: 4000},
  { name: 'Day 2', mood: 3000},
  { name: 'Day 3', mood: 2000},
  { name: 'Day 4', mood: 2780},
  { name: 'Day 5', mood: 1890},
  { name: 'Day 6', mood: 2390},
  { name: 'Day 7', mood: 3490},
];

class OverallFeel extends React.Component {
  constructor() {
    super();
    this.state = {
      data,
      counter: 7,
    };
  }

  componentDidMount() {
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
          { name: `Day ${this.state.counter + 1}`, mood: Math.random() * 4000, amt: Math.random() * 30 + 2000 },
        ],
        counter: this.state.counter + 1,
      });
    }, 4000);
  }

  render() {
    return (
      <CustomPanel title={'Feel'}>
        <LineChart
          width={600}
          height={330}
          data={this.state.data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#e5e5e5" />
          <Line type="monotone" dataKey="mood" stroke="#193852" yAxisId={0} />
        </LineChart>
      </CustomPanel>
    );
  }
}

export default OverallFeel;
