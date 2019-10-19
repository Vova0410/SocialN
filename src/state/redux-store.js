import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import userReducer from './users-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    usersPage: userReducer,
    auth: authReducer
});
let store = createStore(reducers);

window.store = store;

export default store;
