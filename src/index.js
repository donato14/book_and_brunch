import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import articleData from './Data/articleData';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// function articleData(state = articleData, action) {
//   return state
// }

function reducer(state = articleData, action) {
  return state
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

