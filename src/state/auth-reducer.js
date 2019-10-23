import {authAPI} from "../api/api";
const SET_AUTH_USERS_DATA = 'SET_AUTH_USERS_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false

};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USERS_DATA:
            return {
                ...state,
                ...action.UserData,
                isAuth: true
            }
    }
    return state;
};

export const setAuthUsersData = (id, login, email) => ({
    type: SET_AUTH_USERS_DATA, UserData: {id, login, email}
});

export const getUsersAuthDataDAL = () => {
 return (dispatch) => {
 authAPI.me().then(respons => {
 if (respons.data.resultCode === 0) {
 dispatch(setAuthUsersData(respons.data.data.id, respons.data.data.login, respons.data.data.email));
 }

 })
 }
 }


export default authReducer;



