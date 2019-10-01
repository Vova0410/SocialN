import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return(
        <div className={classes.profile_wrapper}>
            <ProfileInfo />
            <MyPosts posts={props.stateProfile.posts} newPostText={props.stateProfile.newPostText} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;

/*
let dialogsElements = props.dialogs.map( dialog => (<DialogItem name={dialog.name} id={dialog.id} />) );
let messagesElements = props.messages.map( massage => <Message message={massage.message} /> )
*/
