import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import reportWebVitals from './reportWebVitals.js';

ReactDOM.render(
    <React.StrictMode> 
        <App />
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Web Vitals are a set of useful metrics that aim to capture the user experience of a web page. In Create React App, a third-party library is used to measure these metrics (web-vitals).
reportWebVitals(/*console.log*/); 

