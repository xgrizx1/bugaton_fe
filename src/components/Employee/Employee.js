import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Happy from 'material-ui/svg-icons/social/mood';
import Sad from 'material-ui/svg-icons/social/mood-bad';
import { getRequest } from 'request';
import './_employee.scss';
import '../Dashboard/dashboard.scss';

const Mood = {
  happy: 'happy',
  sad: 'sad',
};

export const Section = ({ sectionName }) => (
  <div className="dashboard-section">
    <div className="dashboard-section-name"> {sectionName}</div>
    <div className="dashboard-section-line" />
  </div>
);

class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
    this.renderEmployees = this.renderEmployees.bind(this);
  }

  componentWillMount() {
    getRequest('getUsers')
      .then(response => {
        const resp = response.data;
        let arr = [];
        Object.keys(resp).forEach(function(key) {
          arr.push({
            name: resp[key].name,
            mood: resp[key].predicted_feel > 2 ? 'happy' : 'bad',
            imagePath: resp[key].img,
          });
        });
        this.setState({ users: arr });
      })
      .catch(e => {
        throw e;
      });
  }

  renderEmployees() {
    return this.state.users.map(item => (
      <ListItem
        key={item.name}
        className="col-lg-4 col-md-6 col-xs-6"
        primaryText={`${item.name}`}
        leftAvatar={<Avatar src={item.imagePath} />}
        rightIcon={item.mood === Mood.happy ? <Happy color={'green'} /> : <Sad color={'red'} />}
      />
    ));
  }

  render() {
    return (
      <div className="people-container">
        <Section sectionName="Employees" />
        <div className="row">
          <List>{this.renderEmployees()}</List>
        </div>
        <div className="people-legend-container">
          <div className="people-legend-header">
            <strong>Predicted Mood</strong>
          </div>
          <div className="people-legend">
            <Happy color="green" />
            <div style={{ paddingRight: '10px' }}>Happy</div>
            <Sad color="red" />
            <div>Sad</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
