import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';

import { Timeline } from '../../lib/animation-timeline';

import './style.scss';

const TimeLineView = () => {
  const [timeline, setTimeline] = useState();
  const [layers, setLayers] = useState([]);

  const onScrollChange = (obj) => {
    if (!timeline) return;
    const options = timeline.getOptions();
    const outlineContainer = document.getElementById('outline-container');

    if (options) {
      if (outlineContainer) {
        outlineContainer.style.minHeight = `${obj.scrollHeight}px`;
        const scrollContainer = document.getElementById('outline-scroll-container');
        scrollContainer.style.overflow = 'hidden';
        scrollContainer.scrollTop = obj.scrollTop;
        console.log(scrollContainer.style, obj.scrollTop, scrollContainer.scrollTop);
      }
    }
  };

  useEffect(() => {
    const newTimeline = new Timeline();
    setTimeline(newTimeline);
  }, []);

  useEffect(() => {
    if (!timeline) return;
    const rows = [
      {
        selected: false,
        draggable: false,
        locked: true,
        hidden: true,

        keyframes: [
          {
            val: 40,
          },
          {
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
        hidden: true,
        locked: true,
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
        locked: true,
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
        locked: true,
        title: 'Style Customized',
        keyframesStyle: {
          width: 5,
          strokeColor: 'red',
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
        locked: true,
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
            strokeColor: 'red',
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
      }, {}, {}, {}, {}, {}, {},
    ];
    setLayers(rows);

    timeline.initialize({
      id: 'timeline',
      headerHeight: 45,
      headerFillColor: '#282828',
      fillColor: '#2A2A2A',
      timelineStyle: {
        strokeColor: '#4af',
        capWidth: 10,
        capHeight: 10,
        capType: 'rect',
        fillColor: '#4af',
      },
      rowsStyle: {
        height: 30,
        color: 'red',
        groupFillColor: '#535353',
        selectedColor: 'red',
        keyframesStyle: {
          shape: 'circle',
          fillColor: 'white',
          strokeColor: 'red',
          strokeThickness: 4,
          width: 6,
          height: 6,
        },
      },
    });
    timeline.setModel({ rows });
    timeline.onTimeChanged((event) => {
      console.log('onTimeChanged', event);
    });
    timeline.onScroll(onScrollChange);

    const options = timeline.getOptions();
    const headerElement = document.getElementById('outline-header');
    headerElement.style.maxHeight = `${options.headerHeight}px`;
    headerElement.style.minHeight = `${options.headerHeight}px`;
  }, [onScrollChange, timeline]);

  if (!timeline) return null;
  const options = timeline.getOptions();

  return (
    <div className="timeline-container flex-grow-1">
      <div className="outline">
        <div className="outline-header" id="outline-header">
          <div className="d-flex top-bar">
            <Icon.FilePlus size={16} />
            <Icon.Trash2 size={16} />
          </div>
          <div className="d-flex justify-content-end bottom-bar">
            <Icon.Eye size={12} />
            <Icon.Lock size={12} />
          </div>
        </div>
        <div
          className="outline-scroll-container"
          id="outline-scroll-container"
        >
          <div className="outline-items" id="outline-container">
            {
              layers.map((item, index) => (
                <div
                  key={index}
                  className="outline-node d-flex justify-content-between"
                  style={{
                    maxHeight: options.rowsStyle.height,
                    minHeight: options.rowsStyle.height,
                    marginBottom: options.rowsStyle.marginBottom,
                  }}
                >
                  <span>{item.title || `Track ${index}`}</span>
                  <div className="row-icons">
                    { item.hidden ? <Icon.EyeOff size={12} /> : <Icon.Eye size={12} /> }
                    { item.locked ? <Icon.Lock size={12} /> : <Icon.Unlock size={12} /> }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div id="timeline" className="timeline" />
    </div>
  );
};

export default TimeLineView;
