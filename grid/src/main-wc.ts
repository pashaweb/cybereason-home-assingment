import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';


import r2wc from 'react-to-webcomponent';

const Grid = r2wc(App, React, ReactDOM, {
  shadow: 'closed'
});

customElements.define('grid-app', Grid);