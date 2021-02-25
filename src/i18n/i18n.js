import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: navigator.language,
  resources: {
    de: {
      translation: {
        app_title: 'Zwiespalt - Die App',
        app_subtitle: 'Lege dein Leben in die Hände eines Computers',
        indecision_button_title: 'Was soll ich nur tun???',
        your_options: 'Deine Optionen',
        remove_all: 'Alle löschen',
        remove: 'löschen',
        add_option: 'Option hinzufügen',
        enter_valid_value: 'Gib bitte einen Titel für deine Option ein',
        option_already_exists: 'Diese Option existiert bereits',
        selected_option: 'Meine Wahl:',
        ok_button_title: 'Okay, danke!',
        no_options: 'Füge eine Option hinzu um loszulegen...',
      },
    },
    en: {
      translation: {
        app_title: 'Indecision',
        app_subtitle: 'Put your life in the hands of a computer',
        indecision_button_title: 'What should I do???',
        your_options: 'Your Options',
        remove_all: 'Remove All',
        remove: 'Remove',
        add_option: 'Add Option',
        enter_valid_value: 'Enter valid value to add item',
        option_already_exists: 'This option already exists',
        selected_option: 'Selected Option',
        ok_button_title: 'Okay, thanks!',
        no_options: 'Add an option to get started...',
      },
    },
  },
});

export default i18next;
