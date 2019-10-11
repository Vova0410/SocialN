/*
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';


let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "Hi, haw are you?", likesCount: 12},
                {id: 2, post: "my first message", likesCount: 10},
                {id: 3, post: "Hi, haw are you?", likesCount: 11},
                {id: 4, post: "Hi, haw are you?", likesCount: 1},
                {id: 5, post: "Hi, haw are you?", likesCount: 121},
            ],
            newPostText: ''
        },
        messagePage: {
            dialogs: [
                {id: 1, name: 'Vova'},
                {id: 2, name: 'Vlad'},
                {id: 3, name: 'Natasha'},
                {id: 4, name: 'Tom'},
                {id: 5, name: 'Vera'},
            ],
            messages: [
                {id: 1, message: "Hi!1111"},
                {
                    id: 2,
                    message: "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является"
                },
                {id: 3, message: "Hi"},
                {id: 4, message: "Lorem Ipsum - это текст-'рыба', часто используемый"},
                {id: 5, message: "Hi1@@@@@@@@@@2"},
                {id: 6, message: "Hi2222222222"},
            ],
            newMessageVal: ''
        }
    },

    getState() {
        return this._state;
    },

    _callSubscribe() {
        console.log("state changed");
    },

    subscribe(observer) {
        this._callSubscribe = observer;
    },

    dispatch(action)  {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogReducer(this._state.messagePage, action);

        this._callSubscribe(this._state);
    }
};

export default store;





*/
