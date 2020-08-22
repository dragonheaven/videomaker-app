import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './style.scss';
import TemplateView from '../TemplatePropertyView';

const RightSideBar = () => (
  <div id="right_sidebar" className="right-sidebar">
    <TemplateView />
  </div>
);

RightSideBar.propTypes = {
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(RightSideBar);
