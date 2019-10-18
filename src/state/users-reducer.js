const FOLLOWED = 'FOLLOWED';
const UNFOLLOWED = 'UNFOLLOWED';
const SET_USERS = 'SET-USERS';
const TOTAL_USERS_COUNT = 'unselectedPage';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const IS_FETCHING = 'IS_FETCHING';


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 16,
    currentPage: 6,
    isFetching: true
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
            )


    }
    return state
};

export const followedAC = (userId) => ({ type: FOLLOWED, userId});
export const unfollowedAC = (userId) => ({ type: UNFOLLOWED, userId});
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const totalUsersCountAC = (totalCount) => ({type: TOTAL_USERS_COUNT, totalCount});
export const ChangeCurrentPageAC = (currentPage) => ({type: CHANGE_CURRENT_PAGE, currentPage});
export const toggleIsFetcingAC = (isFetching) => ({ type: IS_FETCHING, isFetching: isFetching });

export default userReducer;