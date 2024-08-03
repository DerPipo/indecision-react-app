import { useTranslation } from 'react-i18next';

const Action = (props: { hasOptions: boolean; handlePick: () => void }) => {
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

export default Action;
