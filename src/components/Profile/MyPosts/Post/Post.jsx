import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {

    return(
            <div className={classes.content_post} >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GcvltEcK8FCzX_72ZsFqVLHJ7DjHKFViaLIais7bIkHdpq_-" alt=""/>
                {props.message}
                <div className={classes.content_post_likesCount}>
                    &#10084; <span>{props.likesCount}</span>
                </div>
            </div>
    )
}

export default Post;