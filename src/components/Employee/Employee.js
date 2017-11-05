import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Happy from 'material-ui/svg-icons/social/mood';
import Sad from 'material-ui/svg-icons/social/mood-bad';
import PropTypes from 'prop-types';
import './_employee.scss';
import '../Dashboard/dashboard.scss';

const Mood = {
  happy: 'happy',
  sad: 'sad'
};

export const Section = ({sectionName}) => (
  <div className="dashboard-section">
    <div className="dashboard-section-name"> {sectionName}</div>
    <div className="dashboard-section-line"/>
  </div>
);

const imgPath = '../../images/img';

const employees = [
  {firstName: 'Aleksandar', lastName: 'Ogrizovic', imagePath: `${imgPath}1.png`, mood: Mood.happy},
  {firstName: 'Nicholas', lastName: 'Leavestone', imagePath: `${imgPath}2.png`, mood: Mood.sad},
  {firstName: 'Michael', lastName: 'Gunnicorn', imagePath: `${imgPath}5.png`, mood: Mood.happy},
  {firstName: 'Jack', lastName: 'Unreaster', imagePath: `${imgPath}4.png`, mood: Mood.happy},
  {firstName: 'Lawry', lastName: 'Modules', imagePath: `${imgPath}5.png`, mood: Mood.sad},
  {firstName: 'Fury', lastName: 'Nawyer', imagePath: `${imgPath}1.png`, mood: Mood.happy},
  {firstName: 'Cathy', lastName: 'Elder', imagePath: `${imgPath}3.png`, mood: Mood.sad},
  {firstName: 'Miles', lastName: 'McDaniels', imagePath: `${imgPath}2.png`, mood: Mood.happy},
  {firstName: 'Liley', lastName: 'DeVay', imagePath: `${imgPath}5.png`, mood: Mood.sad},
];

class Employee extends React.Component {
  constructor() {
    super();
    this.renderEmployees = this.renderEmployees.bind(this);
  }

  renderEmployees() {
    return this.props.employees.map(
      item =>
        <ListItem
          className="col-lg-4 col-md-6 col-xs-6"
          primaryText={`${item.firstName} ${item.lastName}`}
          leftAvatar={<Avatar src={item.imagePath}/>}
          rightIcon={item.mood === Mood.happy ? <Happy color={'green'}/> : <Sad color={'red'}/>}
        />
    );
  }

  render() {
    return (
      <div className="people-container">
        <Section sectionName="Employees"/>
        <div className="row">
          <List>
            {this.renderEmployees()}
          </List>
        </div>
        <div className="people-legend-container">
          <div className="people-legend-header"><strong>Predicted Mood</strong></div>
          <div className="people-legend">
            <Happy color="green"/>
            <div style={{paddingRight: '10px'}}>Happy</div>
            <Sad color="red"/>
            <div>Sad</div>
          </div>
        </div>
      </div>
    );
  }
};

Employee.defaultProps = {
  employees
};

Employee.PropTypes = {
  employees: PropTypes.array
};

export default Employee;
