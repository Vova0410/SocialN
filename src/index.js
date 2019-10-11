import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './state/redux-store';
import{BrowserRouter} from 'react-router-dom';
import {MyContext} from './MyContext';
import Provider from "react-redux/es/components/Provider";


    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App  />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));




 // If you want your app to work offline and load faster, you can change
 // unregister() to register() below. Note this comes with some pitfalls.
 // Learn more about service workers: https://bit.ly/CRA-PWA
 serviceWorker.unregister();


/*store={store}*/


/*state={store.getState()}
 dispatch={store.dispatch.bind(store)}*/