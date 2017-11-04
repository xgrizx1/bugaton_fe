import React from 'react';
import firebase from '../../config/database';
import LiveFeedPanel from './LiveFeedPanel';
import {transformTimeSeconds} from '../../commonFunctions/commonFunctions';

class Duck extends React.Component {
  constructor() {
    super();
    this.state = {
      noiseEvents: [],
      temperatureEvents: [],
      humidityEvents: [],
      motionEvents: [],
      lightEvents: []
    };

    this.handleNoiseChange = this.handleNoiseChange.bind(this);
  }

  componentWillMount() {
    const duckEvent = firebase
      .database()
      .ref(`duck_events/noise_events/duck${this.props.params.id}`)
      .orderByKey();
    duckEvent.on('child_added', child => {
      this.handleNoiseChange(child);
    });
  }

  handleNoiseChange(child) {
    debugger;
    this.setState({
      noiseEvents: [
        ...this.state.noiseEvents,
        {name: child.key, noise: child.node_.value_ !== undefined ? parseInt(child.node_.value_) : 0}
      ]
    });
    console.log(this.state.noiseEvents);
  }

  render() {
    return (
      <div className="duck-container">
        <div className="row">
          <div className="col-lg-6">
            <LiveFeedPanel
              data={this.state.noiseEvents}
              dataKey={'noise'}
            />
          </div>
          <div className="col-lg-6">
            <LiveFeedPanel
              data={this.state.temperatureEvents}
              dataKey={'temperature'}
            />
          </div>
          <div className="col-lg-6">
            <LiveFeedPanel
              data={this.state.humidityEvents}
              dataKey={'humidity'}
            />
          </div>
          <div className="col-lg-6">
            <LiveFeedPanel
              data={this.state.motionEvents}
              dataKey={'motion'}
            />
          </div>
          <div className="col-lg-6">
            <LiveFeedPanel
              data={this.state.lightEvents}
              dataKey={'light'}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Duck;
