import React from 'react';
import ReactDOM from 'react-dom'; // 正確引入 ReactDOM
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render( // 使用 ReactDOM.render() 方法
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);