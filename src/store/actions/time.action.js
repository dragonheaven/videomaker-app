import ACTION from '../actionTypes';

export function setCurTime(data) {
  return {
    type: ACTION.SET_CUR_TIME,
    data,
  };
}
