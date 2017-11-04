import React from 'react';
import firebase from '../../config/database';
import Noise from './Noise';
import {transformTimeSeconds} from '../../commonFunctions/commonFunctions';

class Duck extends React.Component {
  constructor() {
    super();
    this.state = {
      noiseEvents: [
        {name: "20 seconds ago", noise: '10'}
      ],
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
        <h1>Duck </h1>
        <div className="row">
          <div className="col-xs-12">
            <Noise data={this.state.noiseEvents}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Duck;
