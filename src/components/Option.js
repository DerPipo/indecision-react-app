import React from 'react';
import PropTypes from 'prop-types';

const Option = props => (
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
      Remove
    </button>
  </div>
);

Option.propTypes = {
  count: PropTypes.number.isRequired,
  option: PropTypes.string.isRequired,
  handleDeleteOption: PropTypes.func.isRequired,
};

export default Option;
