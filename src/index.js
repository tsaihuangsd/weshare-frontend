import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalContexts} from "./store/Context"
import Auth0ProviderContext from "./auth/Auth0";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalContexts>
        <Auth0ProviderContext>
          <App />
        </Auth0ProviderContext>
      </GlobalContexts>  
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
