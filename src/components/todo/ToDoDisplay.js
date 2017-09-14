import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoDisplay extends Component {

  buildCourseRow(todo, index) {
    if(!todo.title) {
      return null;
    }
    return <li className="list-group-item" key={index}>{todo.title}</li>;
  }

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item active">{this.buildCourseRow}</li>
      </ul>
    );
  }
}

ToDoDisplay.propTypes = {
  buildCourseRow: PropTypes.func
};

export default ToDoDisplay;
