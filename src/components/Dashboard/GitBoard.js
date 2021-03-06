import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from 'recharts';
import CustomPanel from '../Common/Panel';

class GitBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 7,
      width: 600,
    };
    this.onIntervalSetting = this.onIntervalSetting.bind(this);
  }

  componentWillMount() {}

  componentDidMount() {
    window.addEventListener('resize', this.onIntervalSetting);
    this.onIntervalSetting();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onIntervalSetting);
  }

  onIntervalSetting() {
    this.setState({ width: document.getElementById('git-feed').clientWidth });
  }

  render() {
    return (
      <CustomPanel title={'Git - Code Quality per Commit'}>
        <div id="git-feed">
          <LineChart
            width={this.state.width}
            height={330}
            data={this.props.data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#e5e5e5" />
            <Line type="monotone" dataKey="code_quality" stroke="green" yAxisId={0} />
          </LineChart>
        </div>
      </CustomPanel>
    );
  }
}

export default GitBoard;
