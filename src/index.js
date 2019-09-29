import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import state from './state/state';
import {addPost, addMessage, upDatepost, upDataMessage, subscribe} from './state/state';
import{BrowserRouter} from 'react-router-dom';

let renderIntareTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
         <App state={state}
              addPost={addPost}
              addMessage={addMessage}
              upDatepost={upDatepost}
              upDataMessage={upDataMessage} />
        </BrowserRouter>,
        document.getElementById('root'));
};
renderIntareTree(state);
subscribe(renderIntareTree);



 // If you want your app to work offline and load faster, you can change
 // unregister() to register() below. Note this comes with some pitfalls.
 // Learn more about service workers: https://bit.ly/CRA-PWA
 serviceWorker.unregister();


