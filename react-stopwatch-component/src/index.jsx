import React from 'react';
import ReactDOM from 'react-dom';
import Stopwatch from './stopwatch.jsx';

const element = (
  <Stopwatch />
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
