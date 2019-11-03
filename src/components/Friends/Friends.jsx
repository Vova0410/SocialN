import React from 'react';
import userPhoto from '../../img/empty.png';
import classes from './Friends.module.css';
import {NavLink} from "react-router-dom";



const Friends = (props) => {
    return (

            <div className={classes.friendsData_item}>

                {
                    props.friends.map((friend) => {
                        return (
                            <div key={friend.id} >

                                <div className={classes.friendsPhoto}>
                                    <NavLink to={"/profile/" + friend.id}
                                             onClick={e => props.getUserProfileDAL(friend.id)}>
                                        <img src={friend.photos.large || userPhoto} alt="friend"/>
                                    </NavLink>
                                </div>

                                <div className={classes.friendsName}>{friend.name} </div>
                            </div>
                        )
                    })
                }
            </div>
    )

};



export default Friends;

