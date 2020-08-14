import React, { useEffect, useState } from 'react';
import { Timeline } from '../../lib/animation-timeline';

import './style.scss';

const TimeLineView = () => {
  const [timeline, setTimeline] = useState();

  const onScrollChange = (obj) => {
    if (!timeline) return;
    const options = timeline.getOptions();
    const outlineContainer = document.getElementById('outline-container');

    if (options) {
      if (outlineContainer) {
        outlineContainer.style.minHeight = `${obj.scrollHeight}px`;
        document.getElementById('outline-scroll-container').scrollTop = obj.scrollTop;
      }
    }
  };

  useEffect(() => {
    const newTimeline = new Timeline();
    setTimeline(newTimeline);

    const rows = [
      {
        selected: false,
        draggable: false,

        keyframes: [
          {
            val: 40,
            shape: 'rhomb',
          },
          {
            shape: 'rhomb',
            val: 3000,
            selected: false,
          },
        ],
      },
      {
        selected: false,
        hidden: false,
        keyframes: [
          {
            cursor: 'default',
            val: 2000,
          },
          {
            val: 2500,
          },
          {
            val: 2600,
          },
        ],
      },
      {
        hidden: false,
        keyframes: [
          {
            val: 1000,
          },
          {
            val: 1500,
          },
          {
            val: 2000,
          },
        ],
      },
      {
        title: 'Groups (Limited)',
        keyframes: [
          {
            val: 40,
            max: 850,
            group: 'a',
          },
          {
            val: 800,
            max: 900,
            group: 'a',
          },
          {
            min: 1000,
            max: 3400,
            val: 1900,
            group: 'b',
          },
          {
            val: 3000,
            max: 3500,
            group: 'b',
          },
          {
            min: 3500,
            val: 4000,
            group: 'c',
          },
        ],
      },
      {
        keyframes: [
          {
            val: 100,
          },
          {
            val: 3410,
          },
          {
            val: 2000,
          },
        ],
      },
      {
        title: 'Style Customized',
        groupHeight: 20,
        keyframesStyle: {
          shape: 'rect',
          width: 5,
          height: 20,
        },
        keyframes: [
          {
            val: 90,
          },
          {
            val: 3000,
          },
        ],
      }, {

      }, {
        title: 'Max Value',
        max: 4000,
        keyframes: [
          {
            width: 4,
            height: 20,
            group: 'block',
            shape: 'rect',
            fillColor: 'Red',
            strokeColor: 'Black',
            val: 4000,
            selectable: false,
            draggable: false,
          },
          {
            val: 1500,
          },
          {
            val: 2500,
          },
        ],
      }, {}, {}, {}, {}, {}, {}, {},
    ];
    const outlineContainer = document.getElementById('outline-container');

    newTimeline.initialize({ id: 'timeline', headerHeight: 45 });
    newTimeline.setModel({ rows });
    newTimeline.onTimeChanged((event) => {
      console.log('onTimeChanged', event);
    });
    newTimeline.onScroll(onScrollChange);

    const options = newTimeline.getOptions();
    const headerElement = document.getElementById('outline-header');
    headerElement.style.maxHeight = `${options.headerHeight}px`;
    headerElement.style.minHeight = `${options.headerHeight}px`;

    rows.forEach((obj, index) => {
      const div = document.createElement('div');
      div.classList.add('outline-node');
      div.style.maxHeight = `${options.rowsStyle.height}px`;
      div.style.minHeight = `${options.rowsStyle.height}px`;
      div.style.marginBottom = `${options.rowsStyle.marginBottom}px`;
      div.innerText = obj.title || `Track ${index}`;
      outlineContainer.appendChild(div);
    });
  }, [onScrollChange]);

  return (
    <div className="timeline-container flex-grow-1">
      <div className="outline">
        <div className="outline-header" id="outline-header" />
        <div
          className="outline-scroll-container"
          id="outline-scroll-container"
        >
          <div className="outline-items" id="outline-container" />
        </div>
      </div>
      <div id="timeline" className="timeline" />
    </div>
  );
};

export default TimeLineView;
