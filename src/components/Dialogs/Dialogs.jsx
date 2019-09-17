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
    return (
    <div className={classes.dialogs_wrapper}>
        <div className={classes.dialogs_items}>
            <DialogItem name="Vova" id="1"/>
            <DialogItem name="Vlad" id="2"/>
            <DialogItem name="Natasha" id="3"/>
            <DialogItem name="Tom" id="4"/>
            <DialogItem name="Vera" id="5"/>
        </div>
        <div className={classes.dialogs_messages}>
            <Message message="Hi!1111" />
            <Message message="Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является" />
            <Message message="Hi" />
            <Message message="Lorem Ipsum - это текст-'рыба', часто используемый" />
            <Message message="Hi1@@@@@@@@@@2" />
            <Message message="Hi2222222222" />

        </div>
    </div>
    )
}

export default Dialogs;