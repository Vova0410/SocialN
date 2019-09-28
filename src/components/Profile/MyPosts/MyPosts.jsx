import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'



const MyPosts = (props) => {
    let postElements = props.posts.map( postEl => <Post message={postEl.post} likesCount={postEl.likesCount} /> );

    let newPostElement = React.createRef();

    let addPost1 = () => {
        let text=newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };


    return(
            <div className={classes.content_myposts} >
                    <h3>myposts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div className={classes.myposts_button}>
                        <button onClick={ addPost1 }>Add post</button>
                    </div>
                </div>
                { postElements }
            </div>

    )
};

export default MyPosts;