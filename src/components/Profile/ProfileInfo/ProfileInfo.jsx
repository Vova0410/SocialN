import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div >
            <div className={classes.content_header}>
                <img src="http://www.fotoprizer.ru/img/290616-090500-ft.jpg"/>
            </div>
            <div className ={`${classes.content_logoDescrip} ${classes.item}`}>
                ava + discription
            </div >
        </div>
    )
};

export default ProfileInfo;