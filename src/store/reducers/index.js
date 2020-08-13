import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import templateReducer from './template.reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  template: templateReducer,
});
