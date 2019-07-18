import React from 'react';
import ReactDOM from 'react-dom';
import 'Assets/css/vendor/bootstrap.min.css';
import 'Assets/css/sass/app.scss';

const rootEl = document.getElementById('root');

const render = () => {
  const MainApp = require('./App').default;
  ReactDOM.render(<MainApp />, rootEl);
};

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(<NextApp />, rootEl);
  });
}

render();
