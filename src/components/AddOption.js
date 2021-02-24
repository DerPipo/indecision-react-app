import React from 'react';
import PropTypes from 'prop-types';

class AddOption extends React.Component {
  state = {
    error: undefined,
  };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
      e.target.elements.option.focus();
    }
  };
  render() {
    return (
      <div className="add-option">
        {this.state.error && (
          <p className="add-option__error">{this.state.error}</p>
        )}
        <form className="add-option__form" onSubmit={this.handleAddOption}>
          <input
            className="add-option__input"
            type="text"
            name="option"
          ></input>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

AddOption.propTypes = {
  handleAddOption: PropTypes.func.isRequired,
};

export default AddOption;
