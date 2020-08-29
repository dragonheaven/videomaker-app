import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './style.scss';
import TemplateTextControlView from '../TemplateTextControlView';
import TemplateShapeControlView from '../TemplateShapeControlView';
import BackgroundControlView from '../BackgroundControlView';

const TemplatePropertyView = () => (
  <div id="template_view" className="template-view">
    <div className="d-flex row flex-column">
      <div className="col-md-12 mb-2">
        <label className="text-white sub-title">Template Property:</label>
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

TemplatePropertyView.propTypes = {
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(TemplatePropertyView);
