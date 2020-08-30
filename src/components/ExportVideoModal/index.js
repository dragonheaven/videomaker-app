import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CCapture from 'ccapture.js';
import Progress from 'react-progressbar';
import createjs from 'createjs'
import { CircularProgress } from '@material-ui/core';
import Modal from '../common/Modal';
import * as TemplateAction from '../../store/actions/template.action';

const templateRequire = require.context('../../templates/', true);

let handleTickExport;

class ExportVideoModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      progress: 0,
      frameNum: 0,
    };
  }

  componentDidMount() {
    this.canvas = document.getElementById('canvas_export');
    this.exportStage = new createjs.Stage('canvas_export');
    this.timeline = new createjs.Timeline();
    this.drawLayers();
    this.addTweens();
  }

  onProgress = (progress) => {
    this.setState({ progress });
  };

  handleTick = () => {
    const { maxTime, layers, keyframes } = this.props;
    if (!this.exportStage) return;
    if (this.timeline.position >= maxTime) {
      createjs.Ticker.removeEventListener('tick', handleTickExport);
      this.capturer.stop();
      this.capturer.save(this.showVideoLink);
    } else {
      const templateLayers = layers.filter((item) => item.shape.type === 'template');
      for (let i = 0; i < templateLayers.length; i++) {
        const layer = templateLayers[i];
        const exportRoot = this.exportStage.getChildByName(layer.title);
        const layerKeyframes = keyframes.find((item) => item.layerId === layer.id).keyframes;
        if (this.timeline.position < layerKeyframes[0].val || this.timeline.position > layerKeyframes[1].val) {
          exportRoot.visible = false;
        } else {
          exportRoot.visible = true;
          exportRoot.gotoAndStop((this.timeline.position - layerKeyframes[0].val) / 24);
        }
      }
    }
    this.exportStage.update();
  };

  showVideoLink = (url) => {
    cancelAnimationFrame(this.animationFrameHandler);
    const a = document.createElement('a');
    a.href = `${process.env.REACT_APP_VIDEO_API}${url}`;
    this.setState({ url: `${process.env.REACT_APP_VIDEO_API}${url}` });
  };

  drawLayers = () => {
    const { layers } = this.props;
    if (this.exportStage.children) {
      for (let i = 0; i < this.exportStage.children.length; i++) {
        const children = this.exportStage.children[i];
        const layer = layers.find((item) => item.title === children.name);
        if (!layer) this.exportStage.removeChild(children);
        this.exportStage.update();
      }
    }

    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      if (layer.shape && layer.shape.type) {
        let shape = this.exportStage.getChildByName(layer.title);
        switch (layer.shape.type) {
          case 'text':
            if (!shape) {
              shape = new createjs.Text(layer.shape.text,
                `${layer.shape.fontSize}px ${layer.shape.fontFamily}`, layer.shape.color);
              shape.name = layer.title;
              shape.visible = layer.visible;
              shape.regX = shape.getMeasuredWidth() / 2;
              shape.regY = shape.getMeasuredHeight() / 2;
              shape.x = layer.shape.x + shape.getMeasuredWidth() / 2;
              shape.y = layer.shape.y + shape.getMeasuredHeight() / 2;
              shape.rotation = layer.shape.angle;
              this.exportStage.addChild(shape);
            }
            break;
          case 'rect':
            if (!shape) {
              shape = new createjs.Shape();
              shape.name = layer.title;
              shape.visible = layer.visible;
              shape.graphics.beginFill(layer.shape.fillColor);
              if (layer.shape.strokeStyle === 'dash') {
                shape.graphics.setStrokeDash([layer.shape.strokeWidth * 2, layer.shape.strokeWidth], 0);
              } else if (layer.shape.strokeStyle === 'dot') {
                shape.graphics.setStrokeDash([layer.shape.strokeWidth, layer.shape.strokeWidth], 0);
              } else {
                shape.graphics.setStrokeDash([0, 0], 0);
              }
              shape.graphics.setStrokeStyle(layer.shape.strokeWidth).beginStroke(layer.shape.strokeColor)
                .drawRect(0, 0, layer.shape.w, layer.shape.h);

              this.exportStage.addChild(shape);
            }
            shape.rotation = layer.shape.angle;
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
              shape.graphics.beginFill(layer.shape.fillColor);
              if (layer.shape.strokeStyle === 'dash') {
                shape.graphics.setStrokeDash([layer.shape.strokeWidth * 2, layer.shape.strokeWidth], 0);
              } else if (layer.shape.strokeStyle === 'dot') {
                shape.graphics.setStrokeDash([layer.shape.strokeWidth, layer.shape.strokeWidth], 0);
              } else {
                shape.graphics.setStrokeDash([0, 0], 0);
              }
              shape.graphics.setStrokeStyle(layer.shape.strokeWidth).beginStroke(layer.shape.strokeColor)
                .drawCircle(0, 0, layer.shape.radius);
              shape.regX = 0;
              shape.regY = 0;
              shape.x = layer.shape.x;
              shape.y = layer.shape.y;
              shape.rotation = layer.shape.angle;
              this.exportStage.addChild(shape);
            }
            break;
          case 'ellipse':
            if (!shape) {
              shape = new createjs.Shape();
              shape.name = layer.title;
              shape.visible = layer.visible;
              shape.graphics.beginFill(layer.shape.fillColor);
              if (layer.shape.strokeStyle === 'dash') {
                shape.graphics.setStrokeDash([layer.shape.strokeWidth * 2, layer.shape.strokeWidth], 0);
              } else if (layer.shape.strokeStyle === 'dot') {
                shape.graphics.setStrokeDash([layer.shape.strokeWidth, layer.shape.strokeWidth], 0);
              } else {
                shape.graphics.setStrokeDash([0, 0], 0);
              }
              shape.graphics.setStrokeStyle(layer.shape.strokeWidth).beginStroke(layer.shape.strokeColor)
                .drawEllipse(0, 0, layer.shape.w, layer.shape.h);
              this.exportStage.addChild(shape);
            }
            shape.regX = layer.shape.w / 2;
            shape.regY = layer.shape.h / 2;
            shape.x = layer.shape.x + layer.shape.w / 2;
            shape.y = layer.shape.y + layer.shape.h / 2;
            shape.rotation = layer.shape.angle;
            break;
          case 'star':
            if (!shape) {
              shape = new createjs.Shape();
              shape.name = layer.title;
              shape.visible = layer.visible;
              shape.graphics.beginFill(layer.shape.fillColor);
              if (layer.shape.strokeStyle === 'dash') {
                shape.graphics.setStrokeDash([layer.shape.strokeWidth * 2, layer.shape.strokeWidth], 0);
              } else if (layer.shape.strokeStyle === 'dot') {
                shape.graphics.setStrokeDash([layer.shape.strokeWidth, layer.shape.strokeWidth], 0);
              } else {
                shape.graphics.setStrokeDash([0, 0], 0);
              }
              shape.graphics.setStrokeStyle(layer.shape.strokeWidth).beginStroke(layer.shape.strokeColor)
                .drawPolyStar(layer.shape.x, layer.shape.y,
                  layer.shape.radius, 5, layer.shape.pointSize, layer.shape.angle);
              this.exportStage.addChild(shape);
            }
            break;
          case 'template':
            if (!shape) {
              const AdobeAn = {};
              const templateScript = (templateRequire(`./${layer.shape.scriptName}`)).default;
              templateScript(createjs, AdobeAn);

              const key = Object.keys(AdobeAn.compositions)[0];
              const comp = AdobeAn.getComposition(key);
              const lib = comp.getLibrary();
              shape = new lib[layer.shape.entryPoint]();
              shape.name = layer.title;
              this.exportStage.addChild(shape);
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
        this.exportStage.update();
      }
    }

    const childrens = this.exportStage.children;
    for (let i = childrens.length - 1; i >= 0; i--) {
      for (let j = i - 1; j >= 0; j--) {
        const first = layers.findIndex((item) => item.shape && item.shape.name === childrens[i].name);
        const second = layers.findIndex((item) => item.shape && item.shape.name === childrens[j].name);
        if (first > second) {
          const temp = this.exportStage.children[i];
          childrens[i] = this.exportStage.children[j];
          childrens[j] = temp;
          this.exportStage.update();
        }
      }
    }
  };

  addTweens = () => {
    const { layers, maxTime, keyframes } = this.props;
    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      const shape = this.exportStage.getChildByName(layer.title);
      const layerKeyframes = keyframes.find((item) => item.layerId === layer.id).keyframes;
      if (shape && layer.shape.type !== 'template' && layerKeyframes) {
        createjs.Tween.removeTweens(shape);
        const tween = new createjs.Tween.get(shape);
        for (let j = 0; j < layerKeyframes.length; j++) {
          const keyFrame = layerKeyframes[j];
          const lastTimeVal = j ? layerKeyframes[j - 1].val : 0;
          if (keyFrame.type === 'wait') {
            tween.wait(keyFrame.val - lastTimeVal);
          } else if (keyFrame.type === 'to') {
            tween.to(keyFrame.data, keyFrame.val - lastTimeVal, createjs.Ease[keyFrame.data.anim]);
          }
        }
        tween.to({ visible: false, alpha: 0 }, 100)
          .wait(maxTime - layerKeyframes[layerKeyframes.length - 1].val - 100);
        tween.bounce = true;
        this.timeline.addTween(tween);
      } else if (layer.shape.type === 'template') {
        const tween = new createjs.Tween.get(shape, { override: true })
          .wait(layerKeyframes[layerKeyframes.length - 1].val);
        tween.to({ visible: false }, 10)
          .wait(maxTime - layerKeyframes[layerKeyframes.length - 1].val - 20)
          .to({ visible: true }, 10);
      }
    }
    this.timeline.gotoAndStop(0);
  };

  animate = () => {
    this.renderVideo();
    this.animationFrameHandler = requestAnimationFrame(this.animate);
  };

  renderVideo = () => {
    if (!this.capturer) return;
    const { frameNum } = this.state;
    this.setState({ frameNum: frameNum + 1 });
    this.capturer.capture(this.canvas);
  };

  startExport = () => {
    handleTickExport = createjs.Ticker.addEventListener('tick', this.handleTick);
    createjs.Ticker.paused = false;
    this.timeline.gotoAndPlay(0);
    this.exportStage.update();
    createjs.Ticker.framerate = 24;
    this.capturer = new CCapture({
      format: 'ffmpegserver',
      verbose: true,
      framerate: 24,
      onProgress: this.onProgress,
      extension: '.mp4',
    });

    this.capturer.start();
    this.animate();
    this.setState({ frameNum: 0, progress: 0 });
  };

  onExportClose = () => {
    createjs.Ticker.removeEventListener('tick', handleTickExport);
    if (this.capturer) {
      this.capturer.stop();
    }
    this.props.onClose();
    this.props.setExportMode(false);
  };

  onDownload = () => {
    this.setState({ url: '' });
    this.props.onClose();
    this.props.setExportMode(false);
  };

  render() {
    const { show, onClose, maxTime } = this.props;
    const { url, progress, frameNum } = this.state;
    return (
      <>
        <Modal
          className="export-video-modal"
          show={show}
          onClose={onClose}
          title="Export Video"
        >
          <div className="modal-body">
            <canvas id="canvas_export" className="canvas-export" width={1280} height={720} />
            <div>
              <Progress
                completed={
                  Math.floor((frameNum * 10000) / (3 * maxTime) > 100 ? 100 : (frameNum * 10000) / (3 * maxTime))
                }
              />
              <Progress completed={Math.floor(progress * 100)} />
            </div>
            <div className="modal-footer">
              {
                url && <a href={url} className="btn btn-success" onClick={this.onDownload} target="#">Download</a>
              }
              {
                !url
                && (
                  <button className="btn btn-primary btn-export" onClick={this.startExport}>
                    {
                      frameNum === 0 ? 'Export' : <CircularProgress size={18} color="inherit" />
                    }
                  </button>
                )
              }
              <button className="btn btn-danger" data-dismiss="modal" onClick={this.onExportClose}>Cancel</button>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

ExportVideoModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  layers: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyframes: PropTypes.arrayOf(PropTypes.object).isRequired,
  maxTime: PropTypes.number.isRequired,
  setExportMode: PropTypes.func.isRequired,
};

const mapStateToProps = ({ layer }) => ({
  layers: layer.layers,
  keyframes: layer.keyframes,
  maxTime: layer.maxTime,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setExportMode: TemplateAction.setExportMode,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(ExportVideoModal);
