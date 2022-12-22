import React from 'react';
import { connect } from 'react-redux';

function CounterValue(props) {
    console.log(":: CounterValue props ::", props);
    return <h3>{props.value}</h3>
}

const mapStateToProps = (state) => {
    console.log(":: CounterValue mapStateToProps state", state);
    return {
        value: state
    }

}

export default connect(mapStateToProps)(CounterValue);