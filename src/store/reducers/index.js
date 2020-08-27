import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import templateReducer from './template.reducer';
import layerReducer from './layer.reducer';
import timeReducer from './time.reducer';
import tabReducer from './tab.reducer';
import stageReducer from './stage.reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  template: templateReducer,
  layer: layerReducer,
  time: timeReducer,
  tab: tabReducer,
  stage: stageReducer,
});
