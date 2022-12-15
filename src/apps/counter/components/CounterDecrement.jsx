import React from 'react';
import { connect } from 'react-redux';
import { DECREMENT_ACTION } from '../counter.actions';

function CounterDecrement(props) {
    console.log(":: CounterDecrement PROPS ::", props)
    return <button onClick={() => props.dispatch(DECREMENT_ACTION)}>-</button>
}

export default  connect()(CounterDecrement);