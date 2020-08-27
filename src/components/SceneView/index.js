import React, {useEffect, useRef} from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Timeline from 'react-scenejs-timeline';
import Scene from 'scenejs';
import * as TemplateAction from '../../store/actions/template.action';
import LeftSceneView from '../LeftSceneView';
import RightSceneView from '../RightSceneView';
import TimeLineView from "../TimelineView";

const SceneView = ({ curProperty, setTemplateProperty }) => {

  return (
    <div id="scene_view" className="scene-view d-flex flex-column">
      <div className="d-flex">
        <LeftSceneView />
        <RightSceneView />
      </div>
      <TimeLineView />
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
