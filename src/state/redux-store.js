import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import userReducer from './users-reducer';
import authReducer from './auth-reducer';
import friendsReducer from './friends-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./app-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    frindePage: friendsReducer,
    app: appReducer
});
let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
