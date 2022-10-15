import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => {
        return <Post message={p.post} likesCount={p.likesCount}/>
    });

    return (
        <div className={s.postBlock}>
            <h3>
                My posts
            </h3>
            <div className='item'>
                New posts
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add posts</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>

    );
};

export default MyPosts;
