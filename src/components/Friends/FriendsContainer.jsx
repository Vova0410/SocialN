import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getFriendsDataDAL} from "../../state/friends-reducer";
import {getUserProfileDAL} from "../../state/profile-reducer";



class FriendsContainer extends React.Component{

    componentDidMount() {
        this.props.getFriendsDataDAL( this.props.currentPage ,this.props.pageSize, function () {

        }  );


        /*let pagesCounter = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        for( let i = 2; i <= pagesCounter; i++) {
            setTimeout(this.props.getFriendsDataDAL( i ,this.props.pageSize ), 10000)
        }*/

    }


    render() {
        return (
                <Friends {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.frindePage.friends,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount
    }
};

let withRouterFriendsContainer = withRouter(FriendsContainer);

export default connect(mapStateToProps,{getFriendsDataDAL: getFriendsDataDAL, getUserProfileDAL: getUserProfileDAL})(withRouterFriendsContainer);