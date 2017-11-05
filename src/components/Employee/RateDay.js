import React from 'react';
import './_employee.scss';

class RateDay extends React.Component {
  constructor() {
    super();
    this.state = {
      rated: false,
    };
    this.onRate = this.onRate.bind(this);
  }

  onRate() {
    this.setState({ rated: true });
  }

  render() {
    return (
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="rate-day-container">
          <h1>Rate your mood today</h1>
          <div className="row-container">
            <i className="material-icons">person</i>
            <h4>Jack Jackson</h4>
          </div>
          {!this.state.rated ? (
            <div className="rate-day-emoticons">
              <div className="emotion-container">
                <i onClick={this.onRate} className="material-icons green">
                  mood
                </i>
                <div className="green">Happy</div>
              </div>
              <div className="emotion-container">
                <i onClick={this.onRate} className="material-icons green">
                  sentiment_satisfied
                </i>
                <div className="green">Nice</div>
              </div>
              <div className="emotion-container">
                <i onClick={this.onRate} className="material-icons yellow">
                  sentiment_neutral
                </i>
                <div>Neutral</div>
              </div>
              <div className="emotion-container">
                <i onClick={this.onRate} className="material-icons red">
                  sentiment_dissatisfied
                </i>
                <div className="red">Saddish</div>
              </div>
              <div className="emotion-container">
                <i onClick={this.onRate} className="material-icons red">
                  mood_bad
                </i>
                <div className="red">Sad</div>
              </div>
            </div>
          ) : (
            <h1 style={{ textAlign: 'center', paddingTop: '100px' }}>Thank you for submit!</h1>
          )}
        </div>
      </div>
    );
  }
}

export default RateDay;
