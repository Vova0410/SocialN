import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = () => {
    return(
            <div className={classes.content_myposts} >
                    <h3>myposts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div className={classes.myposts_button}>
                        <button>Add post</button>
                    </div>
                </div>
                <Post message="Hi, haw are you?" />
                <Post message="my first message" />
                <Post />
                <Post />
                <Post />

            </div>

    )
}

export default MyPosts;