import React from 'react';
import firebase from '../../config/database';
import LiveFeedPanel from './LiveFeedPanel';
import {transformTimeSeconds} from '../../commonFunctions/commonFunctions';
import moment from 'moment';

class Duck extends React.Component {
  constructor() {
    super();
    this.state = {
      noiseEvents: [],
      temperatureEvents: [],
      humidityEvents: [],
      motionEvents: [],
      lightEvents: [],
    };

    this.handleNoiseChange = this.handleNoiseChange.bind(this);
    this.handleMotionChange = this.handleMotionChange.bind(this);
    this.handleLightChange = this.handleLightChange.bind(this);
    this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
    this.handleHumidityChange = this.handleHumidityChange.bind(this);
    this.prepareEventsForRender = this.prepareEventsForRender.bind(this);
  }


  componentWillMount() {
    const duckName = `duck${this.props.params.id}`;
    const noise = firebase
      .database()
      .ref(`duck_events/noise_events/${duckName}`)
      .orderByKey();
    noise.on('child_added', child => {
      if (transformTimeSeconds(child.key) < 50)
        this.handleNoiseChange(child);
    });

    const temperature = firebase
      .database()
      .ref(`duck_events/temperature_events/${duckName}`)
      .orderByKey();
    temperature.on('child_added', child => {
      if (transformTimeSeconds(child.key) < 50)
        this.handleTemperatureChange(child);
    });

    const motion = firebase
      .database()
      .ref(`duck_events/motion_events/${duckName}`)
      .orderByKey();
    motion.on('child_added', child => {
      if (transformTimeSeconds(child.key) < 50)
        this.handleMotionChange(child);
    });

    const light = firebase
      .database()
      .ref(`duck_events/light_events/${duckName}`)
      .orderByKey();
    light.on('child_added', child => {
      if (transformTimeSeconds(child.key) < 50)
        this.handleLightChange(child);
    });

    const humidity = firebase
      .database()
      .ref(`duck_events/humidity_events/${duckName}`)
      .orderByKey();
    humidity.on('child_added', child => {
      if (transformTimeSeconds(child.key) < 50)
        this.handleHumidityChange(child);
    });

    this.setState({
      noise,
      light,
      temperature,
      humidity,
      motion
    });
  }

  componentWillUnmount() {
    this.state.noise.off();
    this.state.temperature.off();
    this.state.light.off();
    this.state.motion.off();
    this.state.humidity.off();
  }

  prepareEventsForRender(events) {
    const arr = [...events];
    return arr.length > 20 ? arr.slice(10, (events.length - 1)) : arr;
  }

  handleNoiseChange(child) {
    console.log(moment(Math.round(child.key)));
    this.setState({
      noiseEvents: [
        ...this.prepareEventsForRender(this.state.noiseEvents),
        {
          name: moment(Math.round(child.key)).format('hh:mm:ss a'),
          noise: child.node_.value_ !== undefined ? parseInt(child.node_.value_) : 0,
        },
      ],
    });
  }

  handleTemperatureChange(child) {
    this.setState({
      temperatureEvents: [
        ...this.prepareEventsForRender(this.state.temperatureEvents),
        {
          name: moment(Math.round(child.key)).format('hh:mm:ss a'),
          temperature: child.node_.value_ !== undefined ? parseInt(child.node_.value_) : 0,
        },
      ],
    });
  }

  handleMotionChange(child) {
    this.setState({
      motionEvents: [
        ...this.prepareEventsForRender(this.state.motionEvents),
        {
          name: moment(Math.round(child.key)).format('hh:mm:ss a'),
          motion: child.node_.value_ !== undefined ? parseInt(child.node_.value_) : 0,
        },
      ],
    });
  }

  handleLightChange(child) {
    this.setState({
      lightEvents: [
        ...this.prepareEventsForRender(this.state.lightEvents),
        {
          name: moment(Math.round(child.key)).format('hh:mm:ss a'),
          light: child.node_.value_ !== undefined ? parseInt(child.node_.value_) : 0,
        },
      ],
    });

  }

  handleHumidityChange(child) {
    this.setState({
      humidityEvents: [
        ...this.prepareEventsForRender(this.state.humidityEvents),

        {
          name: moment(Math.round(child.key)).format('hh:mm:ss a'),
          humidity: child.node_.value_ !== undefined ? parseInt(child.node_.value_) : 0,
        },
      ],
    });
  }

  render() {
    return (
      <div className="duck-container">
        <div className="row">
          <div className="col-lg-6">
            <LiveFeedPanel data={this.state.noiseEvents} dataKey={'noise'}/>
          </div>
          <div className="col-lg-6">
            <LiveFeedPanel data={this.state.temperatureEvents} dataKey={'temperature'}/>
          </div>
          <div className="col-lg-6">
            <LiveFeedPanel data={this.state.humidityEvents} dataKey={'humidity'}/>
          </div>
          <div className="col-lg-6">
            <LiveFeedPanel data={this.state.motionEvents} dataKey={'motion'}/>
          </div>
          <div className="col-lg-6">
            <LiveFeedPanel data={this.state.lightEvents} dataKey={'light'}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Duck;
