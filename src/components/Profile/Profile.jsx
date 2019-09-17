import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {
    return(
        <div className={classes.profile_wrapper}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;