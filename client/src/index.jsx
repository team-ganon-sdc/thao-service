import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './components/App.jsx';

window.App1 = App1;

let url = new URL(window.location);
let params = new URLSearchParams(url.search);
let id = params.get('id')
ReactDOM.render(
  React.createElement(App1, {id} , null),
  document.getElementById('root')
)