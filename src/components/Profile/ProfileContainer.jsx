import React from 'react';
import Profile from "./Profile";
import {getUserProfileDAL, SetPofileData} from "../../state/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {toggleIsFetcing} from "../../state/users-reducer";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";





class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId; // используем для получения id пользователя см урок 60
        if(!userId) {
            userId = 12;
        }
        this.props.getUserProfileDAL(userId);
    }

    render () {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return{ profile: state.profilePage.profile }
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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    WithAuthRedirect
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
