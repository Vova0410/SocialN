import React from 'react';
import {addPostCreator, onPostChangeCreator} from '../../../state/profile-reducer';
import MyPosts from './MyPosts';




const MyPostsComponent = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch( addPostCreator() );


    };

    let onPostChangeCont = (newText) => {

        props.store.dispatch(onPostChangeCreator(newText));
    };


    return(
            <MyPosts addPost={addPost}
                     upDateNewPosttext={onPostChangeCont}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText} />

    )
};

export default MyPostsComponent;