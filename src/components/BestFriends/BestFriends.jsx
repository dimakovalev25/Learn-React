import React from 'react';
import s from './BestFriends.module.css'

const BestFriends = (props) => {
 return (
     <div className={s.bestfriend}>
        Best Friends
         <div>
         <img className={s.bestfriendsavatar} src="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" alt="avatar" />
         </div>
     </div>
 )
}
export default BestFriends;

