const FOLLOWED = 'FOLLOWED';
const UNFOLLOWED = 'UNFOLLOWED';
const SET_USERS = 'SET-USERS';
const TOTAL_USERS_COUNT = 'unselectedPage';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const IS_FETCHING = 'IS_FETCHING';
const TOGGLE_IS_DISABLING = 'TOGGLE_IS_DISABLING';


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 16,
    currentPage: 2,
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

export const followed = (userId) => ({ type: FOLLOWED, userId});
export const unfollowed = (userId) => ({ type: UNFOLLOWED, userId});
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotaUsersCount = (totalCount) => ({type: TOTAL_USERS_COUNT, totalCount});
export const changeCurrentPage = (currentPage) => ({type: CHANGE_CURRENT_PAGE, currentPage});
export const toggleIsFetcing = (isFetching) => ({ type: IS_FETCHING, isFetching: isFetching });
export const toggleisDisabling = (disable, userId) => ({ type: TOGGLE_IS_DISABLING, disable, userId});


export default userReducer;