import React from 'react';
import Header from "./Header";
import * as axios from 'axios';
import {setAuthUsersData} from "../../state/auth-reducer";
import {connect} from "react-redux";
import {authAPI} from "../../api/api";



class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.getUsersAuthData().then(data => {
                if(data.resultCode === 0) {
                    this.props.setAuthUsersData(data.data.id, data.data.login, data.data.email);
                }

        })
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
};

let mapDispatchToProps = (dispatch) => {
    return {
        setAuthUsersData(id, login, email) {
            dispatch(setAuthUsersData(id, login, email))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);