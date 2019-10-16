import React from 'react';
import {followedAC, setUsersAC, unfollowedAC} from "../../state/users-reducer";
import connect from "react-redux/es/connect/connect";
import Users from "./UsersC";

const mapStateToProps = (state) => {
    return {users: state.usersPage.users}
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followedAC(userId))
        },

        unfollow: (userId) => {
            dispatch(unfollowedAC(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
