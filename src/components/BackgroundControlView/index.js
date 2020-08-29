import React, {useEffect, useState} from 'react';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LayerAction from '../../store/actions/layer.action';
import ColorPicker from '../common/ColorPicker';

const BackgroundControlView = ({ curLayer, layers, setLayerData }) => {
  const [isShapeOpen, setIsShapeOpen] = useState(true);
  const [background, setBackground] = useState();

  useEffect(() => {
    const layerData = layers.find((item) => item.id === curLayer);
    if (layerData) {
      setBackground(layerData.shape.background);
    }
  }, [curLayer]);

  const mutateBackground = (color) => {
    setBackground(color);
    const layerData = layers.find((item) => item.id === curLayer);
    setLayerData(curLayer, {
      shape: {
        ...layerData.shape,
        background: color,
      },
    });
  };

  return (
    <>
      <div className="col-md-12" onClick={() => setIsShapeOpen(!isShapeOpen)}>
        <label className="d-flex align-items-center justify-content-between text-white sub-title">
          Background
          { isShapeOpen ? <Icon.ChevronDown /> : <Icon.ChevronLeft />}
        </label>
      </div>
      {
        isShapeOpen
        && (
          <div className="form-group">
            <div className="col-md-12 mb-2 d-flex align-items-center">
              <label className="mr-2">Back Color:</label>
              <ColorPicker
                color={background}
                setColor={(color) => mutateBackground(color)}
              />
            </div>
            {/*<div className="col-md-12 mb-2 d-flex align-items-center">*/}
            {/*  <label className="mr-2">Visible:</label>*/}
            {/*  <input*/}
            {/*    type="checkbox"*/}
            {/*    name="text"*/}
            {/*    placeholder="Text"*/}
            {/*    checked={background.show ? background.show : false}*/}
            {/*    onChange={(e) => mutateBackground({ show: e.target.checked })}*/}
            {/*  />*/}
            {/*</div>*/}
          </div>
        )
      }
    </>
  );
};

BackgroundControlView.propTypes = {
  setLayerData: PropTypes.func.isRequired,
  curLayer: PropTypes.number.isRequired,
  layers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ template, layer }) => ({
  curTemplate: template.curTemplate,
  curLayer: layer.curLayer,
  layers: layer.layers,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setLayerData: LayerAction.setLayerData,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundControlView);
