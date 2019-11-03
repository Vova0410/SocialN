import React from 'react';
import classes from './ProfileInfoDescription.module.css';
import Preloader from "../../Preloader/Preloader";
import userPhoto from '../../../img/empty.png';
import loockingJob from '../../../img/lockingjob.jpg'
import ProfileForm from "./ProfileInfoDescriptionForm";


class ProfileInfoDescription extends React.Component {
    state = {
        editMode: false,
    };

    activateEditMode = () => {
        this.setState({editMode: true})
    };
    render() {
        if (!this.props.profile) {
            return <Preloader />
        }

        let isOwner = () => (this.props.meId === this.props.profile.userId) ? true : false;
        if(this.state.editMode) {return <ProfileForm {...this.props}/>}
        return (

            <div className={classes.piDescription_wrapper}>

                <div className={classes.piDescription_fullName}>
                    <div className={classes.piDescription_fullName__img}>
                        <img src={this.props.profile.photos.small === null ? userPhoto : this.props.profile.photos.small}
                             alt="userPhoto"/>
                    </div>
                    <h2>{this.props.profile.fullName}</h2>
                </div>
                <div className={classes.piDescription_aboutMe}>
                    <b>About me:</b> {this.props.profile.aboutMe}
                </div>
                <div className={classes.loockingJob_wrapper}>
                    <div>
                        <b>Loocking for a job:</b> {
                        this.props.profile.lookingForAJob
                            ? <LoockingForJob lookJobDiscriptuon={this.props.profile.lookingForAJobDescription}/>
                            : "No!"
                    }
                    </div>
                </div>
                <div className={classes.contacts_wrapper}>
                    <b>My Contacts:</b>
                    {Object.keys(this.props.profile.contacts).map(key => {
                        return <Contacts key={key} contactKey={key} contactValue={this.props.profile.contacts[key]}/>
                    })
                    }
                </div>
                <div>
                    {
                        (isOwner()) ? <button onClick={this.activateEditMode}>edit</button> : null
                    }

                </div>
            </div>
        )
    };
}
const LoockingForJob = (props) => {
    return (
        <div className={classes.loockingJob_content}>
            <div className={classes.loockingJob_content__discription}>
                {props.lookJobDiscriptuon}
            </div>
            <div className={classes.loockingJob_content__img}>
                <img src={loockingJob} alt="loockingJob"/>
            </div>
        </div>
    )
};

const Contacts = (props) => {
    return(
        <div className={classes.contact}><span>{props.contactKey}:</span> {props.contactValue}</div>
    )
};


export default ProfileInfoDescription;