import { createStore } from 'redux';

export const ADD_FRIEND = 'ADD_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

const initialState = {
    friends: [
        'Saibabu',
        'Rajesh',
        'Apsar'
    ]
}

function friendsReducer(currentState = initialState, action) {
    console.log(":: friendsReducer ::", currentState, action)
    if (action.type === ADD_FRIEND) {
        return {
            friends: [
                ...currentState.friends,
                action.payload
            ]
        }
    }

    if (action.type === REMOVE_FRIEND) {
        return {
            friends: currentState.friends.filter((value, index) => index !== action.payload)
        }
    }

    return currentState;
}

export const friendsStore = createStore(friendsReducer)