import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Header = (props) => {
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
            <button
              className="header__lng-button"
              disabled={i18n.language === 'en'}
              onClick={() => {
                i18n.changeLanguage('en');
              }}
            >
              🇺🇸
            </button>
            |
            <button
              className="header__lng-button"
              disabled={i18n.language === 'de'}
              onClick={() => {
                i18n.changeLanguage('de');
              }}
            >
              🇩🇪
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;
