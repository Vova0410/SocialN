import React from 'react';
import userPhoto from '../../img/empty.png';
import classes from './Friends.module.css';


class Friends extends React.Component {

    render() {
        return (
            <>
            <p>FRIENDS</p>
            <div className={classes.friendsData_wrapper}>

                <div>
                    <div className={classes.friendsPhoto}>
                        <img src={userPhoto} alt="friend"/>
                    </div>
                    <p className={classes.friendsName}>Users name </p>
                </div>

                <div>
                <div className={classes.friendsPhoto}>
                    <img src={userPhoto} alt="friend"/>
                </div>
                <p className={classes.friendsName}>Users name </p>
            </div>

                <div>
                    <div className={classes.friendsPhoto}>
                        <img src={userPhoto} alt="friend"/>
                    </div>
                    <p className={classes.friendsName}>Users name </p>
                </div>

                <div>
                    <div className={classes.friendsPhoto}>
                        <img src={userPhoto} alt="friend"/>
                    </div>
                    <p className={classes.friendsName}>Users name </p>
                </div>

                <div>
                    <div className={classes.friendsPhoto}>
                        <img src={userPhoto} alt="friend"/>
                    </div>
                    <p className={classes.friendsName}>Users name </p>
                </div>

                <div>
                    <div className={classes.friendsPhoto}>
                        <img src={userPhoto} alt="friend"/>
                    </div>
                    <p className={classes.friendsName}>Users name </p>
                </div>

            </div>
            </>
        )

    }
}
export default Friends;