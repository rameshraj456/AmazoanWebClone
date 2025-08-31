import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import ContexProvider from "./components/context/ContexProvider";
import './index.css';
import store from './store';


ReactDOM.render(
  <ContexProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ContexProvider>
  ,
  document.getElementById('root')
);


