import React from 'react';
import CustomPanel from 'components/Common/Panel';
import PropTypes from 'prop-types';
import MoodFeed from 'components/Dashboard/MoodFeed';
import LiveFeed from 'components/Dashboard/LiveFeed';
import Flag from 'components/Common/Flag';
import {browserHistory} from 'react-router';
import './dashboard.scss';
import GitBoard from 'components/Dashboard/GitBoard';
import GitStats from 'components/Dashboard/GitStats';
import firebase from '../../config/database';
import {getRequest} from 'request';

const ProjectItem = ({project}) => (
  <div onClick={() => browserHistory.push(`/projects/${project.id}`)} className="project-item-container">
    <div className="project-item">
      <i className="material-icons">work</i>
      <div>{project.name}</div>
    </div>
  </div>
);

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
  constructor() {
    super();
    this.state = {
      projects: [],
      gitStates: []
    };
  }

  componentWillMount() {
    const gitEvent = firebase
      .database()
      .ref(`git_events`)
      .orderByKey();
    gitEvent.on('child_added', (child) => {
      const value = child.val();
      console.log(value);
      let arr = [];
      Object.keys(value).forEach(
        i => arr.push({name: child.key, ...value[i]})
      );
      this.setState({
        gitStates: [
          ...this.state.gitStates,
          ...arr
        ]
      });
    });

    this.setState({gitEvent});

    getRequest('getProjects/').then(response => {
      const resp = response.data;
      let arr = [];
      Object.keys(resp).forEach(i => arr.push({...resp[i], id: i}));
      this.setState({projects: arr});
    });
  }

  componentWillUnmount() {
    this.state.gitEvent.off();
  }

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
                  <Flag
                    type="success"
                    title={
                      <div>
                        Based on current feed
                        <strong> Ivan Dimitrov</strong> is probably feeling happy today
                      </div>
                    }
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
          <div className="col-sm-6">
            <GitStats
              data={this.state.gitStates}
            />
          </div>
          <div className="col-sm-6">
            <GitBoard
              data={this.state.gitStates}
            />
          </div>
        </div>
        <Section sectionName={'Projects'}/>
        <div className="project-item-container">
          {this.state.projects.map(item => <ProjectItem project={item} key={item.id}/>)}
        </div>
      </div>
    );
  }
}

DashboardContainer.propTypes = {};

export default DashboardContainer;
