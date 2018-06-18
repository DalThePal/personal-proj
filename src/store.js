import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer, { initialState } from './duck';

const middleware = applyMiddleware(promiseMiddleware());


export default createStore(reducer, initialState, middleware);