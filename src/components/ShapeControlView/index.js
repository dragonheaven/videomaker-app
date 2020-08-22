import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TemplateAction from '../../store/actions/template.action';
import Select from '../common/Select';

const ShapeControlView = ({ curProperty, curTemplate, setTemplateProperty }) => {
  const [curShapeElementKey, setCurShapeElementKey] = useState();
  const [curShapeElement, setCurShapeElement] = useState();
  const [isShapeOpen, setIsShapeOpen] = useState(true);

  useEffect(() => {
    setCurShapeElementKey(null);
    setCurShapeElement(null);
  }, [curTemplate]);

  const onChangeCurShapeElementKey = (name, value) => {
    setCurShapeElementKey(value);
    setCurShapeElement(curProperty.shapes[value]);
  };

  const mutateCurShapeElement = (data) => {
    if (!curShapeElementKey || !curShapeElement) return;
    const newShapeElement = { ...curShapeElement, ...data };
    setCurShapeElement(newShapeElement);
    setTemplateProperty({
      ...curProperty,
      shapes: { ...curProperty.shapes, [curShapeElementKey]: newShapeElement },
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
                options={Object.keys(curProperty.shapes)}
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

ShapeControlView.propTypes = {
  curProperty: PropTypes.object.isRequired,
  curTemplate: PropTypes.object.isRequired,
  setTemplateProperty: PropTypes.func.isRequired,
};

const mapStateToProps = ({ template }) => ({
  curProperty: template.property,
  curTemplate: template.curTemplate,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setTemplateProperty: TemplateAction.setTemplateProperty,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(ShapeControlView);
