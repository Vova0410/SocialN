import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form'



let AddNewPostForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field  name="ProfileAddNewPostForm" component="textarea" type="text" placeholder={'post message'}/>
            </div>
            <div className={classes.myposts_button}>
                <button>Add post</button>
            </div>
        </form>
    )
};

AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);




const MyPosts = (props) => {
    const onPostChange = value => {

        props.addPost(value.ProfileAddNewPostForm);
    };

    let postElements = props.posts.map( postEl => <Post key={postEl.id} message={postEl.post} likesCount={postEl.likesCount} /> );



    return(
            <div className={classes.myposts_wrapper} >
                    <h3>myposts</h3>
                    <AddNewPostForm onSubmit={onPostChange} />
                { postElements }
            </div>

    )
};

export default MyPosts;

/*let onAddPost = () => {
 props.addPost(''); // зануление

 };

 /!*let onPostChange = (e) => {
 let newText = e.currentTarget.value;
 props.upDateNewPosttext(newText);
 };
 *!/*/