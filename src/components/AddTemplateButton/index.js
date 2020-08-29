import React, { useState } from 'react';
import PlusIcon from 'mdi-react/PlusIcon';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as TemplateAction from '../../store/actions/template.action';
import * as LayerAction from '../../store/actions/layer.action';

import './style.scss';

const templateRequire = require.context('../../templates/', true);

const AddTemplateButton = ({ addNewLayer, templates }) => {
  const [isOpen, setIsOpen] = useState(false);
  const AdobeAn = {};

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelectTemplate = (value) => {
    const template = templates.find((item) => item.id === value);
    const canvas = document.getElementById('canvas');
    const animContainer = document.getElementById('animation_container');
    const domOverlayContainer = document.getElementById('dom_overlay_container');

    if (!canvas || !animContainer || !domOverlayContainer) return;

    const templateScript = (templateRequire(`./${template.scriptName}`)).default;
    templateScript(createjs, AdobeAn);

    const key = Object.keys(AdobeAn.compositions)[0];
    const comp = AdobeAn.getComposition(key);
    const lib = comp.getLibrary();
    const newExportRoot = new lib[template.entryPoint]();

    const rootKeys = Object.keys(newExportRoot);
    const textKeys = rootKeys.filter((item) => item.search(new RegExp('text', 'gi')) !== -1);
    const shapeKeys = rootKeys.filter((item) => item.search(new RegExp('([^_]+shape)|(shape[^_]+)', 'gi')) !== -1);

    const texts = [];
    for (let i = 0; i < textKeys.length; i++) {
      const textKey = textKeys[i];
      const text = newExportRoot[textKey];
      texts[textKey] = {
        text: text._text.text,
        color: text._text.color,
        font: text._text.font,
        textAlign: text._text.textAlign,
        textBaseline: text._text.textBaseline,
        x: text._text.x,
        y: text._text.y,
        rotation: text.rotation,
      };
    }

    const shapes = [];

    for (let i = 0; i < shapeKeys.length; i++) {
      const shapeKey = shapeKeys[i];
      const shape = newExportRoot[shapeKey]._shape;
      shapes[shapeKey] = {
        visible: shape.visible,
      };
    }
    const backgroundColor = newExportRoot.shape11._shape.shape.graphics._fill.style;

    addNewLayer({
      visible: true,
      shape: {
        type: 'template',
        ...template,
        texts,
        shapes,
        background: backgroundColor,
      },
    }, [{ val: 0, type: 'wait' }, { val: 5000 }]);
    setIsOpen(false);
  };


  return (
    <div className="add-template">
      <button className="btn-add-template btn btn-outline-light text-white" onClick={handleClick}>
        <PlusIcon />
        <span className="mr-2">Add Template</span>
      </button>
      {
        isOpen
        && (
          <div className="template-group">
            {
              templates.map((item) => (
                <div
                  className="template-item"
                  key={item.id}
                  onClick={() => onSelectTemplate(item.id)}
                >
                  {item.id}
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  );
};

AddTemplateButton.propTypes = {
  templates: PropTypes.arrayOf(PropTypes.object).isRequired,
  addNewLayer: PropTypes.func.isRequired,
};
const mapStateToProps = ({ template }) => ({
  templates: template.templates,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setExportMode: TemplateAction.setExportMode,
    addNewLayer: LayerAction.addNewLayer,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(AddTemplateButton);
