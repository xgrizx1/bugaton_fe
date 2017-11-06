import React from 'react';
import Employee from 'components/Employee/Employee';
import { Section } from 'components/Employee/Employee';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { getRequest } from 'request';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import './project.scss';
import firebase from '../../config/database';

const commits = [
  { author: 'Shawn Laurence', changed: 2, added: 2, deleted: 1, date: '22/09/2017 12:34pm' },
  { author: 'Miles McDaniels', changed: 1, added: 5, deleted: 3, date: '22/09/2017 12:34pm' },
  { author: 'Shawn Laurence', changed: 1, added: 1, deleted: 0, date: '22/09/2017 12:34pm' },
  { author: 'Nicholas Livingstone', changed: 2, added: 1, deleted: 1, date: '22/09/2017 12:34pm' },
  { author: 'Shawn Laurence', changed: 3, added: 2, deleted: 1, date: '22/09/2017 12:34pm' },
];

class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      project: {
        users: [],
      },
      gitStates: [],
    };

    this.prepareEmployees = this.prepareEmployees.bind(this);
  }

  componentWillMount() {
    getRequest('getProjects/').then(response => {
      const resp = response.data;
      if (resp[this.props.params.id] === undefined) {
        browserHistory.push('/dashboard');
      }
      this.setState({ project: resp[this.props.params.id] });
    });

    const gitEvent = firebase
      .database()
      .ref(`git_events`)
      .orderByKey()
      .limitToLast(10);
    gitEvent.on('child_added', child => {
      const value = child.val();
      let arr = [];
      Object.keys(value).forEach(i => arr.push({ name: child.key, ...value[i] }));
      this.setState({
        gitStates: [...arr, ...this.state.gitStates],
      });
    });
  }

  componentWillUnmount() {
    this.state.gitEvent.off();
  }

  prepareEmployees() {
    let arr = [];
    const users = this.state.project.users;
    Object.keys(users).forEach(function(key) {
      arr.push({
        name: users[key].name,
        mood: users[key].predicted_feel > 2 ? 'happy' : 'bad',
        imagePath: users[key].img,
      });
    });
    return arr;
  }

  render() {
    const empl = this.prepareEmployees();
    return (
      <div>
        <Employee employees={empl} />
        <div className="statistics">
          <Section sectionName={'Git'} />
          <Table height={'400px'}> 
            <TableHeader adjustForCheckbox={false} displaySelectAll={false} enableSelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Author</TableHeaderColumn>
                <TableHeaderColumn>Changed</TableHeaderColumn>
                <TableHeaderColumn>Added</TableHeaderColumn>
                <TableHeaderColumn>Deleted</TableHeaderColumn>
                <TableHeaderColumn>Quality</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} deselectOnClickaway={false} stripedRows>
              {this.state.gitStates.map(commit => (
                <TableRow>
                  <TableRowColumn>{commit.name}</TableRowColumn>
                  <TableRowColumn>{commit.files_changed}</TableRowColumn>
                  <TableRowColumn>{commit.files_added}</TableRowColumn>
                  <TableRowColumn>{commit.files_removed}</TableRowColumn>
                  <TableRowColumn>{commit.code_quality.toPrecision(2)}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.any,
  }),
};

export default Project;
