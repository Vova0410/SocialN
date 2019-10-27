import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsComponent from "./MyPosts/MyPostsContainer";



const Profile = (props) => {



    return(
        <div className={classes.profile_wrapper}>
            <ProfileInfo profile={props.profile} status={props.status} upDateStateDAL={props.upDateStateDAL}/>
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