import ACTION from '../actionTypes';

export function setAnimationViewSize(data) {
  return {
    type: ACTION.SET_ANIMATION_VIEW_SIZE,
    data,
  };
}

export function setPaused(data) {
  return {
    type: ACTION.SET_PAUSED,
    data,
  };
}

export function setExportMode(data) {
  return {
    type: ACTION.SET_EXPORT_MODE,
    data,
  };
}

export function addTemplate(data) {
  return {
    type: ACTION.ADD_TEMPLATE,
    data,
  };
}

export function setCanvasSize(data) {
  return {
    type: ACTION.SET_CANVAS_SIZE,
    data,
  };
}
