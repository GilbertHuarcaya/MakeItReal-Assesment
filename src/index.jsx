import React from 'react';
import ReactDOM from 'react-dom';

import { ProductProvider } from './components/Products/Context';
import { LinksGoneProvider } from './components/ProductCard/Context';

import App from './app';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <LinksGoneProvider>
        <App />
      </LinksGoneProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
