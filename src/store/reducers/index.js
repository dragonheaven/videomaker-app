import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import templateReducer from './template.reducer';
import layerReducer from './layer.reducer';
import timeReducer from './time.reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  template: templateReducer,
  layer: layerReducer,
  time: timeReducer,
});
