import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleDismissModal}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.handleDismissModal}>
      Okay
    </button>
  </Modal>
);

OptionModal.propTypes = {
  handleDismissModal: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
};

export default OptionModal;
