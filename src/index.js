import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {TodoComponent} from './component/TodoComponent';
import MyFuncComponent from './component/MyFuncComponent';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TodoComponent name="james"></TodoComponent>
    <MyFuncComponent name="mike" age={30}></MyFuncComponent>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
