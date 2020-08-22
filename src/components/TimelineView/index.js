import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';


import './style.scss';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';

import * as LayerAction from '../../store/actions/layer.action';
import * as TimeAction from '../../store/actions/time.action';
import { Timeline } from '../../lib/animation-timeline';

const TimeLineView = (props) => {
  const [timeline, setTimeline] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  // const [preValue, setPreValue] = useState(null);
  const preValue = null;

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

  const onDragStarted = (obj) => {
    // console.log(obj.val, obj, 'dragstarted');
    // preValue = obj.target.val;
  };

  const onDragFinished = (obj) => {
    // console.log(obj.val, preValue);
    // setPreValue(null);
    console.log(obj.elements[0].row, preValue, 'dragfinished');
    const layer = obj.elements[0].row;
    props.setKeyframes(layer.id, layer.keyframes);
  };

  const onDrag = (obj) => {
    // console.log(obj.target.val, 'drag');
    // setPreValue(obj.val);
  };

  useEffect(() => {
    if (!timeline) return;
    timeline.setTime(props.curTime);
  }, [props.curTime, timeline]);

  useEffect(() => {
    const newTimeline = new Timeline();
    setTimeline(newTimeline);
  }, []);

  useEffect(() => {
    const { layers } = props;
    if (!timeline) return;

    timeline.initialize({
      id: 'timeline',
      headerHeight: 45,
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
    timeline.setModel({ rows: layers });
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
  }, [onDragFinished, onScrollChange, onTimeChanged, props, timeline]);

  useEffect(() => {
    if (!timeline) return;
    timeline.setModel({ rows: props.layers });
  }, [props.layers, timeline]);

  const addNewLayer = () => {
    props.addNewLayer({});
  };

  const changeLayerOrder = (amount) => {
    const { curLayer, layers } = props;
    if (!curLayer) return;
    const indexOfCurLayer = layers.findIndex((item) => item.id === curLayer.id);
    if (indexOfCurLayer + amount < 0 || indexOfCurLayer + amount >= layers.length) return;
    props.changeLayerOrder(curLayer.id, amount);
  };

  if (!timeline) return <></>;
  const options = timeline.getOptions();

  const {
    layers, deleteLayer, setCurLayer, curLayer,
  } = props;

  return (
    <div className="timeline-container flex-grow-1">
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
                  className={`outline-node d-flex justify-content-between ${item.id === curLayer.id ? 'active' : ''}`}
                  style={{
                    maxHeight: options.rowsStyle.height,
                    minHeight: options.rowsStyle.height,
                    marginBottom: options.rowsStyle.marginBottom,
                  }}
                  onClick={() => setCurLayer(item)}
                >
                  {
                    item.id === curLayer.id && isEdit ? (
                      <TextField
                        value={curLayer.title}
                        onChange={(e) => setCurLayer({
                          ...curLayer,
                          title: e.target.value,
                        })}
                      />
                    )
                      : <span>{item.title}</span>
                  }
                  <div className="row-icons">
                    {
                      item.id === curLayer.id && isEdit ? <Icon.Save size={12} onClick={() => setIsEdit(false)} />
                        : <Icon.Edit2 size={12} onClick={() => setIsEdit(true)} />
                    }
                    <Icon.Trash2 size={12} onClick={() => deleteLayer(item.id)} />
                    { item.hidden ? <Icon.EyeOff size={12} /> : <Icon.Eye size={12} /> }
                    { item.locked ? <Icon.Lock size={12} /> : <Icon.Unlock size={12} /> }
                  </div>
                </div>
              )) : ''
            }
          </div>
        </div>
      </div>
      <div id="timeline" className="timeline" />
    </div>
  );
};

TimeLineView.propTypes = {
  layers: PropTypes.arrayOf(PropTypes.object).isRequired,
  curLayer: PropTypes.object.isRequired,
  addNewLayer: PropTypes.func.isRequired,
  deleteLayer: PropTypes.func.isRequired,
  setCurLayer: PropTypes.func.isRequired,
  setCurTime: PropTypes.func.isRequired,
  curTime: PropTypes.number.isRequired,
  changeLayerOrder: PropTypes.func.isRequired,
  setKeyframes: PropTypes.func.isRequired,
};

const mapStateToProps = ({ layer, time }) => ({
  layers: layer.layers,
  curLayer: layer.curLayer,
  curTime: time.curTime,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    addNewLayer: LayerAction.addNewLayer,
    deleteLayer: LayerAction.deleteLayer,
    setCurLayer: LayerAction.setCurLayer,
    setCurTime: TimeAction.setCurTime,
    changeLayerOrder: LayerAction.changeLayerOrder,
    setKeyframes: LayerAction.setKeyframes,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(TimeLineView);
