import React from 'react';
import * as Icon from 'react-feather';

import './style.scss';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TemplateAction from '../../store/actions/template.action';

const LeftSceneView = ({ paused, setPaused }) => {
  const onPlayButtonClick = () => {
    setPaused(!paused);
  };

  return (
    <div className="left-scene-view d-flex flex-column">
      <div className="sub-header d-flex justify-content-between align-items-center">
        <div className="title d-flex align-items-center">
          <Icon.Layers size={16} />
          <span>Timeline</span>
        </div>
        <div onClick={onPlayButtonClick}>
          { !paused ? <Icon.Play size={16} /> : <Icon.Pause size={16} /> }
        </div>
      </div>
      <div className="sub-content flex-grow-1" />
    </div>
  );
};

LeftSceneView.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftSceneView);
