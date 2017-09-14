import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

class ToDoInput extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log('our props', this.props);
    const props = this.props;

    const {
      fields: {
        title
      },
      handleFormSubmit
    } = props;

    const postToDoForm = (form) => {
      const todo = {
        title: form.title
      };
      handleFormSubmit(todo);
    };

    return (
      <form onSubmit={handleFormSubmit(postToDoForm)}>
        <div>
          <label>Your New Task!</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            id="todoItem"
            className="form-control"
            placeholder="Your Task"
            aria-describedby="sizing-addon1"
          />
        </div>
        <input className="btn btn-success" type="submit" />
      </form>
    );
  }
}

ToDoInput.propTypes = {
  fields: PropTypes.array,
  id: PropTypes.string,
  title: PropTypes.string,
  postToDoForm: PropTypes.func
};

const formName = 'todo';
const fields = [ 'todo', 'completed', 'rank' ];
export default reduxForm({
  form: formName,
  fields
})(ToDoInput);
