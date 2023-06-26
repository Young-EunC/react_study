import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

//ReactDOM.render( // until React version 17
//    <React.StrictMode>
//        <App/>
//    </React.StrictMode>,
//    document.getElementById('root')
//);

// after React version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);