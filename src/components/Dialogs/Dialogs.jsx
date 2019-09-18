import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return(
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return(
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

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

    return (
    <div className={classes.dialogs_wrapper}>
        <div className={classes.dialogs_items}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogItem name={dialogsData[2].naem} id={dialogsData[2].id} />
            <DialogItem name={dialogsData[3].naem} id={dialogsData[3].id} />
            <DialogItem name={dialogsData[4].naem} id={dialogsData[4].id} />
        </div>
        <div className={classes.dialogs_messages}>
            <Message message={messagesData[0].message} />
            <Message message={messagesData[1].message}/>
            <Message message={messagesData[2].message} />
            <Message message={messagesData[3].message} />
            <Message message={messagesData[4].message} />
            <Message message={messagesData[5].message} />

        </div>
    </div>
    )
};

export default Dialogs;