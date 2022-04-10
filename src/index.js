import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import articleData from './Data/articleData';
import keywordData from './Data/keywordData';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

// function articleData(state = articleData, action) {
//   return state
// }

function reducer(state = articleData, action) {
  return state
}

function reducer2(state = keywordData, action) {
  return state
}

let store = createStore(combineReducers({reducer, reducer2}));

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

