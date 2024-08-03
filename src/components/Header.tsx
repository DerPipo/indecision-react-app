import { useTranslation } from 'react-i18next';

const Header = (props: { title: string; subtitle?: string }) => {
  const { i18n } = useTranslation();
  return (
    <div className="header">
      <div className="container">
        <div className="header__divider">
          <div>
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && (
              <h2 className="header__subtitle">{props.subtitle}</h2>
            )}
          </div>
          <div className="header__one-line">
            {i18n.language !== 'en' && (
              <button
                className="header__lng-button"
                onClick={() => {
                  i18n.changeLanguage('en');
                }}
              >
                🇺🇸
              </button>
            )}
            {i18n.language !== 'de' && (
              <button
                className="header__lng-button"
                disabled={i18n.language === 'de'}
                onClick={() => {
                  i18n.changeLanguage('de');
                }}
              >
                🇩🇪
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
