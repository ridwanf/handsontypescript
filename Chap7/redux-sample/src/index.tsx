import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {Provider} from "react-redux"
// import configureStore from "./store/configureStore";

import { createRoot } from 'react-dom/client';
import ContextTester from './ContextTester';
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    {/* <Provider store={configureStore()}> */}
      {/* <App /> */}
      <ContextTester />
    {/* </Provider> */}
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
