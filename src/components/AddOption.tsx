import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function AddOption(props: {
  handleAddOption: (option: string) => string | null;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { t } = useTranslation();
  const [error, setError] = useState<string | null>(null);

  const handleAddOption = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current) {
      throw new Error('inputRef is null');
    }

    const option = inputRef.current.value.trim();
    const error = props.handleAddOption(option);

    setError(error);

    if (!error) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };
  return (
    <div className="add-option">
      {error && <p className="add-option__error">{t(error)}</p>}
      <form className="add-option__form" onSubmit={handleAddOption}>
        <input
          ref={inputRef}
          className="add-option__input"
          type="text"
          name="option"
        ></input>
        <button className="button">{t('add_option')}</button>
      </form>
    </div>
  );
}
