import React, {useEffect} from 'react';

import './style.scss';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TemplateAction from '../../store/actions/template.action';
import * as TimeAction from '../../store/actions/time.action';

const RightSceneView = ({ paused, setPaused, setCurTime, curTime, maxTime, exportMode }) => {
  useEffect(() => {
    if (exportMode && !paused) {
      setPaused(true);
    }
  }, [exportMode]);

  const onPlayButtonClick = () => {
    setPaused(!paused);
  };
  const timeBackward = () => {
    if (curTime >= 100) {
      setCurTime(curTime - 100);
    }
  };

  const timeForward = () => {
    if (curTime + 100 <= maxTime) {
      setCurTime(curTime + 100);
    }
  };

  return (
    <div className="right-scene-view d-flex flex-grow-1 justify-content-center align-items-center">
      <div className="action-button" onClick={timeBackward}>
        <Icon.SkipBack size={20} />
      </div>
      <div className="action-button" onClick={onPlayButtonClick}>
        { paused ? <Icon.Play size={20} /> : <Icon.Pause size={20} /> }
      </div>
      <div className="action-button" onClick={timeForward}>
        <Icon.SkipForward size={20} />
      </div>
    </div>
  );
};

RightSceneView.propTypes = {
  paused: PropTypes.bool.isRequired,
  setPaused: PropTypes.func.isRequired,
  setCurTime: PropTypes.func.isRequired,
  curTime: PropTypes.number.isRequired,
  maxTime: PropTypes.number.isRequired,
  exportMode: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ template, time, layer }) => ({
  paused: template.paused,
  curTime: time.curTime,
  maxTime: layer.maxTime,
  exportMode: template.exportMode
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setPaused: TemplateAction.setPaused,
    setCurTime: TimeAction.setCurTime,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(RightSceneView);
