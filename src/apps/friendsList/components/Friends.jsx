import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { REMOVE_FRIEND } from '../store/friends.store';

function Friends(props) {
    console.log(":: Friends -> props ::", props);
    const dispatch = useDispatch();

    const deleteFriend = (friendIndex) => {
        const action = {
            type: REMOVE_FRIEND,
            payload: friendIndex
        }
        console.log(":: deleteFriend action", action);
        dispatch(action)
    }

    return (
        <ul className='divide-y divide-blue-200'>
            {props.friends.map((friendName, idx) => <li className={`p-2 flex justify-between`} key={friendName}>
                <span>{friendName}</span>
                <button onClick={() => deleteFriend(idx)} className='hover:bg-red-600 hover:px-4 bg-red-400 rounded-full px-3 text-white'>X</button>
            </li>)}
        </ul>
    )
}

const mapStateToProps = (state) => {
    console.log(":: Friends -> mapStateToProps -> state ::", state);
    return {
        friends: state.friends
    }
}

export default connect(mapStateToProps)(Friends); // HOC -> Higher Order Function