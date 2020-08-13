import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as TemplateAction from '../../store/actions/template.action';
import './style.scss';
import Select from '../common/Select';
import TextControlView from '../TextControlView';
import ShapeControlView from '../ShapeControlView';

const RightSideBar = ({
  templates,
  curTemplate,
  setCurTemplate,
}) => {
  const [curTemplateId, setCurTemplateId] = useState();

  useEffect(() => {
    setCurTemplateId(curTemplate.id);
  }, [curTemplate]);

  const onChangeCurTemplate = (name, value) => {
    setCurTemplateId(value);
    const template = templates.find((item) => item.id === value);
    setCurTemplate(template);
  };

  return (
    <div id="right_sidebar" className="right-sidebar">
      <div className="d-flex row flex-column">
        <div className="col-md-12 mb-2">
          <label className="text-white sub-title">Templates:</label>
          <Select
            name="template"
            options={templates.map((item) => item.id)}
            value={curTemplateId}
            placeholder="Templates"
            editable
            onChange={onChangeCurTemplate}
          />
        </div>

        <hr className="divider" />
        <TextControlView />
        <hr className="divider" />
        <ShapeControlView />
      </div>
    </div>
  );
};

RightSideBar.propTypes = {
  templates: PropTypes.arrayOf(PropTypes.object).isRequired,
  curTemplate: PropTypes.object.isRequired,
  setCurTemplate: PropTypes.func.isRequired,
};

const mapStateToProps = ({ template }) => ({
  curProperty: template.property,
  templates: template.templates,
  curTemplate: template.curTemplate,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setTemplateProperty: TemplateAction.setTemplateProperty,
    setCurTemplate: TemplateAction.setCurTemplate,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(RightSideBar);
