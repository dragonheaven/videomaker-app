import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TemplateAction from '../../store/actions/template.action';
import LeftSceneView from '../LeftSceneView';
import RightSceneView from "../RightSceneView";

const SceneView = ({ curProperty, setTemplateProperty }) => {
  const onPauseClick = () => {
    setTemplateProperty({
      ...curProperty,
      paused: !curProperty.paused,
    });
  };

  return (
    <div id="scene_view" className="scene-view d-flex">
      <LeftSceneView />
      <RightSceneView />
    </div>
  );
};

SceneView.propTypes = {
  curProperty: PropTypes.object.isRequired,
  setTemplateProperty: PropTypes.func.isRequired,
};

const mapStateToProps = ({ template }) => ({
  curProperty: template.property,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setTemplateProperty: TemplateAction.setTemplateProperty,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(SceneView);
