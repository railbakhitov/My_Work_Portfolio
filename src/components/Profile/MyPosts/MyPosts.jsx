import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = props.posts.map(post => <Post message={post.message} like={post.like}/>);
    let newPostElement = React.createRef();
    let addPost = () => props.addPost();
    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.updateChangePost(text);
    }
    return (
        <div>
            <div className={s.text}>
                <h3>My post</h3>
                <div><textarea onChange={ onChangePost } ref={ newPostElement } value={ props.newPostText }/></div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;