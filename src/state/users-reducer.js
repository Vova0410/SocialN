import {userAPI} from "../api/api";
const FOLLOWED = 'FOLLOWED';
const UNFOLLOWED = 'UNFOLLOWED';
const SET_USERS = 'SET-USERS';
const TOTAL_USERS_COUNT = 'unselectedPage';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const IS_FETCHING = 'IS_FETCHING';
const TOGGLE_IS_DISABLING = 'TOGGLE_IS_DISABLING';


let initialState = {
    users: [],
    pageSize: 90,
    totalUsersCount: 1100,
    currentPage: 10,
    isFetching: true,
    isDisabling: []

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
                users: [...action.users]
            };

        case TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            };

        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };

        case IS_FETCHING:
            return (
                action.isFetching === true ? {...state,isFetching: true} : {...state, isFetching: false}
            );
        case TOGGLE_IS_DISABLING:
            return {
            ...state,
                isDisabling: action.disable
                            ? [...state.isDisabling, action.userId]
                            : state.isDisabling.filter(id => id !== action.userId)
        }
    }
    return state
};


//action creators
export const followed = (userId) => ({ type: FOLLOWED, userId});
export const unfollowed = (userId) => ({ type: UNFOLLOWED, userId});
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotaUsersCount = (totalCount) => ({type: TOTAL_USERS_COUNT, totalCount});
export const changeCurrentPage = (currentPage) => ({type: CHANGE_CURRENT_PAGE, currentPage});
export const toggleIsFetcing = (isFetching) => ({ type: IS_FETCHING, isFetching: isFetching });
export const toggleisDisabling = (disable, userId) => ({ type: TOGGLE_IS_DISABLING, disable, userId});

//thunks
export const getUsersThunkCreator = (currentPage, pageSize) => {
    return(dispatch) => {
                dispatch(toggleIsFetcing(true));
                userAPI.getUsers(currentPage, pageSize)
                    .then(data => {
                dispatch(toggleIsFetcing(false));
                dispatch(setUsers(data.items));
                dispatch(setTotaUsersCount(data.totalCount));

            })
    }
};
export const changePageThankCreator = (pageNum, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetcing(true));
        dispatch(changeCurrentPage(pageNum));
        userAPI.changeUser(pageNum, pageSize)
            .then (data => {
                dispatch(setUsers(data.items));
                dispatch(toggleIsFetcing(false));
            })
    }
};
export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleisDisabling(true, userId));
        userAPI.deleteFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowed(userId))
                }
                dispatch(toggleisDisabling(false, userId));
            });
    }
};
export const unFollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleisDisabling(true, userId));
        userAPI.setFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followed(userId))
                }
                dispatch(toggleisDisabling(false, userId));
            })
    }
};


export default userReducer;