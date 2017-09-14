import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoTitle extends Component {
  render() {
    return (
      <div className="input-group">
        <span className="input-group-addon">
          <input type="checkbox" onClick={this.isChecked} checked={this.props.checked}/>
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with radio button"
          />
      </div>
    );
  }
}

ToDoTitle.propTypes = {
  checked: PropTypes.bool,
  isChecked: PropTypes.func
};

export default ToDoTitle;
