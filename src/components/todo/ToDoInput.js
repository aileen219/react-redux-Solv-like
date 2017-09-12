import React, { PropTypes, Component } from 'react';
import { reduxForm } from 'redux-form';

class ToDoInput extends Component {
  isChecked() {
    if (this.props.checked === true || this.props.checked === false) {
      return this.props.checked;
    }

    return false;
  }

  render() {
    console.log('our props', this.props);
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label>Your New Task!</label>
        </div>
        <div className="input-group">
          <span className="input-group-addon">
            <input type="checkbox" onClick={this.isChecked} checked={this.props.checked}/>
          </span>
          <input
            type="text"
            key={this.props.index}
            onChange={this.props.onTitleChange}
            className="form-control"
            aria-label="Text input with radio button"
          />
        </div>
        <input className="btn btn-success" type="submit" value="Add" onClick={this.props.handleSubmit} />
      </form>
    );
  }
}

ToDoInput.propTypes = {
  checked: PropTypes.bool,
  handleSubmit: PropTypes.func,
  index: PropTypes.number,
  isChecked: PropTypes.func,
  onTitleChange: PropTypes.func,
  title: PropTypes.string
};


export default reduxForm({
  form: 'todo'
})(ToDoInput);
