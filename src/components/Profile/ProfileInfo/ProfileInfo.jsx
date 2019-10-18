import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div className={classes.profileInfo_wrapper}>
            <div className={classes.content_header}>
                <img src="http://www.fotoprizer.ru/img/290616-090500-ft.jpg"/>
                <div className={classes.avatar_photo}>
                    <img src={props.profile.photos.large} alt="AvatarPhoto"/>
                </div >
                <div className={classes.fullName}>{props.profile.fullName}</div>
                <div className={classes.status}>{props.profile.aboutMe}</div>
            </div>

        </div>
    )
};

export default ProfileInfo;