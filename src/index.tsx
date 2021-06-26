import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { SearchPage } from './pages/SearchPage';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <SearchPage />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
