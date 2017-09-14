import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoInput from './ToDoInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../../actions/todoAction';

class ToDosPage extends Component {
  constructor(props) {
    super(props);

   }

  render() {
    return (
      <div>
        <ToDoInput
          handleFormSubmit={this.props.handleFormSubmit}
        />
      </div>
    );
  }
}

ToDosPage.propTypes = {
  actions: PropTypes.object,
  handleFormSubmit: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  console.log('our state', state);
  return {
    todos: state.todos || []
  };
};

const mapDispatchToProps = dispatch => ({
  handleFormSubmit: (form) => {
    return form;
  },
  actions: bindActionCreators(todoActions, dispatch)
});



export default connect(mapStateToProps, mapDispatchToProps)(ToDosPage);
