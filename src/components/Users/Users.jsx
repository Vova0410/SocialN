import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../img/empty.png';
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <h3>Users</h3>
        <div className={classes.users_wrapper}>
            <div className={classes.pages_wrapper}>
                <div className={classes.pages_inner}>
                    {
                        pages.map((p) => {
                            return (
                                <span key={p}
                                    className={(props.currentPage === p) ? classes.selectedPage : classes.unselectedPage}
                                    onClick={(e) => {
                                        props.onPageChange(p)
                                    }}>{p}</span>
                            )
                        })
                    }
                </div>
            </div>
            {
                props.users.map((user) => {
                    return (
                        <div key={user.id} className={classes.users_items}>
                            <div className={classes.users_photo}>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={ user.photos.small !== null ? user.photos.small : userPhoto} alt="ava"/>
                                </NavLink>
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
                                        ? <button disabled={props.isDisabling.some(id => id === user.id)} className={classes.follow_button}
                                                  onClick={ () => {
                                                      props.followDAL(user.id);
                                                      /*props.toggleisDisabling(true, user.id);
                                                      followAPI.deleteFollow(user.id)
                                                          .then(data => {
                                                              if (data.resultCode === 0) {
                                                                  props.unfollowed(user.id)
                                                              }
                                                              props.toggleisDisabling(false, user.id);
                                                          });*/


                                                  }}>unfollow</button>
                                        : <button disabled={props.isDisabling.some(id => id === user.id)} className={classes.unfollow_button}
                                                  onClick={ () => {
                                                      props.unFollowDAL(user.id)
                                                      /*props.toggleisDisabling(true, user.id);
                                                      followAPI.setFollow(user.id)
                                                          .then(data => {
                                                              if (data.resultCode === 0) {
                                                                  props.followed(user.id)
                                                              }
                                                              props.toggleisDisabling(false, user.id);
                                                          })*/

                                                  }}>follow</button>
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