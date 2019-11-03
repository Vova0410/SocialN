
import {userAPI} from "../api/api";
import {setTotaUsersCount} from "./users-reducer";
const SET_FRIENDS = 'SET_FRIENDS';

let initialState = {
    friends: []
};

const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FRIENDS:
        return{
            ...state,
            friends: action.friends.filter( f => f.followed )
        }

    }
    return state;
};

// action creators
export const setFriendsAC = (friends) => ({type: SET_FRIENDS, friends: friends});

// thunks

export const getFriendsDataDAL = (pageNum, pageSize) => {
    return (dispatch) => {
            userAPI.getUsers(pageNum, pageSize).then( data => {
            dispatch(setFriendsAC(data.items));
            dispatch(setTotaUsersCount(data.totalCount));
        })
    }

};

export default friendsReducer;
