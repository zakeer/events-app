import { DECREMENT_ACTION, INCREMENT_ACTION } from "./counter.actions";

export function counterReducers(currentState = 999, action) {
    const payload = action.payload; // optional property
    const type = action.type; // required property
    console.log(":: counterReducers ::", currentState, action)

    if(type === INCREMENT_ACTION.type) {
        return currentState + 10;
    }

    if(type === DECREMENT_ACTION.type) {
        return currentState - 20;
    }

    return currentState;
}