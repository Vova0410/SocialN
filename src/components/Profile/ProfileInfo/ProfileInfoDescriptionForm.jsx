import React from 'react';
import classes from './ProfileInfoDescription.module.css'
import {Field, reduxForm} from "redux-form";

let ProfileInfoDescriptionForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form name="edit-form" onSubmit={handleSubmit}>
            <div className={classes.piDescription_wrapper}>

                <div>
                    <div>
                        <b>Full name:</b>
                    </div>
                    <div>
                        <Field name="fullName"  type="text" placeholder="fullName" component="input"/>
                    </div>
                </div>
                <div className={classes.piDescription_aboutMe}>
                    <div>
                        <b>About me:</b>
                    </div>
                    <div className={classes.textArea}>
                        <Field name="aboutMe"  type="text" placeholder="aboutMe" component="textarea"/>
                    </div>
                </div>
                <div className={classes.loockingJob_wrapper}>
                    <div>
                        <Field name="lookingForAJob"  type="checkbox" placeholder="Your skills" component="input"/><b>Loocking for a job:</b>
                    </div>
                    <div>
                        <Field name="lookingForAJobDescription"  type="text" placeholder="lookingForAJob" component="input"/>
                    </div>
                </div>
                <div className={classes.contacts_wrapper}>
             <div>
             <b>My Contacts:</b>
             </div>
             <div className={classes.contacts_wrapper}>
             {
             Object.keys(props.profile.contacts).map(key => {
             return <div key={key}>
             <Field name={"contacts." + key}  type="text" placeholder={key} component="input"/>
             </div>
             })
             }
             </div>

             </div>
                <div className={classes.formButton}>
                    <button>Send</button>
                </div>
            </div>
        </form>
    )
};

ProfileInfoDescriptionForm = reduxForm({ //скопировал с библиотеки, подставил свои данные
    form: 'profileForm'
})(ProfileInfoDescriptionForm);

const ProfileForm = (props) => {
    const onSubmit = formData => {
        props.saveProfile(formData);
        props.deactivateEditMode();
    };
    return <ProfileInfoDescriptionForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
};

export default ProfileForm;