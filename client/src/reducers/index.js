import learnedReducer from './learnedPosts';
import authReducer from './auth';
import {combineReducers} from 'redux';
import wishesReducer from './wishes';

export const allReducers = combineReducers({
    learnedPicks: learnedReducer,
    isLogged: authReducer,
    wishes: wishesReducer
})