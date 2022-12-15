import React from 'react';
import {  Provider } from 'react-redux';
import CounterApp from './components/CounterApp';
import { counterStore } from './counter.store';


function CounterAppWithStore() {
    return <Provider store={counterStore}>
        <CounterApp />
    </Provider>
}

export default CounterAppWithStore;