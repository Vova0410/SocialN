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

    let postElements = postsData.map( postEl => <Post message={postEl.post} likesCount={postEl.likesCount} /> );
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
                { postElements }
            </div>

    )
};

export default MyPosts;