import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsComponent from "./MyPosts/MyPostsContainer";


const Profile = () => {

    return(
        <div className={classes.profile_wrapper}>
            <ProfileInfo />
            <MyPostsComponent />

        </div>
    )
}

export default Profile;

/*
let dialogsElements = props.dialogs.map( dialog => (<DialogItem name={dialog.name} id={dialog.id} />) );
let messagesElements = props.messages.map( massage => <Message message={massage.message} /> )
*/



/*posts={props.stateProfile.posts} newPostText={props.stateProfile.newPostText} dispatch={props.dispatch}*/