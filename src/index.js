import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root/root';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import MyRedusers from './reducers'
import createSagaMiddleWare from 'redux-saga'
import middleWareSetup from './saga'

const myMiddleWare = createSagaMiddleWare();
const myStore = createStore(MyRedusers, applyMiddleware(myMiddleWare));
myMiddleWare.run(middleWareSetup);

ReactDOM.render(<BrowserRouter><Provider store={myStore}><Root /></Provider></BrowserRouter>, document.querySelector("#root"));