import React from 'react';
import ReactDOM from 'react-dom';
import HotButton from './hot-button.jsx';

const element = (
  <HotButton />
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
