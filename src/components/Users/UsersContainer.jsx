import React from 'react';
import {
    changeCurrentPage, followed, setUsers, toggleIsFetcing, setTotaUsersCount,
    unfollowed
} from '../../state/users-reducer';
import connect from 'react-redux/es/connect/connect';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../Preloader/Preloader";

class UsersApiContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(respons => {
            this.props.toggleIsFetcing(true);
            this.props.setUsers(respons.data.items);
            this.props.setTotaUsersCount(respons.data.totalCount);
            this.props.toggleIsFetcing(false);
        })
    }

    onPageChange(pageNum) {
        this.props.toggleIsFetcing(true);
        this.props.changeCurrentPage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then(respons => {
            this.props.setUsers(respons.data.items);
            this.props.toggleIsFetcing(false);
        })
    }


    render() {


        return <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               onPageChange={this.onPageChange.bind(this)}
               followed={this.props.followed}
               unfollowed={this.props.unfollowed}
               isFetcing={this.props.isFetcing}
        />
        </>
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

/*const mapDispatchToProps = (dispatch) => {
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
        },
        toggleIsFetcing: (isFetching) => {
            dispatch(toggleIsFetcingAC(isFetching))
        }
    }
};*/

const UsersContainer = connect(mapStateToProps, {changeCurrentPage, followed, setUsers, toggleIsFetcing, setTotaUsersCount, unfollowed})(UsersApiContainer);

export default UsersContainer;
