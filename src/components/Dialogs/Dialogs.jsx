import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Vova'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Natasha'},
        {id: 4, name: 'Tom'},
        {id: 5, name: 'Vera'},
    ];

    let messagesData = [
        {id: 1, message: "Hi!1111"},
        {id: 2, message: "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является"},
        {id: 3, message: "Hi"},
        {id: 4, message: "Lorem Ipsum - это текст-'рыба', часто используемый"},
        {id: 5, message: "Hi1@@@@@@@@@@2"},
        {id: 6, message: "Hi2222222222"},
    ];

    let dialogsElements = dialogsData.map( dialog => (<DialogItem name={dialog.name} id={dialog.id} />) );
    let messagesElements = messagesData.map( massage => <Message message={massage.message} /> )

    return (
    <div className={classes.dialogs_wrapper}>
        <div className={classes.dialogs_items}>
            { dialogsElements }
        </div>
        <div className={classes.dialogs_messages}>
            { messagesElements }
        </div>
    </div>
    )
};

export default Dialogs;