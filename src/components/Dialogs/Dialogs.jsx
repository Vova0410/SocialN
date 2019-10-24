import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

let dialogsElements = props.dialogs.map( dialogEl => <DialogItem key={dialogEl.id} name={dialogEl.name} id={dialogEl.id} />);
let messagesElements = props.messages.map( messEl => <Message key={messEl.id} name={messEl.message} id={messEl.id} />);

let newMessageText = React.createRef();

let addMessage = () => {
    props.addMessageCont();
};

let onMessageChange = () => {
    let newMess = newMessageText.current.value;
    props.upDateMessageChange(newMess);
};

    return (
    <div className={classes.dialogs_wrapper}>
        <div className={classes.dialogs_items}>
            { dialogsElements }
        </div>
        <div className={classes.dialogs_messages}>
            { messagesElements }
            <div className={classes.message_addMessage_text}>
                <textarea ref={newMessageText} onChange={onMessageChange} value={props.newMessageVal}></textarea>
            </div>
            <div className={classes.message_addMessage_button}>
                <button onClick={ addMessage }>add message</button>
            </div>

        </div>

    </div>
    )
};

export default Dialogs;