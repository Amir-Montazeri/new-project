import { USER } from './actions/actionTypes';

export default (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER:
            return payload;
        default:
            return state;
    }
};