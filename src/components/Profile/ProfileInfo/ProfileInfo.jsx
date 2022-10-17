import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img className={s.content_bgr} alt='f' src='https://cdn.pixabay.com/photo/2015/03/22/23/07/bora-bora-685303_960_720.jpg'></img>
			</div>
			<div className={s.descriptionBlock}>
				avatar
			</div>
		</div>
	);
};

export default ProfileInfo;
