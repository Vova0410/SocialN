import {authAPI} from "../api/api";
const SET_AUTH_USERS_DATA = 'SET_AUTH_USERS_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,


};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USERS_DATA:
            return {
                ...state,
                ...action.UserData

            };
    }
    return state;
};


// action creators
export const setAuthUsersData = (id, login, email, isAuth) => ({
    type: SET_AUTH_USERS_DATA, UserData: {id, login, email, isAuth}
});




//thunk
export const getUsersAuthDataDAL = () => {
    return (dispatch) => {
        authAPI.me().then(respons => {
            if (respons.data.resultCode === 0) {
                dispatch(setAuthUsersData(respons.data.data.id, respons.data.data.login, respons.data.data.email, true));
            }

        })
    }
};

export const loginDAL = (email, password, rememberMe) => (dispatch) => {
    return (
        authAPI.login(email, password, rememberMe).then(respons => {
            if (respons.data.resultCode === 0) {
                dispatch(getUsersAuthDataDAL())
            }

        })
    )
};

export const logOutDAL = () => (dispatch) => {
    return (
        authAPI.logout().then(respons => {
            if (respons.data.resultCode === 0) {
                dispatch(setAuthUsersData(null, null, null, false))
            }

        })
    )
};

export default authReducer;



