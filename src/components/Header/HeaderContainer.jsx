import React from 'react';
import Header from "./Header";
import {getUsersAuthDataDAL, setAuthUsersData} from "../../state/auth-reducer";
import {connect} from "react-redux";




class HeaderContainer extends React.Component {

    componentDidMount() {
/*if()*/
        this.props.getUsersAuthDataDAL()
    }

    render () {
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setAuthUsersData(id, login, email) {
            dispatch(setAuthUsersData(id, login, email))
        },
        getUsersAuthDataDAL(id, login, email) {
            dispatch(getUsersAuthDataDAL(id, login, email))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);