import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import AnimationView from '../../components/AnimationView';
import RightSideBar from '../../components/RightSideBar';
import SceneView from '../../components/SceneView';
import HorizontalRuler from '../../components/HorizontalRuler';
import VerticalRuler from '../../components/VerticalRuler';
import TopView from '../../components/TopView';

function Home({ animationViewSize }) {
  return (
    <div className="home d-flex">
      <div className="flex-grow-1 d-flex flex-column position-relative">
        <TopView />
        <HorizontalRuler
          interval={5}
          count={animationViewSize.width / 5}
          startPos={20}
        />
        <div className="d-flex flex-grow-1">
          <VerticalRuler count={animationViewSize.height / 5} />
          <AnimationView />
        </div>
        <SceneView />
      </div>
      <RightSideBar />
    </div>
  );
}

Home.propTypes = {
  animationViewSize: PropTypes.object.isRequired,
};

Home.defaultProps = {};

const mapStateToProps = ({ template }) => ({
  animationViewSize: template.animationViewSize,
});

export default connect(mapStateToProps)(Home);
