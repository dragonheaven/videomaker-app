import ACTION from '../actionTypes';

const initialState = {
  rightSidebarTabIndex: 0,
};

export default function tabReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.SET_RIGHTSIDEBAR_TAB_INDEX:
      return {
        ...state,
        rightSidebarTabIndex: action.tabIdx,
      };
    default:
      return state;
  }
}
