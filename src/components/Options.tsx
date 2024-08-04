import { useTranslation } from 'react-i18next';

import Option from './Option';

const Options = (props: {
  handleDeleteOptions: () => void;
  handleDeleteOption: (option: string) => void;
  options: string[];
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">{t('your_options')}</h3>
        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}
        >
          {t('remove_all')}
        </button>
      </div>
      {props.options.length === 0 && (
        <p className="widget__message">{t('no_options')}</p>
      )}
      {props.options.map((option, index) => (
        <Option
          key={option}
          option={option}
          count={index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

export default Options;
