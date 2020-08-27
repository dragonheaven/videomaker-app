import ACTION from '../actionTypes';

const initialState = {
  stage: null,
  exportRoot: null,
};

export default function stageReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.SET_STAGE:
      return {
        ...state,
        stage: action.data,
      };
    case ACTION.SET_EXPORT_ROOT:
      return {
        ...state,
        exportRoot: action.data,
      };
    default:
      return state;
  }
}
