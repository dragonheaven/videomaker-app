import React from 'react';

import './style.scss';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TemplateAction from '../../store/actions/template.action';

const RightSceneView = ({ paused, setPaused }) => {
  const onPlayButtonClick = () => {
    setPaused(!paused);
  };

  return (
    <div className="right-scene-view d-flex flex-grow-1 justify-content-center align-items-center">
      <div className="action-button">
        <Icon.SkipBack size={20} />
      </div>
      <div className="action-button" onClick={onPlayButtonClick}>
        { paused ? <Icon.Play size={20} /> : <Icon.Pause size={20} /> }
      </div>
      <div className="action-button">
        <Icon.SkipForward size={20} />
      </div>
    </div>
  );
};

RightSceneView.propTypes = {
  paused: PropTypes.bool.isRequired,
  setPaused: PropTypes.func.isRequired,
};

const mapStateToProps = ({ template }) => ({
  paused: template.paused,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setPaused: TemplateAction.setPaused,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(RightSceneView);
