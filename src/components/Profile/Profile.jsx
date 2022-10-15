import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
	return (
		<div>
			<div>
				<img className={s.content_bgr} alt='f' src='https://assets.gq.ru/photos/5d9f65b2f09bda0008040db8/16:9/w_2560%2Cc_limit/b54f734c97173d3ca9b891267f4bd8c2c0ea3430.jpeg'></img>
			</div>
			<div>

			</div>
			<MyPosts />
		</div>
	);
};

export default Profile;
