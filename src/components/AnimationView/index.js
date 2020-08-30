import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import createjs from 'createjs';

import * as TemplateAction from '../../store/actions/template.action';
import * as TimeAction from '../../store/actions/time.action';
import * as LayerAction from '../../store/actions/layer.action';

import './style.scss';

let handleTickListener;

const templateRequire = require.context('../../templates/', true);

const AnimationView = ({
  setAnimationViewSize,
  setCanvasSize,
  paused,
  curTime,
  setCurTime,
  setPaused,
  layers,
  keyframes,
  maxTime,
  curLayer,
  addNewLayer,
  setLayerData,
  exportMode,
  canvasSize,
}) => {
  const [stage, setStage] = useState();
  const [timeline, setTimeline] = useState();

  const makeResponsive = (isResp, respDim, isScale, scaleType, domContainers, stage, canvasSize) => {
    let lastW; let lastH; let lastS = 1;
    const resizeCanvas = () => {
      const canvasView = document.getElementById('canvas_view');
      const mainView = document.getElementById('main_view');
      const sceneView = document.getElementById('scene_view');
      const rightSideBar = document.getElementById('right_sidebar');

      const w = canvasSize.width; const h = canvasSize.height;
      const iw = window.innerWidth - rightSideBar.clientWidth - 70;
      const ih = window.innerHeight - 390;
      canvasView.style.width = `${window.innerWidth - rightSideBar.clientWidth - 20}px`;
      canvasView.style.height = `${window.innerHeight - 300}px`;
      mainView.style.width = `${window.innerWidth - rightSideBar.clientWidth}px`;
      sceneView.style.width = `${window.innerWidth - rightSideBar.clientWidth}px`;
      const pRatio = window.devicePixelRatio || 1; const xRatio = iw / w; const yRatio = ih / h; let sRatio = 1;
      setAnimationViewSize({
        width: window.innerWidth - 300,
        height: window.innerHeight - 300,
      });


      if (isResp) {
        if ((respDim === 'width' && lastW === iw) || (respDim === 'height' && lastH === ih)) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType === 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType === 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      const cavas = domContainers[0];
      cavas.width = w * pRatio * sRatio;
      cavas.height = h * pRatio * sRatio;
      domContainers.forEach((container) => {
        const { style } = container;
        style.width = `${w * sRatio}px`;
        style.height = `${h * sRatio}px`;
      });
      setCanvasSize({
        x: (window.innerWidth - rightSideBar.clientWidth - 20 - w * sRatio) / 2 + 20,
        y: (window.innerHeight - 250 - 60 - h * sRatio) / 2 + 60,
        width: w * sRatio,
        height: h * sRatio,
      });
      const newStage = stage;
      newStage.scaleX = pRatio * sRatio;
      newStage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      newStage.tickOnUpdate = false;
      newStage.update();
      newStage.tickOnUpdate = true;
      // setStage(newStage);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
  };
  const AdobeAn = {};

  const handleTick = (event) => {
    if (event.paused || !stage || exportMode) return;

    if (timeline.position < maxTime) {
      setCurTime(timeline.position);
    } else {
      setCurTime(0);
      setPaused(true);
    }
    stage.update();
  };

  useEffect(() => {
    if (exportMode) {
      createjs.Ticker.removeEventListener('tick', handleTickListener);
    }
  }, [exportMode]);

  const getPos = (x, y, w, h, cornSize, i) => {
    switch (i) {
      case 0:
        return [x - cornSize, y - cornSize, w / 2, h / 2];
      case 1:
        return [x + w / 2 - cornSize, y - cornSize, 0, h / 2];
      case 2:
        return [x + w - cornSize, y - cornSize, -w / 2, h / 2];
      case 3:
        return [x + w - cornSize, y + h / 2 - cornSize, -w / 2, 0];
      case 4:
        return [x + w - cornSize, y + h - cornSize, -w / 2, -h / 2];
      case 5:
        return [x + w / 2 - cornSize, y + h - cornSize, 0, -h / 2];
      case 6:
        return [x - cornSize, y + h - cornSize, w / 2, -h / 2];
      case 7:
        return [x - cornSize, y + h / 2 - cornSize, w / 2, 0];
      default:
        break;
    }
  };

  const drawSelectors = () => {
    const layer = layers.find((item) => item.id === curLayer);
    if (layer && layer.shape && layer.shape.type !== 'template') {
      let selectRect;
      let cornSize;
      let strokeColor;
      switch (layer.shape.type) {
        case 'rect':
        case 'ellipse':
          selectRect = {
            x: layer.shape.x,
            y: layer.shape.y,
            w: layer.shape.w,
            h: layer.shape.h,
            rotation: layer.shape.angle,
          };
          cornSize = 15;
          strokeColor = layer.shape.type === 'rect' ? '#fff' : '#000';
          break;
        case 'circle':
        case 'star':
          selectRect = {
            x: layer.shape.x - layer.shape.radius,
            y: layer.shape.y - layer.shape.radius,
            w: layer.shape.radius * 2,
            h: layer.shape.radius * 2,
            rotation: layer.shape.angle,
          };
          cornSize = 15;
          strokeColor = '#000';
          break;
        case 'text':
          const txt = stage.getChildByName(layer.title);
          selectRect = {
            x: layer.shape.x,
            y: layer.shape.y,
            w: txt.getMeasuredWidth(),
            h: txt.getMeasuredHeight(),
            rotation: layer.shape.angle,
          };
          cornSize = 10;
          strokeColor = '#4ee';
          break;
        default:
          selectRect = {
            x: 0,
            y: 0,
            w: 0,
            h: 0,
          };
          cornSize = 0;
          break;
      }
      const dashRect = new createjs.Shape();
      dashRect.name = '__select_dash';
      dashRect.regX = selectRect.w / 2;
      dashRect.regY = selectRect.h / 2;
      dashRect.x = selectRect.x + selectRect.w / 2;
      dashRect.y = selectRect.y + selectRect.h / 2;
      dashRect.rotation = selectRect.rotation;
      dashRect.graphics
        .setStrokeStyle(2)
        .setStrokeDash([5, 5], 0)
        .beginStroke(strokeColor).rect(0, 0, selectRect.w, selectRect.h);

      stage.addChild(dashRect);
      stage.update();
      for (let i = 0; i < 8; i++) {
        const newShape = new createjs.Shape();
        newShape.name = `__select_${i}`;
        const [x, y, regX, regY] = getPos(selectRect.x, selectRect.y, selectRect.w, selectRect.h, cornSize / 2, i);
        newShape.graphics.beginFill('#fff')
          .setStrokeStyle(2).beginStroke('#000')
          .drawRect(0, 0, cornSize, cornSize);
        newShape.regX = regX + cornSize / 2;
        newShape.regY = regY + cornSize / 2;
        newShape.x = regX + x + cornSize / 2;
        newShape.y = regY + y + cornSize / 2;
        newShape.rotation = selectRect.rotation;
        stage.addChild(newShape);
        stage.update();
      }
    }
  };

  const removeSelectors = () => {
    if (!stage) {
      return;
    }
    const dashSelectRect = stage.getChildByName('__select_dash');
    if (dashSelectRect) {
      stage.removeChild(dashSelectRect);
    }
    for (let i = 0; i < 8; i++) {
      const selectRect = stage.getChildByName(`__select_${i}`);
      if (selectRect) {
        stage.removeChild(selectRect);
      }
    }
    stage.update();
  };

  const drawLayers = () => {
    stage.clear();
    for (let i = 0; i < stage.children.length; i++) {
      const children = stage.children[i];
      const layer = layers.find((item) => item.title === children.name);
      if (!layer) stage.removeChild(children);
      stage.update();
    }
    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      if (layer.shape && layer.shape.type) {
        let shape = stage.getChildByName(layer.title);
        switch (layer.shape.type) {
          case 'text':
            if (!shape) {
              shape = new createjs.Text(layer.shape.text,
                `${layer.shape.fontSize}px ${layer.shape.fontFamily}`, layer.shape.color);
              shape.name = layer.title;
              shape.visible = layer.visible;
              stage.addChild(shape);
            } else {
              shape.text = layer.shape.text;
              shape.font = `${layer.shape.fontSize}px ${layer.shape.fontFamily}`;
              shape.color = layer.shape.color;
              shape.rotation = layer.shape.angle;
            }
            shape.regX = shape.getMeasuredWidth() / 2;
            shape.regY = shape.getMeasuredHeight() / 2;
            shape.x = layer.shape.x + shape.getMeasuredWidth() / 2;
            shape.y = layer.shape.y + shape.getMeasuredHeight() / 2;
            break;
          case 'rect':
            if (!shape) {
              shape = new createjs.Shape();
              shape.name = layer.title;
              shape.graphics.beginFill(layer.shape.fillColor)
                .setStrokeDash([0, 0], 0).setStrokeStyle(layer.shape.strokeWidth).beginStroke(layer.shape.strokeColor)
                .rect(0, 0, layer.shape.w, layer.shape.h);
              stage.addChild(shape);
            } else {
              shape.graphics._fill.style = layer.shape.fillColor;
              shape.graphics._stroke.style = layer.shape.strokeColor;
              if (shape.graphics._strokeStyle) {
                shape.graphics._strokeStyle.width = layer.shape.strokeWidth;
              }
              if (layer.shape.strokeStyle === 'dash') {
                shape.graphics._strokeDash.segments = [layer.shape.strokeWidth * 2, layer.shape.strokeWidth];
              } else if (layer.shape.strokeStyle === 'dot') {
                shape.graphics._strokeDash.segments = [layer.shape.strokeWidth, layer.shape.strokeWidth];
              } else {
                shape.graphics._strokeDash.segments = [0, 0];
              }
              shape.graphics.command.w = layer.shape.w;
              shape.graphics.command.h = layer.shape.h;
              shape.rotation = layer.shape.angle;
            }
            shape.visible = layer.visible;
            shape.regX = layer.shape.w / 2;
            shape.regY = layer.shape.h / 2;
            shape.x = layer.shape.x + layer.shape.w / 2;
            shape.y = layer.shape.y + layer.shape.h / 2;
            break;
          case 'circle':
            if (!shape) {
              shape = new createjs.Shape();
              shape.name = layer.title;
              shape.visible = layer.visible;

              shape.graphics.beginFill(layer.shape.fillColor)
                .setStrokeDash([0, 0], 0).setStrokeStyle(layer.shape.strokeWidth).beginStroke(layer.shape.strokeColor)
                .drawCircle(0, 0, layer.shape.radius);
              stage.addChild(shape);
            } else {
              shape.visible = layer.visible;
              shape.graphics._fill.style = layer.shape.fillColor;
              shape.graphics._stroke.style = layer.shape.strokeColor;
              if (shape.graphics._strokeStyle) {
                shape.graphics._strokeStyle.width = layer.shape.strokeWidth;
              }
              if (layer.shape.strokeStyle === 'dash') {
                shape.graphics._strokeDash.segments = [layer.shape.strokeWidth * 2, layer.shape.strokeWidth];
              } else if (layer.shape.strokeStyle === 'dot') {
                shape.graphics._strokeDash.segments = [layer.shape.strokeWidth, layer.shape.strokeWidth];
              } else {
                shape.graphics._strokeDash.segments = [0, 0];
              }
              shape.graphics.command.radius = layer.shape.radius;
              shape.rotation = layer.shape.angle;
            }
            shape.regX = 0;
            shape.regY = 0;
            shape.x = layer.shape.x;
            shape.y = layer.shape.y;
            break;
          case 'ellipse':
            if (!shape) {
              shape = new createjs.Shape();
              shape.name = layer.title;
              shape.visible = layer.visible;
              shape.graphics.beginFill(layer.shape.fillColor)
                .setStrokeDash([0, 0], 0).setStrokeStyle(layer.shape.strokeWidth).beginStroke(layer.shape.strokeColor)
                .drawEllipse(0, 0, layer.shape.w, layer.shape.h);
              stage.addChild(shape);
            } else {
              shape.visible = layer.visible;
              shape.graphics._fill.style = layer.shape.fillColor;
              shape.graphics._stroke.style = layer.shape.strokeColor;
              if (shape.graphics._strokeStyle) {
                shape.graphics._strokeStyle.width = layer.shape.strokeWidth;
              }
              if (layer.shape.strokeStyle === 'dash') {
                shape.graphics._strokeDash.segments = [layer.shape.strokeWidth * 2, layer.shape.strokeWidth];
              } else if (layer.shape.strokeStyle === 'dot') {
                shape.graphics._strokeDash.segments = [layer.shape.strokeWidth, layer.shape.strokeWidth];
              } else {
                shape.graphics._strokeDash.segments = [0, 0];
              }
              shape.graphics.command.w = layer.shape.w;
              shape.graphics.command.h = layer.shape.h;
              shape.rotation = layer.shape.angle;
            }
            shape.regX = layer.shape.w / 2;
            shape.regY = layer.shape.h / 2;
            shape.x = layer.shape.x + layer.shape.w / 2;
            shape.y = layer.shape.y + layer.shape.h / 2;
            break;
          case 'star':
            if (!shape) {
              shape = new createjs.Shape();
              shape.name = layer.title;
              shape.visible = layer.visible;
              shape.graphics.beginFill(layer.shape.fillColor)
                .setStrokeDash([0, 0], 0).setStrokeStyle(layer.shape.strokeWidth).beginStroke(layer.shape.strokeColor)
                .drawPolyStar(layer.shape.x, layer.shape.y,
                  layer.shape.radius, 5, layer.shape.pointSize, layer.shape.angle);
              stage.addChild(shape);
            } else {
              shape.visible = layer.visible;
              shape.graphics.command.x = layer.shape.x;
              shape.graphics.command.y = layer.shape.y;
              shape.graphics._fill.style = layer.shape.fillColor;
              shape.graphics._stroke.style = layer.shape.strokeColor;
              if (shape.graphics._strokeStyle) {
                shape.graphics._strokeStyle.width = layer.shape.strokeWidth;
              }
              if (layer.shape.strokeStyle === 'dash') {
                shape.graphics._strokeDash.segments = [layer.shape.strokeWidth * 2, layer.shape.strokeWidth];
              } else if (layer.shape.strokeStyle === 'dot') {
                shape.graphics._strokeDash.segments = [layer.shape.strokeWidth, layer.shape.strokeWidth];
              } else {
                shape.graphics._strokeDash.segments = [0, 0];
              }
              shape.graphics.command.radius = layer.shape.radius;
              shape.graphics.command.pointSize = layer.shape.pointSize;
              shape.graphics.command.angle = layer.shape.angle;
            }
            break;
          case 'template':
            if (!shape) {
              const templateScript = (templateRequire(`./${layer.shape.scriptName}`)).default;
              templateScript(createjs, AdobeAn);

              const key = Object.keys(AdobeAn.compositions)[0];
              const comp = AdobeAn.getComposition(key);
              const lib = comp.getLibrary();
              shape = new lib[layer.shape.entryPoint]();
              shape.name = layer.title;
              stage.addChild(shape);
              shape.gotoAndStop(0);
            }
            shape.visible = layer.visible;
            const { texts, shapes, background } = layer.shape;
            Object.entries(texts).forEach(([key, text]) => {
              shape[key]._text.text = text.text;
              shape[key]._text.color = text.color;
              shape[key]._text.textAlign = text.textAlign;
              shape[key]._text.textBaseline = text.textBaseline;
              shape[key]._text.font = text.font;
              shape[key]._text.x = text.x;
              shape[key]._text.y = text.y;
              shape[key].rotation = text.rotation;
            });
            Object.entries(shapes).forEach(([key, item]) => {
              shape[key]._shape.visible = item.visible;
            });
            shape.shape11._shape.shape.graphics._fill.style = background;
            break;
          default:
            break;
        }
        stage.update();
      }
    }

    console.log(stage);
    const childrens = stage.children;
    for (let i = childrens.length - 1; i >= 0; i--) {
      for (let j = i - 1; j >= 0; j--) {
        const first = layers.findIndex((item) => item.shape && item.shape.name === childrens[i].name);
        const second = layers.findIndex((item) => item.shape && item.shape.name === childrens[j].name);
        if (first > second) {
          const temp = stage.children[i];
          childrens[i] = stage.children[j];
          childrens[j] = temp;
          stage.update();
        }
      }
    }

    removeSelectors();
    drawSelectors();
  };

  const addTweens = () => {
    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      const shape = stage.getChildByName(layer.title);
      const layerKeyframes = keyframes.find((item) => item.layerId === layer.id).keyframes;
      if (shape && layer.shape.type !== 'template' && layerKeyframes) {
        const tween = new createjs.Tween.get(shape, { override: true });
        for (let j = 0; j < layerKeyframes.length; j++) {
          const keyFrame = layerKeyframes[j];
          const lastTimeVal = j ? layerKeyframes[j - 1].val : 0;
          if (keyFrame.type === 'wait') {
            tween.wait(keyFrame.val - lastTimeVal);
          } else if (keyFrame.type === 'to') {
            tween.to(keyFrame.data, keyFrame.val - lastTimeVal, createjs.Ease[keyFrame.data.anim]);
          }
        }
        tween.to({ visible: false }, 10)
          .wait(maxTime - layerKeyframes[layerKeyframes.length - 1].val - 20)
          .to({ visible: true }, 10);
        tween.bounce = true;
        timeline.addTween(tween);
      } else if (layer.shape.type === 'template') {
        const tween = new createjs.Tween.get(shape, { override: true })
          .wait(layerKeyframes[1].val);
        tween.to({ visible: false }, 10)
          .wait(maxTime - layerKeyframes[1].val - 20)
          .to({ visible: true }, 10);
      }
    }
    timeline.gotoAndStop(0);
  };

  const onDropShape = (e) => {
    const x = (e.clientX - canvasSize.x) * 1280 / canvasSize.width;
    const y = (e.clientY - canvasSize.y) * 720 / canvasSize.height;

    const data = e.dataTransfer.getData('type');
    let shape;
    switch (data) {
      case 'rect':
        shape = {
          type: 'rect',
          x,
          y,
          w: 100,
          h: 100,
          fillColor: '#fff',
          strokeStyle: 'solid',
          strokeColor: '#000',
          strokeWidth: 1,
        };
        break;
      case 'ellipse':
        shape = {
          type: 'ellipse',
          x,
          y,
          w: 200,
          h: 100,
          fillColor: '#fff',
          strokeStyle: 'solid',
          strokeColor: '#000',
          strokeWidth: 1,
        };
        break;
      case 'circle':
        shape = {
          type: 'circle',
          x,
          y,
          radius: 50,
          fillColor: '#fff',
          strokeStyle: 'solid',
          strokeColor: '#000',
          strokeWidth: 1,
        };
        break;
      case 'star':
        shape = {
          type: 'star',
          x,
          y,
          radius: 50,
          fillColor: '#fff',
          strokeStyle: 'solid',
          strokeColor: '#000',
          strokeWidth: 1,
          angle: -90,
          pointSize: 0.6,
        };
        break;
      case 'text':
        shape = {
          type: 'text',
          x,
          y,
          text: 'New Text',
          fontSize: 45,
          fontFamily: 'Arial',
          color: '#000',
        };
        break;
      default:
        break;
    }
    if (shape) {
      const form = layers.find((item) => item.id === curLayer);
      if (!form || form.shape.type) {
        addNewLayer({ shape, visible: true });
      } else {
        setLayerData(curLayer, { shape: { ...form.shape, ...shape }, visible: true });
      }
    }
  };

  useEffect(() => {
    if (createjs.Ticker.hasEventListener('tick')) {
      createjs.Ticker.removeEventListener('tick', handleTickListener);
    }
    setCurTime(0);
    handleTickListener = createjs.Ticker.addEventListener('tick', handleTick);
  }, [maxTime]);

  useEffect(() => {
    if (!stage) return;
    if (!paused) {
      if (createjs.Ticker.hasEventListener('tick')) {
        createjs.Ticker.removeEventListener('tick', handleTickListener);
      }
      handleTickListener = createjs.Ticker.addEventListener('tick', handleTick);
    } else {
      // createjs.Ticker.removeEventListener('tick', handleTickListener);
    }

    createjs.Ticker.paused = !!paused;
    const templateLayers = layers.filter((item) => item.shape.type === 'template');
    for (let i = 0; i < templateLayers.length; i++) {
      const layer = templateLayers[i];
      const exportRoot = stage.getChildByName(layer.title);
      const layerKeyframes = keyframes.find((item) => item.layerId === layer.id).keyframes;
      if (curTime < layerKeyframes[0].val || curTime > layerKeyframes[1].val) {
        exportRoot.visible = false;
      } else {
        exportRoot.visible = true;
        if (exportRoot && !paused) exportRoot.gotoAndPlay((curTime - layerKeyframes[0].val) / 24);
        if (exportRoot && paused) exportRoot.gotoAndStop((curTime - layerKeyframes[0].val) / 24);
      }
    }

    if (!paused) timeline.gotoAndPlay(curTime);
    else timeline.gotoAndStop(curTime);
    removeSelectors();
    stage.update();
  }, [paused]);

  useEffect(() => {
    if (!stage) return;
    drawLayers();
    addTweens();
    createjs.Ticker.framerate = 24;
    createjs.Ticker.setFPS(24);
    createjs.Ticker.paused = true;
  }, [stage]);

  useEffect(() => {
    if (!stage) return;
    const templateLayers = layers.filter((item) => item.shape.type === 'template');
    for (let i = 0; i < templateLayers.length; i++) {
      const layer = templateLayers[i];
      const exportRoot = stage.getChildByName(layer.title);
      const layerKeyframes = keyframes.find((item) => item.layerId === layer.id).keyframes;
      if (curTime === 0) {
        drawLayers();
        addTweens();
      }
      if (curTime < layerKeyframes[0].val || curTime > layerKeyframes[1].val) {
        exportRoot.visible = false;
      } else {
        exportRoot.visible = true;
        if (exportRoot && !paused) exportRoot.gotoAndPlay((curTime - layerKeyframes[0].val) / 24);
        if (exportRoot && paused) exportRoot.gotoAndStop((curTime - layerKeyframes[0].val) / 24);
      }
    }

    if (paused) {
      timeline.gotoAndStop(curTime);
    } else {
      timeline.gotoAndPlay(curTime);
    }
    stage.update();
  }, [curTime]);

  useEffect(() => {
    const newStage = new createjs.Stage('canvas');
    setStage(newStage);

    const newTimeline = new createjs.Timeline();
    setTimeline(newTimeline);

    createjs.Ticker.timingMode = createjs.Ticker.RAF;

    const canvas = document.getElementById('canvas');
    const animContainer = document.getElementById('animation_container');
    const domOverlayContainer = document.getElementById('dom_overlay_container');
    // eslint-disable-next-line max-len
    makeResponsive(true, 'both', false, 1, [canvas, animContainer, domOverlayContainer], newStage, { width: 1280, height: 720 });
  }, []);

  useEffect(() => {
    if (!stage) return;
    if (curTime === 0) {
      drawLayers();
      addTweens();
    } else {
      drawLayers();
    }
    setPaused(true);
  }, [layers]);

  useEffect(() => {
    if (!stage) return;
    if (curTime === 0) {
      drawLayers();
      addTweens();
    } else {
      setCurTime(0);
    }
    setPaused(true);
  }, [keyframes]);

  useEffect(() => {
    removeSelectors();
    drawSelectors();
  }, [curLayer]);

  return (
    <div id="canvas_view" className="animation-view d-flex justify-content-center align-items-center">
      <div
        id="animation_container"
        className="position-relative"
        onDrop={onDropShape}
        onDragOver={(e) => {
          e.preventDefault();
        }}
      >
        <canvas
          id="canvas"
        />
        <div id="dom_overlay_container" className="dom-overlay-container position-absolute" />
      </div>
    </div>
  );
};

