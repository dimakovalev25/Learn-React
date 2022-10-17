import s from "../Dialogs.module.css";
import React from "react";

const Message = (props) => {
    return (

        <div className={s.dialog}>
            <div>
            <img className={s.dialog_talk} src='https://static.vecteezy.com/system/resources/previews/006/548/314/original/3d-speech-bubble-icons-realistic-3d-chat-talk-messenger-communication-dialogue-bubble-icon-illustration-square-circle-and-rectangle-chat-box-banner-sticker-tag-badge-template-free-vector.jpg' alt='talk'/>
                {props.message}</div>

        </div>
    )
};

export default Message;