import {renderIntareTree} from '../render';

let state = {
    profilePage: {
        posts: [
            {id: 1, post: "Hi, haw are you?", likesCount: 12},
            {id: 2, post: "my first message", likesCount: 10},
            {id: 3, post: "Hi, haw are you?", likesCount: 11},
            {id: 4, post: "Hi, haw are you?", likesCount: 1},
            {id: 5, post: "Hi, haw are you?", likesCount: 121},
        ]
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
        ]
    }
};

export let addPost = (postMessage) => {
        let newPost = {
        id: 5,
        post: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    renderIntareTree(state);
};

export let addMessage = (messageText) => {

    let newMessageText = {
        id: 7,
        message: messageText
    };
    state.messagePage.messages.push(newMessageText);
    renderIntareTree(state);
};

export default state;

