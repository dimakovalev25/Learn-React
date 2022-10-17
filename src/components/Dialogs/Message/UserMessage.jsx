import React from "react";
import s from "../Dialogs.module.css";

const UserMessages = (props) => {
    return (
        <div className={s.dialogUser}>
            <div>
                <img className={s.dialog_talk} src='https://static.vecteezy.com/system/resources/previews/006/548/314/original/3d-speech-bubble-icons-realistic-3d-chat-talk-messenger-communication-dialogue-bubble-icon-illustration-square-circle-and-rectangle-chat-box-banner-sticker-tag-badge-template-free-vector.jpg'/>
                {props.usermessages}</div>
        </div>
    )
};

export default UserMessages;