import React from 'react';
import Profile from "./Profile";
import * as axios from 'axios';
import {SetPofileData} from "../../state/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 12;
        }
       axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(respons => {

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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);