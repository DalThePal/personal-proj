import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './ducks/reducers/';

export default createStore(reducer, applyMiddleware(promiseMiddleware()));