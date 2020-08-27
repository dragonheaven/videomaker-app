import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import TemplatePropertyView from '../TemplatePropertyView';
import * as TabActions from '../../store/actions/tab.action';
import ShapeControlView from '../ShapeControlView';

const RightSideBar = ({ setRightSidebarTabIndex, tabIndex, curLayer, layers }) => {
  useEffect(() => {
    const form = layers.find((item) => item.id === curLayer);
    if (!form || !form.shape || form.shape.type === 'template') {
      setRightSidebarTabIndex(0);
    } else {
      setRightSidebarTabIndex(1);
    }
  }, [curLayer]);

  return (
    <div id="right_sidebar" className="right-sidebar">
      <div className="tabs d-flex">
        <div
          className={`tab ${tabIndex === 0 ? 'active' : ''}`}
          onClick={() => setRightSidebarTabIndex(0)}
        >
          Template
        </div>
        <div
          className={`tab ${tabIndex === 1 ? 'active' : ''}`}
          onClick={() => setRightSidebarTabIndex(1)}
        >
          Shapes
        </div>
      </div>
      <div className="content-view">
        {
          tabIndex === 0 && <TemplatePropertyView />
        }
        {
          tabIndex === 1 && <ShapeControlView />
        }
      </div>
    </div>
  );
};

RightSideBar.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  setRightSidebarTabIndex: PropTypes.func.isRequired,
  curLayer: PropTypes.number.isRequired,
  layers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ tab, layer }) => ({
  tabIndex: tab.rightSidebarTabIndex,
  curLayer: layer.curLayer,
  layers: layer.layers,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setRightSidebarTabIndex: TabActions.setRightSidebarTabIndex,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(RightSideBar);
