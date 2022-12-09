import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tachyons';
import './index.scss';
import App from './containers/App.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>
);
