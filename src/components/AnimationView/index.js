import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as TemplateAction from '../../store/actions/template.action';
import * as TimeAction from '../../store/actions/time.action';

import './style.scss';

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
}) => {
  const AdobeAn = {};
  const [stage, setStage] = useState();
  const [timeline, setTimeline] = useState();

  const makeResponsive = (isResp, respDim, isScale, scaleType, domContainers, stage, canvasSize) => {
    let lastW; let lastH; let lastS = 1;
    const resizeCanvas = () => {
      const canvasView = document.getElementById('canvas_view');

      const w = canvasSize.width; const h = canvasSize.height;
      const iw = canvasView.clientWidth - 50;
      const ih = canvasView.clientHeight - 50;
      const pRatio = window.devicePixelRatio || 1; const xRatio = iw / w; const yRatio = ih / h; let sRatio = 1;

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
      setStage(newStage);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
  };

  const handleTick = (event) => {
    if (event.paused || !stage) return;
    if (timeline.position < maxTime) {
      setCurTime(timeline.position);
    } else {
      setCurTime(0);
      setPaused(true);
    }
    stage.update();
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
    newExportRoot.name = curTemplate.id;
    if (paused) newExportRoot.gotoAndStop(0);

    stage.addChildAt(newExportRoot, 0);
  }, [AdobeAn, curTemplate, paused, setTemplateProperty, stage]);

  useEffect(() => {
    if (!stage || !curTemplate) return;
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
  }, [curTemplate, stage, templateProperty]);

  useEffect(() => {
    window.createjs.Ticker.maxTime = maxTime;
  }, [maxTime]);

  useEffect(() => {
    if (!stage) return;
    if (!paused) window.createjs.Ticker.addEventListener('tick', handleTick);
    else window.createjs.Ticker.removeEventListener('tick', handleTick);

    window.createjs.Ticker.paused = !!paused;
    if (curTemplate) {
      const exportRoot = stage.getChildByName(curTemplate.id);
      if (exportRoot && !paused) exportRoot.gotoAndPlay(curTime / 24);
      if (exportRoot && paused) exportRoot.gotoAndStop(curTime / 24);
    }
    if (!paused) timeline.gotoAndPlay(curTime);
    else timeline.gotoAndStop(curTime);
    stage.update();
  }, [curTemplate, curTime, handleTick, paused, stage, timeline]);

  const resizeCanvasView = () => {
    const canvasView = document.getElementById('canvas_view');
    if (!canvasView) return;
    setAnimationViewSize({
      width: canvasView.clientWidth,
      height: canvasView.clientHeight,
    });
  };

  useEffect(() => {
    if (!timeline) return;

    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      const shape = stage.getChildByName(layer.title);

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
      timeline.addTween(tween);
    }
    timeline.gotoAndStop(0);
  }, [timeline, layers, stage]);

  useEffect(() => {
    if (!stage) return;
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
    stage.update();
  }, [curTemplate, curTime, paused, stage, timeline]);

  useEffect(() => {
    const newStage = new window.createjs.Stage('canvas');
    setStage(newStage);
    const newTimeline = new window.createjs.Timeline();
    setTimeline(newTimeline);

    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      const shape = new window.createjs.Shape();
      shape.name = layer.title;
      if (layer.shape.type === 'circle') {
        shape.graphics.beginFill(layer.shape.fillColor).drawCircle(layer.shape.x, layer.shape.y, layer.shape.radius);
      }
      newStage.addChild(shape);
    }

    window.addEventListener('resize', resizeCanvasView);
    const canvas = document.getElementById('canvas');
    const animContainer = document.getElementById('animation_container');
    const domOverlayContainer = document.getElementById('dom_overlay_container');
    // eslint-disable-next-line max-len
    makeResponsive(true, 'both', false, 1, [canvas, animContainer, domOverlayContainer], newStage, { width: 1280, height: 720 });
    resizeCanvasView();
  }, [layers, resizeCanvasView]);


  return (
    <div id="canvas_view" className="animation-view d-flex justify-content-center align-items-center">
      <div id="animation_container" className="position-relative">
        <canvas id="canvas" />
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
};

const mapStateToProps = ({ template, time, layer }) => ({
  templateProperty: template.property,
  curTemplate: template.curTemplate,
  paused: template.paused,
  curTime: time.curTime,
  layers: layer.layers,
  maxTime: layer.maxTime,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setTemplateProperty: TemplateAction.setTemplateProperty,
    setAnimationViewSize: TemplateAction.setAnimationViewSize,
    setPaused: TemplateAction.setPaused,
    setCurTime: TimeAction.setCurTime,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(AnimationView);
