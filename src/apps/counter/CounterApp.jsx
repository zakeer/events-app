import React from 'react';
import {  Provider } from 'react-redux';
import CounterApp from './components/CounterApp';
import { counterStore } from './counter.store';


function CounterAppWithStore() {
    return <Provider store={counterStore}>
        <CounterApp />
    </Provider>
}

export const SOME_DATA = [
    1,2,3,4
]

export default CounterAppWithStore;