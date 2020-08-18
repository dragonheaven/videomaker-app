import React from 'react';
import * as Icon from 'react-feather';

import './style.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const LeftSceneView = () => (
  <div className="left-scene-view d-flex align-items-center">
    <div className="title d-flex align-items-center">
      <Icon.Layers size={16} />
      <span>Timeline</span>
    </div>
  </div>
);

LeftSceneView.propTypes = {
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(LeftSceneView);
