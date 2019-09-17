import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'


const Profile = () => {
    return(
        <div>
            <div className={classes.content_header}>
                <img src="http://www.fotoprizer.ru/img/290616-090500-ft.jpg" />
            </div>
            <div className={`${classes.content} ${classes.item}`}>ava + discription</div>
            <MyPosts />
        </div>
    )
}

export default Profile;