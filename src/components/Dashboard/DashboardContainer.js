import React from 'react';
import CustomPanel from 'components/Common/Panel';
import PropTypes from 'prop-types';
import MoodFeed from 'components/Dashboard/MoodFeed';
import './dashboard.scss';

const Section = ({ sectionName }) => (
  <div className="dashboard-section">
    <div className="dashboard-section-name"> {sectionName}</div>
    <div className="dashboard-section-line" />
  </div>
);

Section.propTypes = {
  sectionName: PropTypes.string.isRequired,
};

class DashboardContainer extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <Section sectionName={'Overall'} />
        <div className="row">
          <div className="col-md-4">
            <CustomPanel title={'Flags'}>
              <div>Description</div>
            </CustomPanel>
          </div>
          <div className="col-md-8">
            <MoodFeed />
          </div>
        </div>
        <Section sectionName={'Ducks'} />
        <div className="row">
          <div className="col-xs-12">
            <CustomPanel title={'Live Feed'}>
              <div>Description</div>
            </CustomPanel>
          </div>
        </div>
        <Section sectionName={'Profile'} />
      </div>
    );
  }
}

DashboardContainer.propTypes = {};

export default DashboardContainer;
