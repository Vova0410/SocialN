import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (

        <div className={classes.profileInfo_wrapper}>
            <div className={classes.content_header}>
                <img src="http://www.fotoprizer.ru/img/290616-090500-ft.jpg" alt="backgroundPhoto"/>
                <div className={classes.avatar_photo}>
                    <img src={props.profile.photos.large} alt="AvatarPhoto"/>
                </div >
                <div className={classes.fullName}>{props.profile.fullName}</div>
                <div className={classes.status}><ProfileStatus status="Hello!"/></div>
            </div>
        </div>


    )
};

export default ProfileInfo;


/*class ProfileInfo extends React.Component {

 render() {
 if(!props.profile) {
 return <Preloader />
 return (
 <div className={classes.profileInfo_wrapper}>
 <div className={classes.content_header}>
 <img src="http://www.fotoprizer.ru/img/290616-090500-ft.jpg"/>
 <div className={classes.avatar_photo}>
 <img src={this.props.profile.photos.large} alt="AvatarPhoto"/>
 </div >
 <div className={classes.fullName}>{this.props.profile.fullName}</div>
 <div className={classes.status}>{this.props.profile.aboutMe}</div>
 </div>

 </div>
 )
 }




 }
 }
 export default ProfileInfo;*/
