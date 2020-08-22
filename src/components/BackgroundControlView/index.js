import React, { useState } from 'react';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TemplateAction from '../../store/actions/template.action';
import Input from '../common/Input';

const BackgroundControlView = ({ background, setTemplateBackground }) => {
  const [isShapeOpen, setIsShapeOpen] = useState(true);

  const mutateBackground = (data) => {
    setTemplateBackground(Object.assign(background, data));
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
              <Input
                type="color"
                name="back-color"
                value={background.color}
                onChange={(name, value) => mutateBackground({ color: value })}
              />
            </div>
            <div className="col-md-12 mb-2 d-flex align-items-center">
              <label className="mr-2">Back Image:</label>
              <Input
                type="file"
                name="back-image"
                value={background.image}
                onChange={(e) => mutateBackground({ image: e.target.value })}
              />
            </div>
            <div className="col-md-12 mb-2 d-flex align-items-center">
              <label className="mr-2">Visible:</label>
              <input
                type="checkbox"
                name="text"
                placeholder="Text"
                checked={background.show}
                onChange={(e) => mutateBackground({ show: e.target.checked })}
              />
            </div>
          </div>
        )
      }
    </>
  );
};

BackgroundControlView.propTypes = {
  setTemplateBackground: PropTypes.func.isRequired,
  background: PropTypes.object.isRequired,
};

const mapStateToProps = ({ template }) => ({
  background: template.property.background,
  curTemplate: template.curTemplate,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setTemplateProperty: TemplateAction.setTemplateProperty,
    setTemplateBackground: TemplateAction.setTemplateBackground,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundControlView);
