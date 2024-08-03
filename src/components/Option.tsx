import { useTranslation } from 'react-i18next';

const Option = (props: {
  count: number;
  option: string;
  handleDeleteOption: (option: string) => void;
}) => {
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

export default Option;
