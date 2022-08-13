import { createStore } from 'redux';
import {generate} from '../Reducers/generate';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

const store = createStore(generate,applyMiddleware(thunkMiddleware));




export default store;

