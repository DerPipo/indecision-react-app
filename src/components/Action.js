import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Action = (props) => {
  const { t } = useTranslation();

  return (
    <div>
      <button
        className="big-button"
        disabled={!props.hasOptions}
        onClick={props.handlePick}
      >
        {t('indecision_button_title')}
      </button>
    </div>
  );
};

Action.propTypes = {
  hasOptions: PropTypes.bool.isRequired,
  handlePick: PropTypes.func.isRequired,
};

export default Action;
