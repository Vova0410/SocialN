import React from 'react';
import classes from './Preloader.module.css';
import preloader from '../../img/Preloader.svg'


const Preloader = (props) => {

    return (
        <div className={classes.preloader_wrapper}>
            <img src={preloader} className={classes.preloader}/>
        </div>
    )
}
export default Preloader;