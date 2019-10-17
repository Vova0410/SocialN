import React from 'react';
import {ChangeCurrentPageAC, followedAC, setUsersAC, totalUsersCountAC, unfollowedAC} from "../../state/users-reducer";
import connect from "react-redux/es/connect/connect";
import * as axios from 'axios';
import Users from "./Users";

class UsersApiContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(respons => {
            this.props.setUsers(respons.data.items);
            this.props.setTotaUsersCount(respons.data.totalCount);
        })
    }

    onPageChange(pageNum) {

        this.props.changeCurrentPage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then(respons => {
            this.props.setUsers(respons.data.items);
        })
    }


    render() {


        return <Users   totalUsersCount = {this.props.totalUsersCount}
                        pageSize = {this.props.pageSize}
                        currentPage = {this.props.currentPage}
                        users = {this.props.users}
                        onPageChange = {this.onPageChange.bind(this)}
                        follow = {this.props.follow}
                        unfollow = {this.props.unfollow}
        />
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
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
        },
        setTotaUsersCount: (totalCount) => {
           dispatch(totalUsersCountAC(totalCount))
        },
        changeCurrentPage: (currentPage) => {
            dispatch(ChangeCurrentPageAC(currentPage))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer);

export default UsersContainer;
