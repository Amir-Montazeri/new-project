import { IS_LOADING, USER } from './actionTypes';

export const setIsLoading = payload => ({
    type: IS_LOADING,
    payload
});

export const setUser = payload => ({
    type: USER,
    payload
});