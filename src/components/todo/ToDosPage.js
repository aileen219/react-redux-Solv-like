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

  render() {
    return (
      <ToDoInput
        handleOnClick={this.handleOnClick}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

ToDosPage.propTypes = {
  actions: PropTypes.object,
  handleOnClick: PropTypes.func,
  handleSubmit: PropTypes.func,
  onClick: PropTypes.func,
  title: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todos || []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDosPage);
