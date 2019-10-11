import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './state/redux-store';
import{BrowserRouter} from 'react-router-dom';
import {MyContext} from './MyContext';

let renderIntareTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <MyContext.Provider value={store}>
                <App  />
            </MyContext.Provider>
        </BrowserRouter>,
        document.getElementById('root'));
};
renderIntareTree(store.getState());
store.subscribe(renderIntareTree);



 // If you want your app to work offline and load faster, you can change
 // unregister() to register() below. Note this comes with some pitfalls.
 // Learn more about service workers: https://bit.ly/CRA-PWA
 serviceWorker.unregister();


/*store={store}*/


/*state={store.getState()}
 dispatch={store.dispatch.bind(store)}*/