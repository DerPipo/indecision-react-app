import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';

const OptionModal = (props: {
  handleDismissModal: () => void;
  selectedOption?: string;
}) => {
  const { t } = useTranslation();
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      onRequestClose={props.handleDismissModal}
      closeTimeoutMS={200}
      className="modal"
      appElement={document.getElementById('root')!}
    >
      <h3 className="modal__title">{t('selected_option')}</h3>
      {props.selectedOption && (
        <p className="modal__body">{props.selectedOption}</p>
      )}
      <button className="button" onClick={props.handleDismissModal}>
        {t('ok_button_title')}
      </button>
    </Modal>
  );
};

OptionModal.propTypes = {
  handleDismissModal: PropTypes.func.isRequired,
  selectedOption: PropTypes.string,
};

export default OptionModal;
