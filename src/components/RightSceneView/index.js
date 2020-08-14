import React, { useEffect, useState } from 'react';

import './style.scss';
import HorizontalRuler from '../HorizontalRuler';
import TimeLineView from '../TimelineView';

const RightSceneView = () => {
  const [width, setWidth] = useState(0);

  const resizeRightSceneSize = () => {
    const rightbar = document.getElementById('right_sidebar');
    const w = window.innerWidth - rightbar.clientWidth - 280;
    setWidth(w);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeRightSceneSize);
  }, []);

  return (
    <div className="right-scene-view d-flex flex-column flex-grow-1" style={{ width }}>
      <div className="time-ruler-container d-flex flex-column justify-content-end">
        <HorizontalRuler count={1000} interval={10} />
      </div>
      <div className="flex-grow-1 timeline-content" style={{ width: 10000 }}>
      </div>
    </div>
  );
};

export default RightSceneView;
