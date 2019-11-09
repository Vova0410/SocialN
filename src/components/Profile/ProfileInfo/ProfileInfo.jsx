import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from '../../../img/empty.png';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    let isOwner = () => (props.meId === props.profile.userId) ? true : false ;
    console.log(`isOwner: ${isOwner()}` );
const onMainPhotoSelected = (e) => {
     if(e.target.files.length) {
         props.savePhoto(e.target.files[0])
     }
};
    return (
        <>
        <div className={classes.ProfileSettings}>{isOwner() && <input type="file" placeholder="" onChange={onMainPhotoSelected}/>}</div>
        <div className={classes.profileInfo_wrapper}>
            <div className={classes.content_header}>
                <img src="http://www.fotoprizer.ru/img/290616-090500-ft.jpg" alt="backgroundPhoto"/>

                <div className={classes.avatar_photo} >
                    <img src={props.profile.photos.large || userPhoto} alt="ava"/>
                </div >

                <div className={classes.fullName}>{props.profile.fullName}</div>
                <div className={classes.status}><ProfileStatus isOwner={isOwner} status={props.status}
                                                               upDateStateDAL={props.upDateStateDAL}/></div>
            </div>

        </div>
        </>


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
