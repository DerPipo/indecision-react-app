import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handlePick = () => {
    const pick = this.state.options[
      Math.floor(Math.random() * this.state.options.length)
    ];
    this.setState(() => ({
      selectedOption: pick,
    }));
  };
  handleAddOption = (option) => {
    const { t } = this.props;
    if (!option) {
      return t('enter_valid_value');
    } else if (this.state.options.indexOf(option) >= 0) {
      return t('option_already_exists');
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove),
    }));
  };
  handleDismissModal = () => {
    this.setState(() => ({
      selectedOption: undefined,
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      console.error(error);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    const { t } = this.props;

    return (
      <div>
        <Header title={t('app_title')} subtitle={t('app_subtitle')} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleDismissModal={this.handleDismissModal}
        />
      </div>
    );
  }
}

const IndecisionAppWithTranslation = withTranslation()(IndecisionApp);

IndecisionApp.propTypes = {
  t: PropTypes.func.isRequired,
};

export default IndecisionAppWithTranslation;
