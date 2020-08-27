import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CCapture from 'ccapture.js';
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
      isRendering: false,
    };
  }

  componentDidMount() {
    this.canvas = document.getElementById('canvas_export');
    this.exportStage = new window.createjs.Stage('canvas_export');
    this.timeline = new window.createjs.Timeline();
    this.frameNum = 0;
    this.drawLayers();
    this.addTweens();
    this.updateExportStage();
  }

  updateExportStage = () => {
    const { curTemplate, templateProperty } = this.props;
    const newExportRoot = this.exportStage.getChildByName(curTemplate.id);
    if (!newExportRoot) return;
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
    this.exportStage.update();
  };

  onProgress = () => {};

  handleTick = () => {
    const { maxTime } = this.props;

    if (!this.exportStage) return;
    if (this.timeline.position >= maxTime) {
      window.createjs.Ticker.removeEventListener('tick', handleTickExport);
      this.capturer.stop();
      this.capturer.save(this.showVideoLink);
      cancelAnimationFrame(this.animationFrameHandler);
    }
    this.exportStage.update();
  };

  showVideoLink = (url) => {
    const a = document.createElement('a');
    a.href = `${process.env.REACT_APP_VIDEO_API}${url}`;
    this.setState({ url: `${process.env.REACT_APP_VIDEO_API}${url}`, isRendering: false });
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
        const shape = this.exportStage.getChildByName(layer.title);
        if (!shape && layer.shape.type !== 'template') {
          const newShape = new window.createjs.Shape();
          newShape.visible = layer.visible;
          newShape.name = layer.title;
          if (layer.shape.type === 'circle') {
            newShape.graphics.beginFill(layer.shape.fillColor)
              .setStrokeStyle(layer.shape.strokeWidth).beginStroke(layer.shape.strokeColor)
              .drawCircle(layer.shape.x, layer.shape.y, layer.shape.radius);
          } else if (layer.shape.type === 'rect') {
            newShape.graphics.beginFill(layer.shape.fillColor)
              .setStrokeStyle(layer.shape.strokeWidth).beginStroke(layer.shape.strokeColor)
              .drawRect(layer.shape.x, layer.shape.y, layer.shape.w, layer.shape.h);
          } else if (layer.shape.type === 'ellipse') {
            newShape.graphics.beginFill(layer.shape.fillColor)
              .setStrokeStyle(layer.shape.strokeWidth).beginStroke(layer.shape.strokeColor)
              .drawEllipse(layer.shape.x, layer.shape.y, layer.shape.w, layer.shape.h);
          }
          this.exportStage.addChild(newShape);
        } else if (layer.shape.type !== 'template') {
          shape.visible = layer.visible;
          shape.graphics.command.x = layer.shape.x;
          shape.graphics.command.y = layer.shape.y;
          shape.graphics._fill.style = layer.shape.fillColor;
          shape.rotation = layer.shape.rotation;
          shape.graphics._strokeStyle.width = layer.shape.strokeWidth;
          shape.graphics._stroke.style = layer.shape.strokeColor;
          switch (layer.shape.type) {
            case 'circle':
              shape.graphics.command.radius = layer.shape.radius;
              break;
            case 'rect':
              shape.graphics.command.w = layer.shape.w;
              shape.graphics.command.h = layer.shape.h;
              break;
            default:
              break;
          }
        } else {
          const AdobeAn = {};
          const templateScript = (templateRequire(`./${this.props.curTemplate.scriptName}`)).default;
          templateScript(window.createjs, AdobeAn);

          const key = Object.keys(AdobeAn.compositions)[0];
          const comp = AdobeAn.getComposition(key);
          const lib = comp.getLibrary();
          const newExportRoot = new lib[this.props.curTemplate.entryPoint]();
          newExportRoot.name = this.props.curTemplate.id;
          this.exportStage.addChild(newExportRoot);
        }
        this.exportStage.update();
      }
    }

    // for (let i = 0; i < layers.length; i++) {
    //   const layer = layers[i];
    //   if (layer.shape && layer.shape.type) {
    //     let shape = this.exportStage.getChildByName(layer.title);
    //     switch (layer.shape.type) {
    //       case 'text':
    //         if (!shape) {
    //           shape = new window.createjs.Text(layer.shape.text,
    //             `${layer.shape.fontSize}px ${layer.shape.fontFamily}`, layer.shape.color);
    //           shape.x = layer.shape.x;
    //           shape.y = layer.shape.y;
    //           shape.name = layer.title;
    //           shape.visible = layer.visible;
    //           this.exportStage.addChild(shape);
    //         } else {
    //           shape.x = layer.shape.x;
    //           shape.y = layer.shape.y;
    //           shape.text = layer.shape.text;
    //           shape.font = `${layer.shape.fontSize}px ${layer.shape.fontFamily}`;
    //           shape.color = layer.shape.color;
    //         }
    //         break;
    //       case 'rect':
    //         if (!shape) {
    //           shape = new window.createjs.Shape();
    //           shape.name = layer.title;
    //           shape.visible = layer.visible;
    //           shape.graphics.beginFill(layer.shape.fillColor)
    //             .setStrokeStyle(layer.shape.strokeWidth).beginStroke(layer.shape.strokeColor)
    //             .drawRect(layer.shape.x, layer.shape.y, layer.shape.w, layer.shape.h);
    //           this.exportStage.addChild(shape);
    //         } else {
    //           shape.visible = layer.visible;
    //           shape.graphics.command.x = layer.shape.x;
    //           shape.graphics.command.y = layer.shape.y;
    //           shape.graphics._fill.style = layer.shape.fillColor;
    //           shape.graphics._stroke.style = layer.shape.strokeColor;
    //           if (shape.graphics._strokeStyle) {
    //             shape.graphics._strokeStyle.width = layer.shape.strokeWidth;
    //           }
    //
    //           shape.graphics.command.w = layer.shape.w;
    //           shape.graphics.command.h = layer.shape.h;
    //           shape.rotation = layer.shape.angle;
    //         }
    //         break;
    //       case 'circle':
    //         if (!shape) {
    //           shape = new window.createjs.Shape();
    //           shape.name = layer.title;
    //           shape.visible = layer.visible;
    //           shape.graphics.beginFill(layer.shape.fillColor)
    //             .setStrokeStyle(layer.shape.strokeWidth).beginStroke(layer.shape.strokeColor)
    //             .drawCircle(layer.shape.x, layer.shape.y, layer.shape.radius);
    //           this.exportStage.addChild(shape);
    //         } else {
    //           shape.visible = layer.visible;
    //           shape.graphics.command.x = layer.shape.x;
    //           shape.graphics.command.y = layer.shape.y;
    //           shape.graphics._fill.style = layer.shape.fillColor;
    //           shape.graphics._stroke.style = layer.shape.strokeColor;
    //           if (shape.graphics._strokeStyle) {
    //             shape.graphics._strokeStyle.width = layer.shape.strokeWidth;
    //           }
    //
    //           shape.graphics.command.radius = layer.shape.radius;
    //           shape.rotation = layer.shape.angle;
    //         }
    //         break;
    //       case 'ellipse':
    //         if (!shape) {
    //           shape = new window.createjs.Shape();
    //           shape.name = layer.title;
    //           shape.visible = layer.visible;
    //           shape.graphics.beginFill(layer.shape.fillColor)
    //             .setStrokeStyle(layer.shape.strokeWidth).beginStroke(layer.shape.strokeColor)
    //             .drawEllipse(layer.shape.x, layer.shape.y, layer.shape.w, layer.shape.h);
    //           this.exportStage.addChild(shape);
    //         } else {
    //           shape.visible = layer.visible;
    //           shape.graphics.command.x = layer.shape.x;
    //           shape.graphics.command.y = layer.shape.y;
    //           shape.graphics._fill.style = layer.shape.fillColor;
    //           shape.graphics._stroke.style = layer.shape.strokeColor;
    //           if (shape.graphics._strokeStyle) {
    //             shape.graphics._strokeStyle.width = layer.shape.strokeWidth;
    //           }
    //
    //           shape.graphics.command.w = layer.shape.w;
    //           shape.graphics.command.h = layer.shape.h;
    //           shape.rotation = layer.shape.angle;
    //         }
    //         break;
    //       case 'star':
    //         if (!shape) {
    //           shape = new window.createjs.Shape();
    //           shape.name = layer.title;
    //           shape.visible = layer.visible;
    //           shape.graphics.beginFill(layer.shape.fillColor)
    //             .setStrokeStyle(layer.shape.strokeWidth).beginStroke(layer.shape.strokeColor)
    //             .drawPolyStar(layer.shape.x, layer.shape.y,
    //               layer.shape.radius, 5, layer.shape.pointSize, layer.shape.angle);
    //           this.exportStage.addChild(shape);
    //         } else {
    //           shape.visible = layer.visible;
    //           shape.graphics.command.x = layer.shape.x;
    //           shape.graphics.command.y = layer.shape.y;
    //           shape.graphics._fill.style = layer.shape.fillColor;
    //           shape.graphics._stroke.style = layer.shape.strokeColor;
    //           if (shape.graphics._strokeStyle) {
    //             shape.graphics._strokeStyle.width = layer.shape.strokeWidth;
    //           }
    //
    //           shape.graphics.command.radius = layer.shape.radius;
    //           shape.graphics.command.pointSize = layer.shape.pointSize;
    //           shape.graphics.command.angle = layer.shape.angle;
    //         }
    //         break;
    //       case 'template':
    //         const AdobeAn = {};
    //         const templateScript = (templateRequire(`./${this.props.curTemplate.scriptName}`)).default;
    //         templateScript(window.createjs, AdobeAn);
    //
    //         const key = Object.keys(AdobeAn.compositions)[0];
    //         const comp = AdobeAn.getComposition(key);
    //         const lib = comp.getLibrary();
    //         const newExportRoot = new lib[this.props.curTemplate.entryPoint]();
    //         newExportRoot.name = this.props.curTemplate.id;
    //         this.exportStage.addChild(newExportRoot);
    //         break;
    //       default:
    //         break;
    //     }
    //     this.exportStage.update();
    //   }
    // }

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
    const { layers } = this.props;
    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      const shape = this.exportStage.getChildByName(layer.title);
      if (shape && layer.shape.type !== 'template') {
        window.createjs.Tween.removeTweens(shape);
        const tween = new window.createjs.Tween.get(shape);
        for (let j = 0; j < layer.keyframes.length; j++) {
          const keyFrame = layer.keyframes[j];
          const lastTimeVal = j ? layer.keyframes[j - 1].val : 0;
          if (keyFrame.type === 'wait') {
            tween.wait(keyFrame.val - lastTimeVal);
          } else if (keyFrame.type === 'to') {
            tween.to(keyFrame.data, keyFrame.val - lastTimeVal, window.createjs.Ease[keyFrame.data.anim]);
          }
        }
        this.timeline.addTween(tween);
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
    this.capturer.capture(this.canvas);
  };

  startExport = () => {
    handleTickExport = window.createjs.Ticker.addEventListener('tick', this.handleTick);
    window.createjs.Ticker.paused = false;
    this.timeline.gotoAndPlay(0);
    this.exportStage.update();

    this.capturer = new CCapture({
      format: 'ffmpegserver',
      verbose: true,
      framerate: 24,
      onProgress: this.onProgress,
      extension: '.mp4',
    });

    this.capturer.start();
    this.animate();
    this.setState({ isRendering: true });
  };

  onExportClose = () => {
    window.createjs.Ticker.removeEventListener('tick', handleTickExport);
    // this.capturer = null;
    this.props.onClose();
    this.props.setExportMode(false);
  };

  onDownload = () => {
    this.setState({ url: '' });
  };

  render() {
    const { show, onClose } = this.props;
    const { isRendering, url } = this.state;
    return (
      <>
        <Modal
          className="export-video-modal"
          show={show}
          onClose={onClose}
          title="Export Video"
        >
          <div className="modal-body">
            <canvas id="canvas_export" width={1280} height={720} style={{ display: 'none' }} />
          </div>
          <div>
            {
              isRendering && <CircularProgress />
            }
          </div>
          <div className="modal-footer">
            {
              url && <a href={url} className="btn btn-success" onClick={this.onDownload} target="#">Download</a>
            }
            <button className="btn btn-primary" onClick={this.startExport}>Export</button>
            <button className="btn btn-danger" data-dismiss="modal" onClick={this.onExportClose}>Cancel</button>
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
  maxTime: PropTypes.number.isRequired,
  curTemplate: PropTypes.object.isRequired,
  templateProperty: PropTypes.object.isRequired,
  setExportMode: PropTypes.func.isRequired,
};

const mapStateToProps = ({ layer, stage, template }) => ({
  layers: layer.layers,
  maxTime: layer.maxTime,
  exportRoot: stage.exportRoot,
  curTemplate: template.curTemplate,
  templateProperty: template.property,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setExportMode: TemplateAction.setExportMode,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(ExportVideoModal);
