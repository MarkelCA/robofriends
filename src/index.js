import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card.js';
import reportWebVitals from './reportWebVitals.js';
import { robots } from './robots.js';

ReactDOM.render(
    <React.StrictMode> 
        <div className="cards-wrapper tc bg-dark-green">
            {robots.map(printCard)}
        </div>
    </React.StrictMode>,
  document.getElementById('root')
);

function printCard({ id, name, email, username }) {
    return <Card key={id} id={id} name={name} email={email} username={username} />
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Web Vitals are a set of useful metrics that aim to capture the user experience of a web page. In Create React App, a third-party library is used to measure these metrics (web-vitals).
reportWebVitals(/*console.log*/); 

