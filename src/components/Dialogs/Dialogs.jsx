import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
debugger
    let messagesElements = props.messages.map( (m) => {
        return  <Message message={m.message}/>

    }
)

    let dialogsElements = props.dialogs.map( (d) => {
        return <DialogItem name={d.name} id={d.id}/>
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;

