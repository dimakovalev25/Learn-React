import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div>
			My posts
			<div className='item'>
				New posts
			</div>
			<div className={s.posts}>
				<Post message='HI!!' name='Dima' />
				<Post message='How are you?' name='Dud' />
			</div>
		</div>

	);
};

export default MyPosts;
