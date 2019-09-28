import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {


let dialogsElements = props.stateDialogs.dialogs.map( dialogEl => <DialogItem name={dialogEl.name} id={dialogEl.id} />);
let messagesElements = props.stateDialogs.messages.map( messEl => <DialogItem name={messEl.message} id={messEl.id} />);

let newMessageText = React.createRef();

let addMessage1 = () => {

    let text = newMessageText.current.value;
    props.addMessage(text);
    newMessageText.current.value = '';

};

    return (
    <div className={classes.dialogs_wrapper}>
        <div className={classes.dialogs_items}>
            { dialogsElements }
        </div>
        <div className={classes.dialogs_messages}>
            { messagesElements }
            <div className={classes.message_addMessage_text}>
                <textarea ref={newMessageText}></textarea>
            </div>
            <div className={classes.message_addMessage_button}>
                <button onClick={ addMessage1 }>add message</button>
            </div>

        </div>

    </div>
    )
};

export default Dialogs;