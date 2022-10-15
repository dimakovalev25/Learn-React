import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.dialog_avatar} src="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg" alt="avatar" />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;