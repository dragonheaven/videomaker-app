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

export function changeLayerOrder(layerId, amount) {
  return {
    type: ACTION.CHANGE_LAYER_ORDER,
    layerId,
    amount,
  };
}

export function setKeyframes(layerId, data) {
  return {
    type: ACTION.SET_KEY_FRAMES,
    layerId,
    data,
  };
}
