import React from 'react';
import CustomPanel from 'components/Common/Panel';
import PropTypes from 'prop-types';
import MoodFeed from 'components/Dashboard/MoodFeed';
import LiveFeed from 'components/Dashboard/LiveFeed';
import Flag from 'components/Common/Flag';
import {browserHistory} from 'react-router';
import './dashboard.scss';

const ProjectItem = ({project}) =>
  <div onClick={() => browserHistory.push(`/projects/${project.id}`)} className="project-item-container">
    <div className="project-item">
      <i className="material-icons">work</i>
      <div>{project.name}</div>
    </div>
  </div>;


const Section = ({sectionName}) => (
  <div className="dashboard-section">
    <div className="dashboard-section-name"> {sectionName}</div>
    <div className="dashboard-section-line"/>
  </div>
);

Section.propTypes = {
  sectionName: PropTypes.string.isRequired,
};

const projects = [
  {id: 0, name: 'First Project'},
  {id: 1, name: 'Second Project'},
  {id: 2, name: 'Third Project'},
];

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
                        <strong> Ivan DeLjkovic</strong> is probably feeling bad today
                      </div>
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
        <Section sectionName={'Projects'}/>
        <div className="project-item-container">
          {projects.map(
            (item) => <ProjectItem project={item} key={item.id}/>
          )
          }
        </div>
      </div>
    );
  }
}

DashboardContainer.propTypes = {};

export default DashboardContainer;
