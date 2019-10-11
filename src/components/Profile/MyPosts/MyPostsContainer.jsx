import React from 'react';
import {addPostCreator, onPostChangeCreator} from '../../../state/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch)=> {
    return {
        upDateNewPosttext: (newText) => {
            dispatch(onPostChangeCreator(newText));
        },
        addPost: () => {
            dispatch(addPostCreator());
        }
    }
};

const MyPostsComponent = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsComponent;



/*const MyPostsComponent = () => {


 return (
 <MyContext.Consumer>
 { (store) => {
 let state = store.getState();

 let addPost = () => {
 store.dispatch( addPostCreator() );


 };

 let onPostChangeCont = (newText) => {

 store.dispatch(onPostChangeCreator(newText));
 };

 return <MyPosts addPost={addPost}
 upDateNewPosttext={onPostChangeCont}
 posts={state.profilePage.posts}
 newPostText={state.profilePage.newPostText} />
 }
 }
 </MyContext.Consumer>


 )
 };*/