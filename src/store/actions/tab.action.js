import ACTION from '../actionTypes';

export function setRightSidebarTabIndex(tabIdx) {
  return {
    type: ACTION.SET_RIGHTSIDEBAR_TAB_INDEX,
    tabIdx,
  };
}
