import ACTION from '../actionTypes';

export function setStage(data) {
  return {
    type: ACTION.SET_STAGE,
    data,
  };
}

export function setExportRoot(data) {
  return {
    type: ACTION.SET_EXPORT_ROOT,
    data,
  };
}
