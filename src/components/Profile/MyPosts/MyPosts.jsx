import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = (props) => {

    let postsData = [
        {id: 1, post: "Hi, haw are you?", likesCount: 12},
        {id: 2, post: "my first message", likesCount: 10},
        {id: 3, post: "Hi, haw are you?", likesCount: 11},
        {id: 4, post: "Hi, haw are you?", likesCount: 1},
        {id: 5, post: "Hi, haw are you?", likesCount: 121},
    ];
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
                <Post message={postsData[0].post} likesCount={postsData[0].likesCount} />
                <Post message={postsData[1].post} likesCount={postsData[1].likesCount} />
                <Post message={postsData[2].post} likesCount={postsData[2].likesCount} />
                <Post message={postsData[3].post} likesCount={postsData[3].likesCount} />
                <Post message={postsData[4].post} likesCount={postsData[4].likesCount} />

            </div>

    )
};

export default MyPosts;