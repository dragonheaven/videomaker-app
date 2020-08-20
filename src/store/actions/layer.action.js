import ACTION from '../actionTypes';

export function addNewLayer(data) {
  return {
    type: ACTION.ADD_NEW_LAYER,
    data,
  };
}

export function setCurLayer(data) {
  return {
    type: ACTION.SET_CUR_LAYER,
    data,
  };
}

export function deleteLayer(layerId) {
  return {
    type: ACTION.DELETE_LAYER,
    layerId,
  };
}
