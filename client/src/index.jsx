import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
const axios = require('axios');

let url = new URL(window.location);
let params = new URLSearchParams(url.search);
let id = params.get('id')

ReactDOM.render(<App id={id}/>,
document.getElementById('root'))


