const SET_AUTH_USERS_DATA = 'SET_AUTH_USERS_DATA';


let initialState = {
        id: null,
        login: null,
        email: null,
        isAuth: false

};


const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USERS_DATA:
            return {
                ...state,
                ...action.UserData,
                isAuth:true

            }


    }
    return state;
};

export const setAuthUsersData = (id, login, email) => ({type: SET_AUTH_USERS_DATA, UserData: {id, login, email}
});

export default authReducer;
