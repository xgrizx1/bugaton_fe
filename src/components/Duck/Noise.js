import React from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis} from 'recharts';
import CustomPanel from '../Common/Panel';


class Noise extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 7,
      width: 600
    };
    this.onResize = this.onResize.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    const resizeable = document.getElementById('noise-panel');
    let toResize = 0;
    if (resizeable !== null) {
      toResize = resizeable.clientWidth;
    }
    this.setState({width: toResize});
  }

  render() {
    console.log(this.props.data);
    return (
      <CustomPanel title={'Noise'}>
        <div id="noise-panel">
          <LineChart
            width={this.state.width}
            height={330}
            data={this.props.data}
            margin={{top: 5, right: 20, left: 10, bottom: 5}}
          >
            <XAxis dataKey="name"/>
            <Tooltip/>
            <CartesianGrid stroke="#e5e5e5"/>
            <Line type="monotone" dataKey="noise" stroke="#193852" yAxisId={0}/>
          </LineChart>
        </div>
      </CustomPanel>
    );
  }
};

export default Noise;
