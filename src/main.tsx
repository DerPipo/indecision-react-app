import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './i18n/i18n';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="Loading...">
      <IndecisionApp />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
