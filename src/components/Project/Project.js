import React from 'react';
import Employee from 'components/Employee/Employee';
import {Section} from 'components/Employee/Employee';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import './project.scss';

const imgPath = '../../images/img';

const Mood = {
  happy: 'happy',
  sad: 'sad'
};

const employees = [
  {id: 0, firstName: 'Shawn', lastName: 'Laurence', imagePath: `${imgPath}1.png`, mood: Mood.happy},
  {id: 1, firstName: 'Miles', lastName: 'McDaniels', imagePath: `${imgPath}2.png`, mood: Mood.happy},
  {id: 2, firstName: 'Nicholas', lastName: 'Livingston', imagePath: `${imgPath}4.png`, mood: Mood.sad},
];

const commits = [
  {author: 'Shawn Laurence', changed: 2, added: 2, deleted: 1, date: '22/09/2017 12:34pm'},
  {author: 'Miles McDaniels', changed: 1, added: 5, deleted: 3, date: '22/09/2017 12:34pm'},
  {author: 'Shawn Laurence', changed: 1, added: 1, deleted: 0, date: '22/09/2017 12:34pm'},
  {author: 'Nicholas Livingstone', changed: 2, added: 1, deleted: 1, date: '22/09/2017 12:34pm'},
  {author: 'Shawn Laurence', changed: 3, added: 2, deleted: 1, date: '22/09/2017 12:34pm'}
];

class Project extends React.Component {
  render() {
    return (
      <div>
        <Employee employees={employees}/>
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
              {commits.map(
                commit =>
                  <TableRow>
                    <TableRowColumn>{commit.author}</TableRowColumn>
                    <TableRowColumn>{commit.changed}</TableRowColumn>
                    <TableRowColumn>{commit.added}</TableRowColumn>
                    <TableRowColumn>{commit.deleted}</TableRowColumn>
                    <TableRowColumn>{commit.date}</TableRowColumn>
                  </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Project;
