import { combineReducers } from "redux";
import isLoading from './isLoading';
import user from './user';

export default combineReducers({
    isLoading,
    user
});