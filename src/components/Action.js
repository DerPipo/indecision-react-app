import React from 'react';
import PropTypes from 'prop-types';

const Action = props => (
  <div>
    <button
      className="big-button"
      disabled={!props.hasOptions}
      onClick={props.handlePick}
    >
      What should I do???
    </button>
  </div>
);

Action.propTypes = {
  hasOptions: PropTypes.bool.isRequired,
  handlePick: PropTypes.func.isRequired,
};

export default Action;
