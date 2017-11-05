import React from 'react';
import Employee from 'components/Employee/Employee';
import {Section} from 'components/Employee/Employee';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import './project.scss';
import {getRequest} from 'request';
import {browserHistory} from 'react-router';

const commits = [
  {author: 'Shawn Laurence', changed: 2, added: 2, deleted: 1, date: '22/09/2017 12:34pm'},
  {author: 'Miles McDaniels', changed: 1, added: 5, deleted: 3, date: '22/09/2017 12:34pm'},
  {author: 'Shawn Laurence', changed: 1, added: 1, deleted: 0, date: '22/09/2017 12:34pm'},
  {author: 'Nicholas Livingstone', changed: 2, added: 1, deleted: 1, date: '22/09/2017 12:34pm'},
  {author: 'Shawn Laurence', changed: 3, added: 2, deleted: 1, date: '22/09/2017 12:34pm'},
];

class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      project: {
        users: []
      },
    };

    this.prepareEmployees = this.prepareEmployees.bind(this);
  }

  componentWillMount() {
    getRequest('getProjects/').then(response => {
      const resp = response.data;
      if (resp[this.props.params.id] === undefined) {
        browserHistory.push('/dashboard');
      }
      this.setState({project: resp[this.props.params.id]});
    });
  }

  prepareEmployees() {
    let arr = [];
    const users = this.state.project.users;
    Object.keys(users).forEach(function (key) {
      arr.push({
        name: users[key].name,
        mood: users[key].predicted_feel > 2 ? 'happy' : 'bad',
        imagePath: users[key].img
      });
    });
    return arr;
  }

  render() {
    const empl = this.prepareEmployees();
    return (
      <div>
        <Employee employees={empl}/>
        <div className="statistics">
          <Section sectionName={'Git'}/>
          <Table>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false} enableSelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Author</TableHeaderColumn>
                <TableHeaderColumn>Changed</TableHeaderColumn>
                <TableHeaderColumn>Added</TableHeaderColumn>
                <TableHeaderColumn>Deleted</TableHeaderColumn>
                <TableHeaderColumn>Date</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} deselectOnClickaway={false} stripedRows>
              {commits.map(commit => (
                <TableRow>
                  <TableRowColumn>{commit.author}</TableRowColumn>
                  <TableRowColumn>{commit.changed}</TableRowColumn>
                  <TableRowColumn>{commit.added}</TableRowColumn>
                  <TableRowColumn>{commit.deleted}</TableRowColumn>
                  <TableRowColumn>{commit.date}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Project;
