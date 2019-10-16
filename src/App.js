import React from 'react';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import './App.css';
import {Route}  from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (

      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className="app_wrapper_content">
            <Route path='/profile' render={ () => <Profile  />} />
            <Route path='/dialogs' render={ () => <DialogsContainer  /> } />
            <Route path='/users' render={ () => <UsersContainer /> } />
            <Route path='/news' component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>

        </div>
      </div>


);
};





export default App;

/*store={props.store}*/
/*store={props.store}*/

/*stateDialogs={props.state.messagePage} dispatch={props.dispatch}*/