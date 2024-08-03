import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Option = (props) => {
  const { t } = useTranslation();

  return (
    <div className="option">
      <p className="option__text">
        {props.count}. {props.option}
      </p>
      <button
        className="button button--link"
        onClick={() => {
          props.handleDeleteOption(props.option);
        }}
      >
        {t('remove')}
      </button>
    </div>
  );
};

Option.propTypes = {
  count: PropTypes.number.isRequired,
  option: PropTypes.string.isRequired,
  handleDeleteOption: PropTypes.func.isRequired,
};

export default Option;
