import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import r2wc from 'react-to-webcomponent';

const List = r2wc(App, React, ReactDOM,
  {
    shadow:"closed",
    props: {
      items: "json"
    },
  });

customElements.define('list-app', List);
