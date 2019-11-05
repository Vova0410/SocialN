import React from 'react';
import {
    followed, setTotaUsersCount,
    unfollowed, toggleisDisabling, getUsersThunkCreator, changePageThankCreator, followThunkCreator,
    unFollowThunkCreator
} from '../../state/users-reducer';
import connect from 'react-redux/es/connect/connect';
import Users from './Users';
import Preloader from "../Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getisDisabling, getIsFetching, getPageSize, getTotalUsersCount,
    getUsers
} from "../../state/users-selectors";


class UsersApiContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersDAL(this.props.currentPage, this.props.pageSize)
    }

    onPageChange(pageNum) {
        this.props.changePageDAL(pageNum, this.props.pageSize)
    }


    render() {
        return <>
        {this.props.isFetching ? <Preloader /> : null}

        <Users totalUsersCount = {this.props.totalUsersCount}
               pageSize = {this.props.pageSize}
               currentPage = {this.props.currentPage}
               users = {this.props.users}
               onPageChange = {this.onPageChange.bind(this)}
               followed = {this.props.followed}
               unfollowed = {this.props.unfollowed}
               isFetcing = {this.props.isFetcing}
               isDisabling = {this.props.isDisabling}
               toggleisDisabling = {this.props.toggleisDisabling}
               followDAL = {this.props.followDAL}
               unFollowDAL = {this.props.unFollowDAL}
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
 isFetching: state.usersPage.isFetching,
 isDisabling: state.usersPage.isDisabling,

 }
 };

/*
const mapStateToProps = (state) => { // use selectors from users-selectors.js
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isDisabling: getisDisabling(state),

    }
};
*/

export default compose(
    connect(mapStateToProps, {followed, setTotaUsersCount, unfollowed, toggleisDisabling,
            getUsersDAL: getUsersThunkCreator, changePageDAL: changePageThankCreator,
            followDAL: followThunkCreator, unFollowDAL: unFollowThunkCreator}),
    WithAuthRedirect
)(UsersApiContainer)





/*
let AuthRedirectComponent = WithAuthRedirect(UsersApiContainer);
const UsersContainer = connect(mapStateToProps, {followed, setTotaUsersCount, unfollowed, toggleisDisabling,
        getUsersDAL: getUsersThunkCreator, changePageDAL: changePageThankCreator,
        followDAL: followThunkCreator, unFollowDAL: unFollowThunkCreator})(AuthRedirectComponent);
export default UsersContainer;
*/


/*this.props.toggleIsFetcing(true);
 this.props.changeCurrentPage(pageNum);
 userAPI.changeUser(pageNum, this.props.pageSize)
 .then (data => {
 this.props.setUsers(data.items);
 this.props.toggleIsFetcing(false);
 })*/



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
