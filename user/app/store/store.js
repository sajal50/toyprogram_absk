import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import topReducer from '../reducers/topReducer.js';

let store = applyMiddleware(thunk)(createStore)(topReducer, window.devToolsExtension ? window.devToolsExtension() : f => f);

module.exports = store;