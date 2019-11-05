import React from 'react';
import Profile from "./Profile";
import {
    getUserProfileDAL, SetPofileData, getUserStatusDAL, upDateStateDAL, saveProfileDAL, savePhotoDAL
} from "../../state/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {toggleIsFetcing} from "../../state/users-reducer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";





class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId; // используем для получения id пользователя см урок 60
        if(!userId) {
            userId = this.props.meId;
        }
        this.props.getUserProfileDAL(userId); // thunk from profile-reducer.js
        this.props.getUserStatusDAL(userId);  // thunk from profile-reducer.js
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId)
        this.refreshProfile()
    }
    render () {
        return <Profile {...this.props}/>
    }
}



const mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        meId: state.auth.id
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
        },
        getUserStatusDAL(userId) {
            dispatch(getUserStatusDAL(userId))
        },
        upDateStateDAL(status) {
            dispatch(upDateStateDAL(status))
        },
        saveProfile(profile) {
           dispatch(saveProfileDAL(profile))
        },
        savePhoto(photoFile) {
           dispatch(savePhotoDAL(photoFile))
        }
    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)

/*                               code deleted as a result of creation 'compose'
let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);*/


/*                              code deleted as a result of creation НОС
 const mapStateToPropsForRedirect = (state) => ({
 isAuth: state.auth.isAuth
 });
 AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)
 */


/*let AuthRedirectComponent = (props) => {   // создаем контейнерную компоненту, for redirect, которую потом поместим в НОС
 if(props.isAuth === false) return <Redirect to="login/"/>;
 return <ProfileContainer {...props}/>
 };*/


/* код при создании запросов на сервер
 this.props.toggleIsFetcing(true);
 profileAPI.getUserProfile(userId).then(data => {  //делаем запрос на сервер
 this.props.SetPofileData(data)
 });
 this.props.toggleIsFetcing(false);*/
