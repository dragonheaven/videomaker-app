import ACTION from '../actionTypes';

const initialState = {
  curTime: 0,
};

export default function layerReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.SET_CUR_TIME:
      return {
        ...state,
        curTime: action.data,
      };
    default:
      return state;
  }
}
