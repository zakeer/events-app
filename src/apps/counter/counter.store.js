import { createStore } from 'redux';
import { counterReducers } from './counter.reducer';

export const counterStore = createStore( counterReducers );


