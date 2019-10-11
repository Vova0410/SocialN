import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';





const MyPosts = (props) => {
    debugger;
    let postElements = props.posts.map( postEl => <Post message={postEl.post} likesCount={postEl.likesCount} /> );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        debugger;
        props.addPost(''); // зануление

    };

    let onPostChange = () => {
        debugger;
        let newText = newPostElement.current.value;
     props.upDateNewPosttext(newText);
     };


    return(
            <div className={classes.content_myposts} >
                    <h3>myposts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea>
                    </div>
                    <div className={classes.myposts_button}>
                        <button onClick={ onAddPost }>Add post</button>
                    </div>
                </div>
                { postElements }
            </div>

    )
};

export default MyPosts;