import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    activeTab: 1,
    movieList: [],
    movieDetailList: []
}

export const actionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'tabClicked':
            return {
                ...state,
                activeTab: action.activeTab
            }
        case 'SET_MOVIE_LIST':
            return {
                ...state,
                movieList: action.payload
            }
        case 'SET_MOVIE_DETAIL': {
            return {
                ...state,
                movieDetailList: action.payload
            }
        }
        default:
            return state;
    }
};

export const reducers = combineReducers({ actionReducer });

// store.js
export const store = createStore(reducers, applyMiddleware(thunk));