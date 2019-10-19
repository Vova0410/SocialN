import React from 'react';
import Header from "./Header";
import * as axios from 'axios';
import {setAuthUsersData} from "../../state/auth-reducer";
import {connect} from "react-redux";



class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(respons => {
                if(respons.data.resultCode === 0) {
                    this.props.setAuthUsersData(respons.data.data.id, respons.data.data.login, respons.data.data.email);
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