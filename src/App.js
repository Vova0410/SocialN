import React from 'react';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route, withRouter}  from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import FriendsContainer from "./components/Friends/FriendsContainer";
import './App.css'
import {initializeApp} from "./state/app-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/Preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (


            <div className='app_wrapper'>
                <div className='app_header'>
                    <HeaderContainer />
                </div>
                <div className='app_content'>

                    <div className='content_container'>
                        <div className='navbar_wrapper'>
                            <Navbar />
                        </div>

                        <div id='main_content'>
                            <Route path='/profile/:userId?' render={ () => <ProfileContainer  />} /> {/*//? в конце адреса улает адрес опциональным, не обязательным.*/}
                            <Route path='/dialogs' render={ () => <DialogsContainer  /> } />
                            <Route path='/users' render={ () => <UsersContainer /> } />
                            <Route path="/friends" render={ () =><FriendsContainer />} />
                            <Route path='/news' component={News}/>
                            <Route path="/music" component={Music}/>
                            <Route path="/settings" component={Settings}/>
                            <Route path="/" render={ () => <Login/>}/>

                        </div>
                    </div>
                </div>
            </div>


        );
    };

}

const mapStateToProps = (state) => {
    return({
        initialized: state.app.initialized
    })
};

export default compose(
    withRouter,
    connect(mapStateToProps,{initializeApp})
)(App);

/*store={props.store}*/
/*store={props.store}*/

/*stateDialogs={props.state.messagePage} dispatch={props.dispatch}*/