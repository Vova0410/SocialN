import React from 'react';
import Profile from "./Profile";
import * as axios from 'axios';
import {SetPofileData} from "../../state/profile-reducer";
import {connect} from "react-redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
       axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(respons => {

           this.props.SetPofileData(respons.data)
       })
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
       }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);