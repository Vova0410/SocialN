import {toggleIsFetcing} from "./users-reducer";
import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_USER_STATUS = 'GET_USER_STATUS';
const SAVE_PHOTO_AC = 'SAVE_PHOTO_AC';



let initialState = {
    posts: [
        {id: 1, post: "Hi, haw are you?", likesCount: 12},
        {id: 2, post: "my first message", likesCount: 10},
        {id: 3, post: "Hi, haw are you?", likesCount: 11},
        {id: 4, post: "Hi, haw are you?", likesCount: 1},
        {id: 5, post: "Hi, haw are you?", likesCount: 121},
    ],
    newPostText: '',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:

            let newPost = {
                id: 6,
                post: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],

            };

        case SET_PROFILE_DATA:
            return {
                ...state, profile: action.profile
            };

        case SET_USER_STATUS:
            return {
                ...state, status: action.status
            };
        case SAVE_PHOTO_AC:
            return {
                ...state, profile: {
                    ...state.profile, photos: action.photoFile
                }
            };


        default:
            return state;
    }
};


//function creaters
export const addPostCreator = (newPostText) => {
    return {type: ADD_POST, newPostText: newPostText};
};
export const SetPofileData = (profile) => {
    return{type: SET_PROFILE_DATA, profile: profile }
};
export const setUserStatusAC = (status) => {
    return {type: SET_USER_STATUS, status: status}
};
export const savePhotoAC = (photoFile) => {
    return {type: SAVE_PHOTO_AC, photoFile: photoFile}
};





// thunk
export const getUserProfileDAL = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetcing(true));
        userAPI.getUserProfile(userId).then(data => {  //делаем запрос на сервер
            dispatch(SetPofileData(data))
        });
        dispatch(toggleIsFetcing(false));
    }
};
export const getUserStatusDAL = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(respons => {
            dispatch(setUserStatusAC(respons.data))
        })
    }
};
export const upDateStateDAL = (status) => {
    return (dispatch) => {
        profileAPI.upDateStatus(status).then(respons => {
            if(respons.data.resultCode === 0) {
                dispatch(setUserStatusAC(status))
            }
        })
    }
};
export const saveProfileDAL = (profile) => {
    return (dispatch, getState) => {
        const userId = getState().auth.id;
        profileAPI.setProfile(profile).then( respons => {
            if(respons.data.resultCode === 0) {
                dispatch(getUserProfileDAL(userId))
            }
        })
    }
};
export const savePhotoDAL = (photoFile) => {
    return dispatch => {
        profileAPI.savePhotoApi(photoFile).then(respons => {
            if(respons.data.resultCode === 0) {
                dispatch(savePhotoAC(respons.data.data.photos))
            }
        })
    }
}

export default profileReducer;



/*const UP_DATE_POST = 'UP-DATE-POST';*/

/*case UP_DATE_POST:
 return {
 ...state,
 newPostText: action.newText
 };*/

/*export const onPostChangeCreator = (newText) => {
 return {type: UP_DATE_POST, newText: newText};
 };*/
