import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ADD_FRIEND } from '../store/friends.store';

function AddFriend() {
    const [inputValue, setValue] = useState('');
    const dispatch = useDispatch();

    const addNewFriend = () => {
        const action = {
            type: ADD_FRIEND,
            payload: inputValue
        };
        dispatch(action);
        setValue('');
    }

    return (
        <div className='flex mb-2'>
            <input className='grow p-2 mr-2 border-2 border-neutral-800' placeholder='Add Friend Name' value={inputValue} onChange={e => setValue(e.target.value)} />
            <button className='disabled:bg-red-100 w-35 bg-black rounded-full text-white px-5' disabled={!inputValue} onClick={addNewFriend}>Add</button>
        </div>
    )
}

export default AddFriend