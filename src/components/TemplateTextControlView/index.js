import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';

import Select from '../common/Select';
import Input from '../common/Input';
import * as LayerAction from '../../store/actions/layer.action';
import ColorPicker from '../common/ColorPicker';

const textAligns = ['left', 'center', 'right'];
const verticalAligns = ['top', 'center', 'bottom'];
export const fontSizes = ['10', '12', '15', '18', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '75',
  '80', '85', '90', '95', '100', '110', '120', '130', '150', '175', '200', '225', '250'];
export const fontFamilies = ['Arial', 'Arvo Regular', 'Arvo Bold', 'Bebas Neue', 'Bree Serif',
  'Chunkfive', 'Sans-serif', 'serif', 'cursive'];

const TemplateTextControlView = ({ curLayer, layers, setLayerData }) => {
  const [curTextElementKey, setCurTextElementKey] = useState();
  const [curTextElement, setCurTextElement] = useState();
  const [isTextOpen, setIsTextOpen] = useState(true);
  const [form, mutateForm] = useState();

  useEffect(() => {
    setCurTextElementKey(null);
    setCurTextElement(null);
    const layerData = layers.find((item) => item.id === curLayer);
    if (layerData) {
      mutateForm(layerData.shape);
    }
  }, [curLayer]);

  const onChangeCurTextElementKey = (name, value) => {
    setCurTextElementKey(value);
    setCurTextElement(form.texts[value]);
  };

  const mutateCurTextElement = (data) => {
    if (!curTextElementKey || !curTextElement) return;
    const newTextElement = { ...curTextElement, ...data };
    setCurTextElement(newTextElement);
    const layerData = layers.find((item) => item.id === curLayer);
    setLayerData(curLayer, {
      shape: {
        ...layerData.shape,
        texts: {
          ...layerData.shape.texts,
          [curTextElementKey]: newTextElement,
        },
      },
    });
  };

  const splitFont = (fontString) => {
    const fontElements = fontString.split(' ');
    let fontSize;
    do {
      fontSize = fontElements.shift();
    } while (fontSize.indexOf('px') === -1);
    const fontFamily = fontElements.join(' ');
    return { fontSize, fontFamily };
  };

  const mergeFont = (fontString, fontSize, fontFamily) => {
    const fontWeight = fontString.split(' ').shift();
    if (fontWeight.indexOf('px') !== -1) return `${fontSize} ${fontFamily}`;
    return `${fontWeight} ${fontSize} ${fontFamily}`;
  };

  const onFontChange = (name, value) => {
    if (!curTextElementKey || !curTextElement) return;
    let { fontSize, fontFamily } = splitFont(curTextElement.font);

    switch (name) {
      case 'font-family':
        fontFamily = `'${value}'`;
        break;
      case 'font-size':
        fontSize = `${value}px`;
        break;
      default:
        return;
    }
    mutateCurTextElement({ font: mergeFont(curTextElement.font, fontSize, fontFamily) });
  };

  const { fontSize, fontFamily } = curTextElement ? splitFont(curTextElement.font) : { };

  return (
    <>
      <div className="col-md-12" onClick={() => setIsTextOpen(!isTextOpen)}>
        <label className="d-flex align-items-center justify-content-between text-white sub-title">
          Texts
          { isTextOpen ? <Icon.ChevronDown /> : <Icon.ChevronLeft />}
        </label>
      </div>
      {
        isTextOpen && (
          <div className="form-group">
            <div className="col-md-12 mb-2 d-flex align-items-center">
              <label className="mr-2">Elements:</label>
              <Select
                name="text-elements"
                options={form ? Object.keys(form.texts) : []}
                value={curTextElementKey || ''}
                placeholder="Text Element"
                editable
                onChange={onChangeCurTextElementKey}
              />
            </div>
            <div className="col-md-12 mb-2 d-flex align-items-center">
              <label className="mr-2">Text:</label>
              <Input
                name="text"
                placeholder="Text"
                value={curTextElement ? curTextElement.text : ''}
                onChange={(name, text) => mutateCurTextElement({ text })}
              />
            </div>
            <div className="col-md-12 mb-2 d-flex align-items-center">
              <label className="mr-2">Font Family:</label>
              <Select
                name="font-family"
                options={fontFamilies}
                placeholder="Font family"
                value={fontFamily}
                editable
                onChange={onFontChange}
              />
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 mb-2">
                  <label>TextSize:</label>
                  <Select
                    name="font-size"
                    options={fontSizes}
                    value={fontSize}
                    editable
                    onChange={onFontChange}
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <label>TextColor:</label>
                  <ColorPicker
                    color={curTextElement ? curTextElement.color : '#000'}
                    setColor={(color) => mutateCurTextElement({ color })}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 mb-2">
                  <label>TextAlign:</label>
                  <Select
                    name="text-align"
                    options={textAligns}
                    value={curTextElement ? curTextElement.textAlign : ''}
                    editable
                    onChange={(name, value) => mutateCurTextElement({ textAlign: value })}
                  />
                </div>
                <div className="col-md-6 mb-2">
                  <label>VerticalAlign:</label>
                  <Select
                    name="vertical-align"
                    options={verticalAligns}
                    value={curTextElement ? curTextElement.textBaseline : ''}
                    editable
                    onChange={(name, value) => mutateCurTextElement({ textBaseline: value })}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-8">
                  <label>Position:</label>
                  <div className="row">
                    <div className="col-md-6">
                      <Input
                        type="number"
                        name="position-x"
                        placeholder="X"
                        value={curTextElement ? curTextElement.x : ''}
                        onChange={(name, value) => mutateCurTextElement({ x: value })}
                      />
                    </div>
                    <div className="col-md-6">
                      <Input
                        type="number"
                        name="position-y"
                        placeholder="Y"
                        value={curTextElement ? curTextElement.y : ''}
                        onChange={(name, value) => mutateCurTextElement({ y: value })}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <label style={{ minWidth: 'initial' }}>Rotation:</label>
                  <Input
                    type="number"
                    name="rotation"
                    placeholder="angle"
                    value={curTextElement ? curTextElement.rotation : ''}
                    onChange={(name, value) => mutateCurTextElement({ rotation: value })}
                  />
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

TemplateTextControlView.propTypes = {
  curLayer: PropTypes.number.isRequired,
  setLayerData: PropTypes.func.isRequired,
  layers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ layer }) => ({
  curLayer: layer.curLayer,
  layers: layer.layers,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setLayerData: LayerAction.setLayerData,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(TemplateTextControlView);
