import React from 'react';

import Dialogs from './Dialogs';
import {addMessageCreator, onMessageChangeCreator} from '../../state/dialog-reducer';




const DialogsContainer = (props) => {
    let state = props.store.getState();


let newMessageText = React.createRef();

let addMessage = () => {
    //let text = newMessageText.current.value;
    props.store.dispatch( addMessageCreator() );
};

let onMessageChange = (newMess) => {
    props.store.dispatch( onMessageChangeCreator(newMess) );
};

    return < Dialogs dialogs={state.messagePage.dialogs}
                     messages={state.messagePage.messages}
                     newMessageVal={state.messagePage.newMessageVal}
                     addMessageCont={addMessage}
                     upDateMessageChange={onMessageChange} />
};

export default DialogsContainer;