import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <header className={classes.header_wrapper}>
            <div className={classes.header_inner}>
                <div className={classes.header_logo}></div>

                    <div className={classes.header_login}>
                        {
                            props.isAuth
                                ? <div> {props.login} <button onClick={props.logOutL}>Log Out</button> </div>
                                : <NavLink className={classes.navlink_login} to="/">Login</NavLink>
                        }

                    </div>

            </div>
        </header>
    )
};

export default Header;
