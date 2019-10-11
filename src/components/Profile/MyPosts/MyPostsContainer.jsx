import React from 'react';
import {addPostCreator, onPostChangeCreator} from '../../../state/profile-reducer';
import {MyContext} from '../../../MyContext.js';
import MyPosts from './MyPosts';


const MyPostsComponent = () => {


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
};

export default MyPostsComponent;