import React from 'react';
import TextShadowIcon from 'mdi-react/TextShadowIcon';
import EllipseOutlineIcon from 'mdi-react/EllipseOutlineIcon';
import SquareOutlineIcon from 'mdi-react/SquareOutlineIcon';
import CircleOutlineIcon from 'mdi-react/CircleOutlineIcon';
import StarIcon from 'mdi-react/StarIcon';
import './style.scss';
import PublishButton from '../PublishButton';
import AddTemplateButton from "../AddTemplateButton";

const TopView = () => (
  <div className="top-view d-flex">
    <div className="d-flex align-items-center text-white m-2">
      <AddTemplateButton />
    </div>
    <div className="d-flex flex-grow-1 justify-content-center align-items-center">
      <div
        className="drag-icon"
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData('type', 'text');
        }}
      >
        <TextShadowIcon />
      </div>

      <div
        className="drag-icon"
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData('type', 'rect');
        }}
      >
        <SquareOutlineIcon />
      </div>

      <div
        className="drag-icon"
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData('type', 'ellipse');
        }}
      >
        <EllipseOutlineIcon />
      </div>

      <div
        className="drag-icon"
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData('type', 'circle');
        }}
      >
        <CircleOutlineIcon />
      </div>
      <div
        className="drag-icon"
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData('type', 'star');
        }}
      >
        <StarIcon />
      </div>
    </div>
    <div className="d-flex align-items-center text-white m-2">
      <PublishButton />
    </div>
  </div>
);

export default TopView;
