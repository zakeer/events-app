import React from 'react';
import { connect } from 'react-redux';
import CounterDecrement from './CounterDecrement';
import CounterIncrement from './CounterIncrement';
import CounterValue from './CounterValue';

function CounterApp(props) {
    console.log(":: CounterApp ::", props);
    return <div className='ui-app'>
        <div className='ui-counter'>
            <CounterDecrement />
            <CounterValue />
            <CounterIncrement />
        </div>
    </div>
}

export default connect()(CounterApp);