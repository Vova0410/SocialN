import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const Dialogs = (props) => {
    return (
    <div className={classes.dialogs_wrapper}>
        <div className={classes.dialogs_items}>
            <div className={classes.dialog}>
                <NavLink to="/dialogs/1">Dima</NavLink>
            </div>
            <div className={classes.dialog}>
                <NavLink to="/dialogs/2">Vova</NavLink>
            </div>
            <div className={classes.dialog}>
                <NavLink to="/dialogs/3">Natasha</NavLink>
            </div>
            <div className={classes.dialog}>
                <NavLink to="/dialogs/4">Dasha</NavLink>
            </div>
            <div className={classes.dialog}>
                <NavLink to="/dialogs/5">Den</NavLink>
            </div>
        </div>
        <div className={classes.dialogs_messages}>
            <div className={classes.message}>
                Hi!
            </div>
            <div className={classes.message}>
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
            </div>
            <div className={classes.message}>
                Hi!
            </div>
            <div className={classes.message}>
                Lorem Ipsum - это текст-"рыба", часто используемый
            </div>
            <div className={classes.message}>
                Hi!
            </div>
            <div className={classes.message}>
                Hi!
            </div>
        </div>
    </div>
    )
}

export default Dialogs;