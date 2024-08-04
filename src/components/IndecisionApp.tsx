import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import OptionModal from './OptionModal';
import Options from './Options';

function getOptionsFromLocalStorage() {
  try {
    const json = localStorage.getItem('options');

    if (!json) {
      return [];
    }

    const options = JSON.parse(json);
    if (
      Array.isArray(options) &&
      options.every((option) => typeof option === 'string')
    ) {
      return options;
    }
  } catch (error) {
    console.error(error);
  }
  return [];
}

function IndecisionApp() {
  const { t } = useTranslation();
  const [options, setOptions] = useState<string[]>(getOptionsFromLocalStorage);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );

  const handleDeleteOptions = () => {
    setOptions([]);
  };

  const handlePick = () => {
    const pick = options[Math.floor(Math.random() * options.length)];
    setSelectedOption(pick);
  };

  const handleAddOption = (option: string) => {
    if (option === '') {
      return 'enter_valid_value';
    } else if (options.indexOf(option) >= 0) {
      return 'option_already_exists';
    }

    setOptions((prevState) => prevState.concat(option));
    return null;
  };

  const handleDeleteOption = (optionToRemove: string) => {
    setOptions((prevState) =>
      prevState.filter((option) => option !== optionToRemove)
    );
  };

  const handleDismissModal = () => setSelectedOption(undefined);

  useEffect(() => {
    localStorage.setItem('options', JSON.stringify(options));
  }, [options]);

  return (
    <div>
      <Header title={t('app_title')} subtitle={t('app_subtitle')} />
      <div className="container">
        <Action hasOptions={options.length > 0} handlePick={handlePick} />
        <div className="widget">
          <Options
            options={options}
            handleDeleteOptions={handleDeleteOptions}
            handleDeleteOption={handleDeleteOption}
          />
          <AddOption handleAddOption={handleAddOption} />
        </div>
      </div>
      <OptionModal
        selectedOption={selectedOption}
        handleDismissModal={handleDismissModal}
      />
    </div>
  );
}

export default IndecisionApp;
