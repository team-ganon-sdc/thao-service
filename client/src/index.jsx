import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var id = Math.floor(Math.random() * 100) + 1;

ReactDOM.render(<App id={id}/>, document.getElementById('root'));