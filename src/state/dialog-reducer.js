const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
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

};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{

            let newMessageText = {
                id: 7,
                message: action.newMessageVal
            };
            return {
                ...state,
                messages: [...state.messages, newMessageText],

            }
        }
        default: return state;
    }
};

export const addMessageCreator = (newMessageVal) => {
    return { type: ADD_MESSAGE, newMessageVal: newMessageVal };
};


 export default dialogReducer;


/*if( action.type === ADD_MESSAGE ) {
 let newMessageText = {
 id: 7,
 message: state.newMessageVal
 };
 state.messages.push(newMessageText);
 state.newMessageVal = ''; // обнуляем

 }

 else if( action.type === UP_DATE_MESSAGE ) {
 state.newMessageVal = action.newMess;

 }

 return state;*/
