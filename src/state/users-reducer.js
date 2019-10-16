const FOLLOWED = 'FOLLOWED';
const UNFOLLOWED = 'UNFOLLOWED';
const SET_USERS = 'SET-USERS';


let initialState = {
    users: [

    ]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOWED:
            return {
            ...state,
                users: state.users.map( u => {
                if(u.id === action.userId) {
                    return {...u, followed: true}
                } return u
        })

        };

        case UNFOLLOWED:
        return {
            ...state,
            users: state.users.map( u => {
                if(u.id === action.userId) {
                    return {...u, followed: false}
                } return u
            })
        };

        case SET_USERS:
            return {
            ...state,
                users: [...state.users, ...action.users]
        };


    }
    return state
};

export const followedAC = (userId) => ({ type: FOLLOWED, userId});
export const unfollowedAC = (userId) => ({ type: UNFOLLOWED, userId});
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default userReducer;