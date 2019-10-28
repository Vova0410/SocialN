import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";

let AddNewMessageForm = (props) => {
    const { handleSubmit } = props
    return(
        <form onSubmit={handleSubmit}>
            <div className={classes.message_addMessage_text}>
                        <Field name="dialog" component="textarea" type="text"
                               placeholder={"enter your message"} />
            </div>
            <div className={classes.message_addMessage_button}>
                <button>add message</button>
            </div>
        </form>
    )
};

AddNewMessageForm = reduxForm({form: "dialog"})(AddNewMessageForm);



const Dialogs = (props) => {
    const submit = value => {
        props.addMessageCont(value.dialog);
        /*console.log(value)*/
    };

    let dialogsElements = props.dialogs.map(dialogEl => <DialogItem key={dialogEl.id} name={dialogEl.name}
                                                                    id={dialogEl.id}/>);
    let messagesElements = props.messages.map(messEl => <Message key={messEl.id} name={messEl.message}
                                                                 id={messEl.id}/>);


    /*let addMessage = () => {
        props.addMessageCont();
    };

    let onMessageChange = (e) => {
        let newMess = e.currentTarget.value;
        props.upDateMessageChange(newMess);
    };
*/
    return (
        <div className={classes.dialogs_wrapper}>
            <div className={classes.dialogs_items}>
                { dialogsElements }
            </div>
            <div className={classes.dialogs_messages}>
                { messagesElements }

                <AddNewMessageForm onSubmit={submit}/>

            </div>

        </div>
    )
};

export default Dialogs;