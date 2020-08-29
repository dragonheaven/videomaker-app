import ACTION from '../actionTypes';

export function addNewLayer(data, keyframes) {
  return {
    type: ACTION.ADD_NEW_LAYER,
    data,
    keyframes,
  };
}

export function setCurLayer(curLayer) {
  return {
    type: ACTION.SET_CUR_LAYER,
    curLayer,
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

export function setLayerData(layerId, data) {
  return {
    type: ACTION.SET_LAYER_DATA,
    layerId,
    data,
  };
}
