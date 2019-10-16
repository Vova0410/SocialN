/*
import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../img/empty.png';



let Users = (props) => {
const getUsers = () => {
    if (props.users.length === 0) {  //временный костыль
        axios.get('https:social-network.samuraijs.com/api/1.0/users')
            .then( respons => { props.setUsers( respons.data.items)})
    }
}


    return <div>
        <h3>Users</h3>
        <button onClick={getUsers}>Get Users</button>
        <div className={classes.users_wrapper}>
            {
                props.users.map((user) => {
                    return (
                        <div key={user.id} className={classes.users_items}>
                            <div className={classes.users_photo}>
                                <img src={ user.photos.small !== null ? user.photos.small : userPhoto} alt="ava"/>
                            </div>
                            <div className={classes.users_data}>
                                <div>
                                    <h3>{user.name}</h3>
                                    <p className={classes.users_data_status}>{user.status}</p>
                                </div>
                                <p className={classes.users_data_location}>{"user.location.city"}, {"user.location.Country"}</p>

                            </div>
                            <div className={classes.users_button}>
                                {
                                    user.followed
                                        ? <div className={classes.follow_button} onClick={ () => {props.unfollow(user.id)}}>follow</div>
                                        : <div className={classes.unfollow_button} onClick={ () => {props.follow(user.id) }}>unfollow</div>
                                }
                            </div>

                        </div>

                    )
                })
            }
        </div>
    </div>

};


export default Users;


{/!*
 <div className={classes.follow_button}>follow</div>*!/}
*/
