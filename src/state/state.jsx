
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
                {id: 2, message: "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является"
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
    addPost() {
        let newPost = {
            id: 6,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscribe(this._state);
    },
    upDatepost(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscribe(this._state);
    },
    addMessage() {
        let newMessageText = {
            id: 7,
            message: this._state.messagePage.newMessageVal
        };
        this._state.messagePage.messages.push(newMessageText);
        this._state.messagePage.newMessageVal = ''; // обнуляем
        this._callSubscribe(this._state);
    },
    upDataMessage(newMess) {
        this._state.messagePage.newMessageVal = newMess;
        this._callSubscribe(this._state);
    },
};


export default store;
window.store = store;






