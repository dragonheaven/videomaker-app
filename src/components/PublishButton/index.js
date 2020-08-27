import React, { useState } from 'react';
import DownloadIcon from 'mdi-react/DownloadIcon';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ExportVideoModal from '../ExportVideoModal';
import * as TemplateAction from '../../store/actions/template.action';

const PublishButton = ({ setExportMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    setExportMode(true);
  };

  return (
    <div>
      <button className="btn-publish btn btn-outline-light text-white" onClick={handleClick}>
        <span className="mr-2">Publish</span>
        <DownloadIcon />
      </button>
      {
        isOpen && <ExportVideoModal show={isOpen} onClose={() => setIsOpen(false)} />
      }
    </div>
  );
};

PublishButton.propTypes = {
  setExportMode: PropTypes.func.isRequired,
};
const mapStateToProps = ({ }) => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setExportMode: TemplateAction.setExportMode,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(PublishButton);
