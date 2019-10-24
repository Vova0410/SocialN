import React from 'react';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import './App.css';
import {Route}  from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
    return (

      <div className="app_wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app_wrapper_content">
            <Route path='/profile/:userId?' render={ () => <ProfileContainer  />} />
            <Route path='/dialogs' render={ () => <DialogsContainer  /> } />
            <Route path='/users' render={ () => <UsersContainer /> } />
            <Route path='/news' component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/login" component={Login}/>

        </div>
      </div>


);
};





export default App;

/*store={props.store}*/
/*store={props.store}*/

/*stateDialogs={props.state.messagePage} dispatch={props.dispatch}*/