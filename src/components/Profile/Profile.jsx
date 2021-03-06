import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import FriendsContainer from "../Friends/FriendsContainer";
import ProfileInfoDescription from "./ProfileInfo/ProfileInfoDescription";




const Profile = (props) => {
    const profileClass = true;


    return (
        <div className={classes.profile_wrapper}>
            <div className={classes.profile_info_wrapper}>
                <ProfileInfo savePhoto={props.savePhoto} meId={props.meId} profile={props.profile} status={props.status} upDateStateDAL={props.upDateStateDAL}/>
            </div>
            <div className={classes.profile_content_wrapper}>
                <div className={classes.friends_items}>
                    <div className={classes.friends_wrapper}>
                        <p>FRIENDS</p>
                        <div className={classes.friendData_wrapper}>
                            <FriendsContainer profileClass={profileClass}/>
                        </div>
                    </div>
                </div>
                <div className={classes.posts_items}>
                    <ProfileInfoDescription meId={props.meId} profile={props.profile} status={props.status} saveProfile={props.saveProfile}/>
                </div>
            </div>
        </div>

    )
}

export default Profile;

/*
 let dialogsElements = props.dialogs.map( dialog => (<DialogItem name={dialog.name} id={dialog.id} />) );
 let messagesElements = props.messages.map( massage => <Message message={massage.message} /> )
 */



/*posts={props.stateProfile.posts} newPostText={props.stateProfile.newPostText} dispatch={props.dispatch}*/