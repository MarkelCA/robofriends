import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card.js';
import reportWebVitals from './reportWebVitals.js';
import { robots } from './robots';
ReactDOM.render(
    <React.StrictMode> 
        <div>
            <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
            <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
            <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
        </div>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Web Vitals are a set of useful metrics that aim to capture the user experience of a web page. In Create React App, a third-party library is used to measure these metrics (web-vitals).
reportWebVitals(/*console.log*/); 

