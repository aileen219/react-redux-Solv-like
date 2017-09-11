import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todos from './todoReducer';

const rootReducer = combineReducers({
  form: formReducer,
  todos
});

export default rootReducer;
