import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = () => {
    return(
            <div className={classes.content_myposts} >
                    myposts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
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