import ACTION from '../actionTypes';

export function setTemplateProperty(data) {
  return {
    type: ACTION.SET_TEMPLATE_PROPERTY,
    data,
  };
}

export function setCurTemplate(data) {
  return {
    type: ACTION.SET_CUR_TEMPLATE,
    data,
  };
}

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

export function setTemplateBackground(data) {
  return {
    type: ACTION.SET_TEMPLATE_BACKGROUND,
    data,
  };
}
