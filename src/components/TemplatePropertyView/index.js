import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as TemplateAction from '../../store/actions/template.action';
import './style.scss';
import Select from '../common/Select';
import TemplateTextControlView from '../TemplateTextControlView';
import TemplateShapeControlView from '../TemplateShapeControlView';
import BackgroundControlView from '../BackgroundControlView';

const TemplatePropertyView = ({
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
    <div id="template_view" className="template-view">
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
        <TemplateTextControlView />
        <hr className="divider" />
        <TemplateShapeControlView />
        <hr className="divider" />
        <BackgroundControlView />
      </div>
    </div>
  );
};

TemplatePropertyView.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(TemplatePropertyView);
