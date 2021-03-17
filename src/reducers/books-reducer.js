import {
    GET_BOOKS,
    GET_BOOKS_ERROR,
    GET_BOOKS_SUCCESS,
} from '../types';

const initialState = {
    topSixBooksSold: [],
    topSixPopularAdded: [],
    books: [],
    bookSelected: null,
    loading: false,
    error: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}