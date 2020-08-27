import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as TemplateAction from '../../store/actions/template.action';
import * as TimeAction from '../../store/actions/time.action';
import * as LayerAction from '../../store/actions/layer.action';

import './style.scss';

let handleTickListener;

const templateRequire = require.context('../../templates/', true);

const AnimationView = ({
  templateProperty,
  curTemplate,
  setTemplateProperty,
  setAnimationViewSize,
  paused,
  curTime,
  setCurTime,
  setPaused,
  layers,
  maxTime,
  curLayer,
  addNewLayer,
  setLayerData,
  exportMode,
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

  const handleTick = (maxTime) => {
    return (event) => {
      if (event.paused || !stage || exportMode) return;

      if (timeline.position < maxTime) {
        setCurTime(timeline.position);
      } else {
        setCurTime(0);
        setPaused(true);
      }
      stage.update();
    };
  };

  useEffect(() => {
    if (exportMode) {
      window.createjs.Ticker.removeEventListener('tick', handleTickListener);
    }
  }, [exportMode]);

  const getPos = (x, y, w, h, cornSize, i) => {
    switch (i) {
      case 0:
        return [x - cornSize, y - cornSize];
      case 1:
        return [x + w / 2 - cornSize, y - cornSize];
      case 2:
        return [x + w - cornSize, y - cornSize];
      case 3:
        return [x + w - cornSize, y + h / 2 - cornSize];
      case 4:
        return [x + w - cornSize, y + h - cornSize];
      case 5:
        return [x + w / 2 - cornSize, y + h - cornSize];
      case 6:
        return [x - cornSize, y + h - cornSize];
      case 7:
        return [x - cornSize, y + h / 2 - cornSize];
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
      const dashRect = new window.createjs.Shape();
      dashRect.name = '__select_dash';
      dashRect.graphics
        .setStrokeStyle(2)
        .setStrokeDash([5, 5], 0)
        .beginStroke(strokeColor).drawRect(selectRect.x, selectRect.y, selectRect.w, selectRect.h);

      stage.addChild(dashRect);
      stage.update();
      for (let i = 0; i < 8; i++) {
        const newShape = new window.createjs.Shape();
        newShape.name = `__select_${i}`;
        const [x, y] = getPos(selectRect.x, selectRect.y, selectRect.w, selectRect.h, cornSize / 2, i);
        newShape.graphics.beginFill('#fff')
          .setStrokeStyle(2).beginStroke('#000')
          .drawRect(x, y, cornSize, cornSize);
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
              shape = new window.createjs.Text(layer.shape.text,
                `${layer.shape.fontSize}px ${layer.shape.fontFamily}`, layer.shape.color);
              shape.x = layer.shape.x;
              shape.y = layer.shape.y;
              shape.name = layer.title;
              shape.visible = layer.visible;
              stage.addChild(shape);
            } else {
              shape.x = layer.shape.x;
              shape.y = layer.shape.y;
              shape.text = layer.shape.text;
              shape.font = `${layer.shape.fontSize}px ${layer.shape.fontFamily}`;
              shape.color = layer.shape.color;
              shape.rotation = layer.shape.angle;
            }
            break;
          case 'rect':
            if (!shape) {
              shape = new window.createjs.Shape();
              shape.name = layer.title;
              shape.visible = layer.visible;
              shape.graphics.beginFill(layer.shape.fillColor)
                .setStrokeDash([0, 0], 0).setStrokeStyle(layer.shape.strokeWidth).beginStroke(layer.shape.strokeColor)
                .drawRect(layer.shape.x, layer.shape.y, layer.shape.w, layer.shape.h);
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
              shape.graphics.command.w = layer.shape.w;
              shape.graphics.command.h = layer.shape.h;
              shape.rotation = layer.shape.angle;
            }
            break;
          case 'circle':
            if (!shape) {
              shape = new window.createjs.Shape();
              shape.name = layer.title;
              shape.visible = layer.visible;
              shape.graphics.beginFill(layer.shape.fillColor)
                .setStrokeDash([0, 0], 0).setStrokeStyle(layer.shape.strokeWidth).beginStroke(layer.shape.strokeColor)
                .drawCircle(layer.shape.x, layer.shape.y, layer.shape.radius);
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
              shape.rotation = layer.shape.angle;
            }
            break;
          case 'ellipse':
            if (!shape) {
              shape = new window.createjs.Shape();
              shape.name = layer.title;
              shape.visible = layer.visible;
              shape.graphics.beginFill(layer.shape.fillColor)
                .setStrokeDash([0, 0], 0).setStrokeStyle(layer.shape.strokeWidth).beginStroke(layer.shape.strokeColor)
                .drawEllipse(layer.shape.x, layer.shape.y, layer.shape.w, layer.shape.h);
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
              shape.graphics.command.w = layer.shape.w;
              shape.graphics.command.h = layer.shape.h;
              shape.rotation = layer.shape.angle;
            }
            break;
          case 'star':
            if (!shape) {
              shape = new window.createjs.Shape();
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
          default:
            break;
        }
        stage.update();
      }
    }

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

    if (curTemplate) {
      const exportRoot = stage.getChildByName(curTemplate.id);
      if (exportRoot && !paused) exportRoot.gotoAndPlay(curTime / 24);
      if (exportRoot && paused) exportRoot.gotoAndStop(curTime / 24);
    }

    removeSelectors();
    drawSelectors();
  };

  const addTweens = () => {
    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      const shape = stage.getChildByName(layer.title);
      if (shape && layer.shape.type !== 'template') {
        const tween = new window.createjs.Tween.get(shape, { override: true });
        for (let j = 0; j < layer.keyframes.length; j++) {
          const keyFrame = layer.keyframes[j];
          const lastTimeVal = j ? layer.keyframes[j - 1].val : 0;
          if (keyFrame.type === 'wait') {
            tween.wait(keyFrame.val - lastTimeVal);
          } else if (keyFrame.type === 'to') {
            tween.to(keyFrame.data, keyFrame.val - lastTimeVal, window.createjs.Ease[keyFrame.data.anim]);
          }
        }
        tween.wait(maxTime - layer.keyframes[layer.keyframes.length - 1].val);
        tween.bounce = true;
        timeline.addTween(tween);
      }
    }
    timeline.gotoAndStop(0);
  };

  const onDropShape = (e) => {
    const data = e.dataTransfer.getData('type');
    let shape;
    switch (data) {
      case 'rect':
        shape = {
          type: 'rect',
          x: e.clientX,
          y: e.clientY,
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
          x: e.clientX,
          y: e.clientY,
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
          x: e.clientX,
          y: e.clientY,
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
          x: e.clientX,
          y: e.clientY,
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
          x: e.clientX,
          y: e.clientY,
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
    const canvas = document.getElementById('canvas');
    const animContainer = document.getElementById('animation_container');
    const domOverlayContainer = document.getElementById('dom_overlay_container');

    if (!canvas || !animContainer || !domOverlayContainer || !curTemplate.id) return;

    const templateScript = (templateRequire(`./${curTemplate.scriptName}`)).default;
    templateScript(window.createjs, AdobeAn);

    const key = Object.keys(AdobeAn.compositions)[0];
    const comp = AdobeAn.getComposition(key);
    const lib = comp.getLibrary();
    const newExportRoot = new lib[curTemplate.entryPoint]();

    const rootKeys = Object.keys(newExportRoot);
    const textKeys = rootKeys.filter((item) => item.search(new RegExp('text', 'gi')) !== -1);
    const shapeKeys = rootKeys.filter((item) => item.search(new RegExp('([^_]+shape)|(shape[^_]+)', 'gi')) !== -1);

    const texts = [];
    for (let i = 0; i < textKeys.length; i++) {
      const textKey = textKeys[i];
      const text = newExportRoot[textKey];
      texts[textKey] = {
        text: text._text.text,
        color: text._text.color,
        font: text._text.font,
        textAlign: text._text.textAlign,
        textBaseline: text._text.textBaseline,
        x: text._text.x,
        y: text._text.y,
        rotation: text.rotation,
      };
    }

    const shapes = [];

    for (let i = 0; i < shapeKeys.length; i++) {
      const shapeKey = shapeKeys[i];
      const shape = newExportRoot[shapeKey]._shape;
      shapes[shapeKey] = {
        visible: shape.visible,
      };
    }
    const backgroundColor = newExportRoot.shape11._shape.shape.graphics._fill.style;

    setTemplateProperty({
      texts,
      shapes,
      background: {
        color: backgroundColor,
      },
    });
    addNewLayer({ title: curTemplate.id, visible: true, shape: { type: 'template', name: curTemplate.id } });
    newExportRoot.name = curTemplate.id;
    if (paused) newExportRoot.gotoAndStop(0);

    stage.addChild(newExportRoot);
  }, [curTemplate]);

  useEffect(() => {
    if (!stage || !curTemplate || !curTemplate.id) return;
    const newExportRoot = stage.getChildByName(curTemplate.id);
    const { texts, shapes, background } = templateProperty;
    Object.entries(texts).forEach(([key, text]) => {
      newExportRoot[key]._text.text = text.text;
      newExportRoot[key]._text.color = text.color;
      newExportRoot[key]._text.textAlign = text.textAlign;
      newExportRoot[key]._text.textBaseline = text.textBaseline;
      newExportRoot[key]._text.font = text.font;
      newExportRoot[key]._text.x = text.x;
      newExportRoot[key]._text.y = text.y;
      newExportRoot[key].rotation = text.rotation;
    });
    Object.entries(shapes).forEach(([key, shape]) => {
      newExportRoot[key]._shape.visible = shape.visible;
    });
    newExportRoot.shape11._shape.shape.graphics._fill.style = background.color;
    drawLayers();
  }, [templateProperty]);

  useEffect(() => {
    if (window.createjs.Ticker.hasEventListener('tick')) {
      window.createjs.Ticker.removeEventListener('tick', handleTickListener);
    }
    setCurTime(0);
    handleTickListener = window.createjs.Ticker.addEventListener('tick', handleTick(maxTime));
  }, [maxTime]);

  useEffect(() => {
    if (!stage) return;
    if (!paused) {
      if (window.createjs.Ticker.hasEventListener('tick')) {
        window.createjs.Ticker.removeEventListener('tick', handleTickListener);
      }
      handleTickListener = window.createjs.Ticker.addEventListener('tick', handleTick(maxTime));
    } else {
      // window.createjs.Ticker.removeEventListener('tick', handleTickListener);
    }

    window.createjs.Ticker.paused = !!paused;
    if (curTemplate) {
      const exportRoot = stage.getChildByName(curTemplate.id);
      if (exportRoot && !paused) exportRoot.gotoAndPlay(curTime / 24);
      if (exportRoot && paused) exportRoot.gotoAndStop(curTime / 24);
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
    window.createjs.Ticker.framerate = 24;
    window.createjs.Ticker.setFPS(24);
    window.createjs.Ticker.paused = true;
  }, [stage]);

  useEffect(() => {
    if (!stage) return;
    if (curTemplate) {
      const exportRoot = stage.getChildByName(curTemplate.id);
      if (exportRoot) {
        if (paused) exportRoot.gotoAndPlay(curTime / 24);
        else exportRoot.gotoAndStop(curTime / 24);
      }
    }
    if (paused) {
      timeline.gotoAndStop(curTime);
    } else {
      timeline.gotoAndPlay(curTime);
    }
    if (curTime === 0) {
      drawLayers();
      addTweens();
    }
    stage.update();
  }, [curTime]);

  useEffect(() => {
    const newStage = new window.createjs.Stage('canvas');
    setStage(newStage);

    const newTimeline = new window.createjs.Timeline();
    setTimeline(newTimeline);

    window.createjs.Ticker.timingMode = window.createjs.Ticker.RAF;

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
      setCurTime(0);
    }
    setPaused(true);
  }, [layers]);

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
  templateProperty: PropTypes.object.isRequired,
  curTemplate: PropTypes.object.isRequired,
  setTemplateProperty: PropTypes.func.isRequired,
  setAnimationViewSize: PropTypes.func.isRequired,
  setCurTime: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
  curTime: PropTypes.number.isRequired,
  setPaused: PropTypes.func.isRequired,
  layers: PropTypes.arrayOf(PropTypes.object).isRequired,
  maxTime: PropTypes.number.isRequired,
  curLayer: PropTypes.number.isRequired,
  addNewLayer: PropTypes.func.isRequired,
  setLayerData: PropTypes.func.isRequired,
  exportMode: PropTypes.bool.isRequired,
};

const mapStateToProps = ({
  template, time, layer,
}) => ({
  templateProperty: template.property,
  curTemplate: template.curTemplate,
  paused: template.paused,
  curTime: time.curTime,
  layers: layer.layers,
  maxTime: layer.maxTime,
  curLayer: layer.curLayer,
  exportMode: template.exportMode,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setTemplateProperty: TemplateAction.setTemplateProperty,
    setAnimationViewSize: TemplateAction.setAnimationViewSize,
    setPaused: TemplateAction.setPaused,
    setCurTime: TimeAction.setCurTime,
    addNewLayer: LayerAction.addNewLayer,
    setCurLayer: LayerAction.setCurLayer,
    setLayerData: LayerAction.setLayerData,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(AnimationView);