AnimationView.propTypes = {
  setAnimationViewSize: PropTypes.func.isRequired,
  setCanvasSize: PropTypes.func.isRequired,
  setCurTime: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
  curTime: PropTypes.number.isRequired,
  setPaused: PropTypes.func.isRequired,
  layers: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyframes: PropTypes.arrayOf(PropTypes.object).isRequired,
  maxTime: PropTypes.number.isRequired,
  curLayer: PropTypes.number.isRequired,
  addNewLayer: PropTypes.func.isRequired,
  setLayerData: PropTypes.func.isRequired,
  exportMode: PropTypes.bool.isRequired,
  canvasSize: PropTypes.object.isRequired,
};

const mapStateToProps = ({
  template, time, layer,
}) => ({
  templateProperty: template.property,
  curTemplate: template.curTemplate,
  paused: template.paused,
  curTime: time.curTime,
  layers: layer.layers,
  keyframes: layer.keyframes,
  maxTime: layer.maxTime,
  curLayer: layer.curLayer,
  exportMode: template.exportMode,
  canvasSize: template.canvasSize,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setAnimationViewSize: TemplateAction.setAnimationViewSize,
    setCanvasSize: TemplateAction.setCanvasSize,
    setPaused: TemplateAction.setPaused,
    setCurTime: TimeAction.setCurTime,
    addNewLayer: LayerAction.addNewLayer,
    setCurLayer: LayerAction.setCurLayer,
    setLayerData: LayerAction.setLayerData,
    addTemplate: TemplateAction.addTemplate,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(AnimationView);
