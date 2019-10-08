import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostCreator, onPostChangeCreator} from '../../../state/profile-reducer';




const MyPosts = (props) => {
    let postElements = props.posts.map( postEl => <Post message={postEl.post} likesCount={postEl.likesCount} /> );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch( addPostCreator() );
        //props.upDatepost(''); // зануление

    };

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.dispatch(onPostChangeCreator(newText));
    };


    return(
            <div className={classes.content_myposts} >
                    <h3>myposts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea>
                    </div>
                    <div className={classes.myposts_button}>
                        <button onClick={ addPost }>Add post</button>
                    </div>
                </div>
                { postElements }
            </div>

    )
};

export default MyPosts;