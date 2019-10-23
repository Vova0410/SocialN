import React from 'react';
import Profile from "./Profile";
import {getUserProfileDAL, SetPofileData} from "../../state/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";
import {toggleIsFetcing} from "../../state/users-reducer";




class ProfileContainer extends React.Component {


    componentDidMount() {

        let userId = this.props.match.params.userId; // используем для получения id пользователя см урок 60
        if(!userId) {
            userId = 12;
        }
        this.props.getUserProfileDAL(userId);
        /*this.props.toggleIsFetcing(true);
        profileAPI.getUserProfile(userId).then(data => {  //делаем запрос на сервер
            this.props.SetPofileData(data)
       });
        this.props.toggleIsFetcing(false);*/
    }

    render () {
        return <Profile {...this.props}/>
    }
}
const mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile
    }
};

const mapDispatchToProps = (dispatch) => {
    return{

       SetPofileData(profile) {
           dispatch(SetPofileData(profile))
       },
        toggleIsFetcing(isFetching) {
            dispatch(toggleIsFetcing(isFetching))
        },
        getUserProfileDAL(userId) {
           dispatch(getUserProfileDAL(userId))
        }
    }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);