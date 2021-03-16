import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_ERROR,
    AUTH_REGISTER,
    AUTH_REGISTER_ERROR,
    AUTH_REGISTER_SUCCESS
} from '../types';

const initialState = {
    user: null,
    token: null  
};

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}