import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as TemplateAction from '../../store/actions/template.action';

import './style.scss';

const templateRequire = require.context('../../templates/', true);

const AnimationView = ({
  templateProperty,
  curTemplate,
  setTemplateProperty,
  setAnimationViewSize,
}) => {
  const AdobeAn = {};
  const [exportRoot, setExportRoot] = useState(null);

  const makeResponsive = (isResp, respDim, isScale, scaleType, domContainers, stage, lib) => {
    let lastW; let lastH; let lastS = 1;
    const resizeCanvas = () => {
      const canvasView = document.getElementById('canvas_view');

      const w = lib.properties.width; const h = lib.properties.height;
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
      const stage1 = stage;
      stage1.scaleX = pRatio * sRatio;
      stage1.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage1.tickOnUpdate = false;
      stage.update();
      stage1.tickOnUpdate = true;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
  };

  const handleComplete = (canvas, animContainer, domOverlayContainer, evt, comp) => {
    const lib = comp.getLibrary();
    const newExportRoot = new lib[curTemplate.entryPoint]();

    setExportRoot(newExportRoot);

    const stage = new lib.Stage(canvas);

    // Registers the "tick" event listener.
    const fnStartAnimation = () => {
      stage.addChild(newExportRoot);
      window.createjs.Ticker.framerate = lib.properties.fps;
      window.createjs.Ticker.addEventListener('tick', stage);
    };
    // Code to support hidpi screens and responsive scaling.
    makeResponsive(true, 'both', false, 1, [canvas, animContainer, domOverlayContainer], stage, lib);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
  };

  useCallback(handleComplete, [curTemplate]);

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
    setTemplateProperty({
      texts,
      shapes,
    });

    handleComplete(canvas, animContainer, domOverlayContainer, {}, comp);
  }, [curTemplate]);

  useEffect(() => {
    if (!exportRoot) return;
    const newExportRoot = { ...exportRoot };
    const { texts, shapes } = templateProperty;
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
  }, [templateProperty]);

  const resizeCanvasView = () => {
    const canvasView = document.getElementById('canvas_view');
    setAnimationViewSize({
      width: canvasView.clientWidth,
      height: canvasView.clientHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', resizeCanvasView);
    resizeCanvasView();
  }, []);

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
};

const mapStateToProps = ({ template }) => ({
  templateProperty: template.property,
  curTemplate: template.curTemplate,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setTemplateProperty: TemplateAction.setTemplateProperty,
    setAnimationViewSize: TemplateAction.setAnimationViewSize,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(AnimationView);
