const ADD_POST = 'ADD-POST';
const UP_DATE_POST = 'UP-DATE-POST';

let initialState = {
    posts: [
        {id: 1, post: "Hi, haw are you?", likesCount: 12},
        {id: 2, post: "my first message", likesCount: 10},
        {id: 3, post: "Hi, haw are you?", likesCount: 11},
        {id: 4, post: "Hi, haw are you?", likesCount: 1},
        {id: 5, post: "Hi, haw are you?", likesCount: 121},
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:

            let newPost = {
                id: 6,
                post: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };



        case UP_DATE_POST:
            return {
                ...state,
                newPostText: action.newText
            };



        default:
            return state;
    }
};

export const addPostCreator = () => {
    return {type: ADD_POST};
};

export const onPostChangeCreator = (newText) => {
    return {type: UP_DATE_POST, newText: newText};
};

export default profileReducer;
