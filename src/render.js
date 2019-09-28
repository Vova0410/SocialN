import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from './state/state';
import {addMessage} from './state/state';
import{BrowserRouter} from 'react-router-dom';


export let renderIntareTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addMessage={addMessage} />
        </BrowserRouter>, document.getElementById('root'));
};



