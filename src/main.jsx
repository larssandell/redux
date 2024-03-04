import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/App/App.jsx';
import './main.css';
import {Provider} from 'react-redux';
import store from './services/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);