import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import CatForm from './catForm';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <CatForm />
  </React.StrictMode>,
  document.getElementById('root')
);