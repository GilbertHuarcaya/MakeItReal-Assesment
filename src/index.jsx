import React from 'react';
import ReactDOM from 'react-dom';

import { ProductProvider } from './components/Products/Context';

import App from './app';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
