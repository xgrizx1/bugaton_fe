import React from 'react';
import CustomPanel from 'components/Common/Panel';
import PropTypes from 'prop-types';
import MoodFeed from 'components/Dashboard/MoodFeed';
import './dashboard.scss';
import LiveFeed from 'components/Dashboard/LiveFeed';
import Flag from 'components/Common/Flag';

const Section = ({sectionName}) => (
  <div className="dashboard-section">
    <div className="dashboard-section-name"> {sectionName}</div>
    <div className="dashboard-section-line"/>
  </div>
);

Section.propTypes = {
  sectionName: PropTypes.string.isRequired,
};

class DashboardContainer extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <Section sectionName={'Overall'}/>
        <div className="row">
          <div className="col-md-4">
            <CustomPanel title={'Flags'}>
              <div className="row">
                <div className="col-xs-12">
                  <Flag
                    type="danger"
                    title={
                      <div>
                        Based on current feed
                        <strong> Marc Nelson</strong> is probably feeling bad today
                      </div>
                    }
                  />
                </div>
                <div className="col-xs-12">
                  <Flag
                    type="danger"
                    title={
                      <div>
                        Based on current feed
                        <strong> Nikola Trivic </strong> is probably feeling bad today
                      </div>
                    }
                  />
                </div>
                <div className="col-xs-12">
                  <Flag
                    type="danger"
                    title={
                      <div>
                        Based on current feed
                        <strong> Ivan Dejkovic</strong> is probably feeling bad today
                     
                    }
                  />
                </div>
                <div className="col-xs-12">
                  <Flag type="success" title={<div>
                    Based on current feed
                    <strong> Ivan Dimitrov</strong> is probably feeling happy today
                  </div>}
                  />
                </div>
              </div>
            </CustomPanel>
          </div>
          <div className="col-md-8">
            <MoodFeed/>
          </div>
        </div>
        <Section sectionName={'Ducks'}/>
        <div className="row">
          <div className="col-xs-12">
            <LiveFeed/>
          </div>
        </div>
        <Section sectionName={'Profile'}/>
      </div>
    );
  }
}

DashboardContainer.propTypes = {};

export default DashboardContainer;
