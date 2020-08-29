import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';

import './style.scss';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';

import * as LayerAction from '../../store/actions/layer.action';
import * as TimeAction from '../../store/actions/time.action';
import * as TemplateAction from '../../store/actions/template.action';

import { Timeline } from '../../lib/timeline/animation-timeline';

const TimeLineView = (props) => {
  const [timeline, setTimeline] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const onScrollChange = (obj) => {
    if (!timeline) return;
    const options = timeline.getOptions();
    const outlineContainer = document.getElementById('outline-container');

    if (options) {
      if (outlineContainer) {
        outlineContainer.style.minHeight = `${obj.scrollHeight}px`;
        const scrollContainer = document.getElementById('outline-scroll-container');
        scrollContainer.style.overflow = 'hidden';
        scrollContainer.scrollTop = obj.scrollTop;
      }
    }
  };

  const onTimeChanged = (event) => {
    props.setCurTime(event.val);
  };

  const onDragStarted = () => {
  };

  const onDragFinished = (obj) => {
    const data = obj.elements[0].row;
    props.setKeyframes(data.layerId, data.keyframes);
  };

  const onDrag = () => {
  };

  useEffect(() => {
    if (!timeline) return;
    timeline.setTime(props.curTime);
  }, [props.curTime]);

  useEffect(() => {
    const newTimeline = new Timeline();
    setTimeline(newTimeline);
  }, []);

  useEffect(() => {
    const { keyframes } = props;
    if (!timeline) return;

    timeline.initialize({
      id: 'timeline',
      headerHeight: 45,
      width: 1200,
      headerFillColor: '#282828',
      fillColor: '#2A2A2A',
      timelineStyle: {
        strokeColor: '#4af',
        capWidth: 10,
        capHeight: 10,
        capType: 'rect',
        fillColor: '#4af',
      },
      rowsStyle: {
        height: 30,
        color: 'red',
        groupFillColor: '#535353',
        selectedColor: 'red',
        keyframesStyle: {
          shape: 'circle',
          fillColor: 'white',
          strokeColor: 'red',
          strokeThickness: 4,
          width: 6,
          height: 6,
        },
      },
    });
    timeline.setModel({ rows: keyframes });
    timeline.onTimeChanged(onTimeChanged);
    timeline.onScroll(onScrollChange);
    timeline.onDragStarted(onDragStarted);
    timeline.onDrag(onDrag);
    timeline.onDragFinished(onDragFinished);

    const options = timeline.getOptions();
    const headerElement = document.getElementById('outline-header');
    headerElement.style.maxHeight = `${options.headerHeight}px`;
    headerElement.style.minHeight = `${options.headerHeight}px`;
    setIsLoaded(true);
  }, [timeline]);

  useEffect(() => {
    if (!timeline) return;
    timeline.setModel({ rows: props.keyframes });
  }, [props.keyframes]);

  const addNewLayer = () => {
    props.addNewLayer({});
  };

  const changeLayerOrder = (amount) => {
    const { curLayer, layers } = props;
    const indexOfCurLayer = layers.findIndex((item) => item.id === curLayer);
    if (indexOfCurLayer + amount < 0 || indexOfCurLayer + amount >= layers.length) return;
    props.changeLayerOrder(curLayer, amount);
  };

  const setVisible = (layerId, visible) => {
    props.setLayerData(layerId, { visible });
  };

  if (!timeline) return <></>;
  const options = timeline.getOptions();

  const {
    layers, deleteLayer, setCurLayer, curLayer, setLayerData,
  } = props;

  const form = layers.find((item) => item.id === curLayer);

  return (
    <div className="timeline-container ">
      <div className="outline">
        <div className="outline-header" id="outline-header">
          <div className="d-flex top-bar">
            <Icon.FilePlus onClick={addNewLayer} size={16} />
          </div>
          <div className="d-flex justify-content-end bottom-bar">
            <Icon.ArrowUp size={14} onClick={() => changeLayerOrder(-1)} />
            <Icon.ArrowDown size={14} onClick={() => changeLayerOrder(1)} />
          </div>
        </div>
        <div
          className="outline-scroll-container"
          id="outline-scroll-container"
        >
          <div className="outline-items" id="outline-container">
            {
              isLoaded ? layers.map((item, index) => (
                <div
                  key={index}
                  className={
                    `outline-node d-flex justify-content-between ${form && item.id === curLayer ? 'active' : ''}`
                  }
                  style={{
                    maxHeight: options.rowsStyle.height,
                    minHeight: options.rowsStyle.height,
                    marginBottom: options.rowsStyle.marginBottom,
                  }}
                  onClick={() => setCurLayer(item.id)}
                >
                  {
                    form && item.id === curLayer && isEdit ? (
                      <TextField
                        value={form.title}
                        onChange={(e) => setLayerData(curLayer,
                          { title: e.target.value, shape: { ...form.shape, name: e.target.value } })}
                      />
                    )
                      : <span>{item.title}</span>
                  }
                  <div className="row-icons">
                    {
                      form && item.id === curLayer && isEdit
                        ? <Icon.Save size={12} onClick={() => setIsEdit(false)} />
                        : <Icon.Edit2 size={12} onClick={() => setIsEdit(true)} />
                    }
                    <Icon.Trash2 size={12} onClick={() => deleteLayer(item.id)} />
                    {
                      !item.visible
                        ? <Icon.EyeOff size={12} onClick={() => setVisible(item.id, true)} />
                        : <Icon.Eye size={12} onClick={() => setVisible(item.id, false)} />
                    }
                  </div>
                </div>
              )) : ''
            }
          </div>
        </div>
      </div>
      <div id="timeline" className="timeline" style={{ width: props.animationViewSize.width - 180 }} />
    </div>
  );
};

TimeLineView.propTypes = {
  layers: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyframes: PropTypes.arrayOf(PropTypes.object).isRequired,
  curLayer: PropTypes.number.isRequired,
  addNewLayer: PropTypes.func.isRequired,
  deleteLayer: PropTypes.func.isRequired,
  setCurLayer: PropTypes.func.isRequired,
  setCurTime: PropTypes.func.isRequired,
  curTime: PropTypes.number.isRequired,
  changeLayerOrder: PropTypes.func.isRequired,
  setKeyframes: PropTypes.func.isRequired,
  setLayerData: PropTypes.func.isRequired,
  animationViewSize: PropTypes.object.isRequired,
};

const mapStateToProps = ({ layer, time, template }) => ({
  layers: layer.layers,
  keyframes: layer.keyframes,
  curLayer: layer.curLayer,
  curTime: time.curTime,
  paused: template.paused,
  animationViewSize: template.animationViewSize,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    addNewLayer: LayerAction.addNewLayer,
    deleteLayer: LayerAction.deleteLayer,
    setCurLayer: LayerAction.setCurLayer,
    setCurTime: TimeAction.setCurTime,
    changeLayerOrder: LayerAction.changeLayerOrder,
    setKeyframes: LayerAction.setKeyframes,
    setLayerData: LayerAction.setLayerData,
    setPaused: TemplateAction.setPaused,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(TimeLineView);
