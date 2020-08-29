import React from 'react';
import './style.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LeftSceneView from '../LeftSceneView';
import RightSceneView from '../RightSceneView';
import TimeLineView from '../TimelineView';

const SceneView = () => (
  <div id="scene_view" className="scene-view d-flex flex-column">
    <div className="d-flex">
      <LeftSceneView />
      <RightSceneView />
    </div>
    <TimeLineView />
  </div>
);

SceneView.propTypes = {
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(SceneView);
