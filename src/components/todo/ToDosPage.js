import React, { PropTypes, Component } from 'react';
import ToDoInput from './ToDoInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../../actions/todoAction';

class ToDosPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: {
        title: '',
        completed: false
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    this.props.onClick(event);
  }

  handleSubmit() {
    this.props.actions.createToDo(this.state.todo);
  }

  onTitleChange(event) {
    const todo = this.state.todo;
    todo.title = event.target.value;
    this.setState({ todo: todo });
  }

  todoRow(todo, index) {
    if(!todo.title) {
      return null;
    }
    return <div key={index}>{todo.title}</div>;
  }

  render() {
    console.log('our todos', this.state.todos);
    return (
      <div>
        <ToDoInput
          handleOnClick={this.handleOnClick}
          onTitleChange={this.onTitleChange}
          handleSubmit={this.handleSubmit}
        />
        <h1>Tasks</h1>
        {this.props.todos.map(this.todoRow)}
      </div>
    );
  }
}

ToDosPage.propTypes = {
  actions: PropTypes.object,
  handleOnClick: PropTypes.func,
  handleSubmit: PropTypes.func,
  onClick: PropTypes.func,
  onTitleChange: PropTypes.func,
  title: PropTypes.string,
  todoRow: PropTypes.func,
  todos: PropTypes.array
};

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos || []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDosPage);
