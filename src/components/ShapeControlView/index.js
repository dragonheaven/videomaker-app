import React, { useState } from 'react';
import * as Icon from 'react-feather';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as LayerAction from '../../store/actions/layer.action';
import { fontFamilies, fontSizes } from '../TemplateTextControlView';
import Input from '../common/Input';
import Select from '../common/Select';
import ColorPicker from '../common/ColorPicker';
import './style.scss';

const ShapeControlView = ({ curLayer, layers, setLayerData }) => {
  const [isShapeOpen, setIsShapeOpen] = useState(true);

  const form = layers.find((item) => item.id === curLayer);

  const mutateShape = (data) => {
    if (!form) return;
    setLayerData(curLayer, { shape: { ...form.shape, ...data } });
  };

  return (
    <div className="shape-control-view row">
      <div className="col-md-12" onClick={() => setIsShapeOpen(!isShapeOpen)}>
        <label className="d-flex align-items-center justify-content-between text-white sub-title">
          Shapes
          { isShapeOpen ? <Icon.ChevronDown /> : <Icon.ChevronLeft />}
        </label>
      </div>
      {
        isShapeOpen
        && (
          <div className="form-group">
            <hr className="divider" />
            <div className="col-md-12 mb-2">
              <label>Position:</label>
              <div className="row">
                <div className="col-md-6">
                  <Input
                    type="number"
                    name="position-x"
                    placeholder="X"
                    value={form ? form.shape.x : 0}
                    onChange={(name, value) => mutateShape({ x: parseInt(value, 10) })}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    type="number"
                    name="position-y"
                    placeholder="Y"
                    value={form ? form.shape.y : 0}
                    onChange={(name, value) => mutateShape({ y: parseInt(value, 10) })}
                  />
                </div>
              </div>
            </div>
            {
              form && form.shape && (form.shape.type === 'rect' || form.shape.type === 'ellipse')
              && (
                <div className="col-md-12 mb-2">
                  <label>Size:</label>
                  <div className="row">
                    <div className="col-md-6">
                      <Input
                        type="number"
                        name="width"
                        placeholder="Width"
                        value={form.shape.w}
                        onChange={(name, value) => mutateShape({ w: parseInt(value, 10) })}
                      />
                    </div>
                    <div className="col-md-6">
                      <Input
                        type="number"
                        name="height"
                        placeholder="Height"
                        value={form.shape.h}
                        onChange={(name, value) => mutateShape({ h: parseInt(value, 10) })}
                      />
                    </div>
                  </div>
                </div>
              )
            }
            {
              form && form.shape && (form.shape.type === 'text')
              && (
                <>
                  <div className="col-md-12 mb-2 mt-4 d-flex align-items-center">
                    <label className="mr-2">Text:</label>
                    <Input
                      type="text"
                      name="text"
                      value={form.shape.text}
                      onChange={(name, value) => mutateShape({ text: value })}
                    />
                  </div>
                  <div className="col-md-12 mb-2 mt-4 d-flex align-items-center">
                    <label className="mr-2">FontSize:</label>
                    <Select
                      name="font-size"
                      options={fontSizes}
                      value={form.shape.fontSize}
                      editable
                      onChange={(name, value) => mutateShape({ fontSize: value })}
                    />
                  </div>
                  <div className="col-md-12 mb-2 mt-4 d-flex align-items-center">
                    <label className="mr-2">Font Family:</label>
                    <Select
                      name="font-family"
                      options={fontFamilies}
                      placeholder="Font family"
                      value={form.shape.fontFamily}
                      editable
                      onChange={(name, value) => mutateShape({ fontFamily: value })}
                    />
                  </div>
                  <div className="col-md-12 mb-2 mt-4 d-flex align-items-center">
                    <label className="mr-2">Font Color:</label>
                    <ColorPicker
                      color={form && form.shape ? form.shape.color : '#000'}
                      setColor={(color) => mutateShape({ color })}
                    />
                  </div>

                </>
              )
            }
            {
              form && form.shape && (form.shape.type === 'circle' || form.shape.type === 'star')
              && (
                <div className="col-md-12 mb-2 mt-4 d-flex align-items-center">
                  <label className="mr-2">Radius:</label>
                  <Input
                    type="number"
                    name="radius"
                    value={form.shape.radius}
                    onChange={(name, value) => mutateShape({ radius: parseInt(value, 10) })}
                  />
                </div>
              )
            }
            {
              form && form.shape
              && (
                <div className="col-md-12 mb-2 mt-4 d-flex align-items-center">
                  <label className="mr-2">Angle:</label>
                  <Input
                    name="angle"
                    type="number"
                    placeholder="Angle"
                    value={form && form.shape && form.shape.angle ? form.shape.angle : 0}
                    onChange={(name, value) => mutateShape({ angle: parseInt(value, 10) })}
                  />
                </div>
              )
            }
            {
              form && form.shape && (form.shape.type !== 'text')
              && (
                <>
                  <div className="col-md-12 mb-2 mt-4 d-flex align-items-center">
                    <label className="mr-2">Fill:</label>
                    <ColorPicker
                      color={form && form.shape ? form.shape.fillColor : '#000'}
                      setColor={(color) => mutateShape({ fillColor: color })}
                    />
                  </div>
                  <div className="col-md-12 mb-2">
                    <label>Stroke:</label>
                    <div className="row">
                      <div className="col-md-4">
                        <Select
                          name="text-elements"
                          options={['solid', 'dash', 'dot']}
                          value={form && form.shape ? form.shape.strokeStyle : ''}
                          editable
                          onChange={(name, value) => mutateShape({ strokeStyle: value })}
                        />
                      </div>
                      <div className="col-md-4">
                        <Input
                          type="number"
                          name="stroke-width"
                          value={form && form.shape ? form.shape.strokeWidth : ''}
                          onChange={(name, value) => mutateShape({ strokeWidth: parseInt(value, 10) })}
                        />
                      </div>
                      <div className="col-md-4">
                        <ColorPicker
                          color={form && form.shape ? form.shape.strokeColor : '#000'}
                          setColor={(color) => mutateShape({ strokeColor: color })}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          </div>
        )
      }
    </div>
  );
};

ShapeControlView.propTypes = {
  curLayer: PropTypes.number.isRequired,
  setLayerData: PropTypes.func.isRequired,
  layers: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = ({ template, layer }) => ({
  curProperty: template.property,
  curTemplate: template.curTemplate,
  curLayer: layer.curLayer,
  layers: layer.layers,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setCurLayer: LayerAction.setCurLayer,
    setLayerData: LayerAction.setLayerData,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(ShapeControlView);
