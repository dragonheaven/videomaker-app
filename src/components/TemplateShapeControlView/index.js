import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LayerAction from '../../store/actions/layer.action';
import Select from '../common/Select';

const TemplateShapeControlView = ({ curLayer, layers, setLayerData }) => {
  const [curShapeElementKey, setCurShapeElementKey] = useState();
  const [curShapeElement, setCurShapeElement] = useState();
  const [isShapeOpen, setIsShapeOpen] = useState(true);
  const [form, mutateForm] = useState();

  useEffect(() => {
    setCurShapeElementKey(null);
    setCurShapeElement(null);
    const layerData = layers.find((item) => item.id === curLayer);
    if (layerData) {
      mutateForm(layerData.shape);
    }
  }, [curLayer]);

  const onChangeCurShapeElementKey = (name, value) => {
    setCurShapeElementKey(value);
    setCurShapeElement(form.shapes[value]);
  };

  const mutateCurShapeElement = (data) => {
    if (!curShapeElementKey || !curShapeElement) return;
    const newShapeElement = { ...curShapeElement, ...data };
    setCurShapeElement(newShapeElement);
    const layerData = layers.find((item) => item.id === curLayer);
    setLayerData(curLayer, {
      shape: {
        ...layerData.shape,
        shapes: {
          ...layerData.shape.shapes,
          [curShapeElementKey]: newShapeElement,
        },
      },
    });
  };

  return (
    <>
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
            <div className="col-md-12 mb-2 d-flex align-items-center">
              <label className="mr-2">Elements:</label>
              <Select
                name="shape-elements"
                options={form ? Object.keys(form.shapes) : []}
                value={curShapeElementKey || ''}
                placeholder="Shape Element"
                editable
                onChange={onChangeCurShapeElementKey}
              />
            </div>
            <div className="col-md-12 mb-2 d-flex align-items-center">
              <label className="mr-2">Visible:</label>
              <input
                type="checkbox"
                name="text"
                placeholder="Text"
                checked={curShapeElement ? curShapeElement.visible : ''}
                onChange={(e) => mutateCurShapeElement({ visible: e.target.checked })}
              />
            </div>
          </div>
        )
      }
    </>
  );
};

TemplateShapeControlView.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(TemplateShapeControlView);
