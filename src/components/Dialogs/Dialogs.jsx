import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
};

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: "Sasha"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Anton"},
        {id: 4, name: "Dud"},
        {id: 5, name: "Anya"},
        {id: 6, name: "Kesha"},
    ];

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Are yo OK?"},
        {id: 4, message: "Dud"},
        {id: 5, message: "OK?"},
        {id: 6, message: "Yo!"},
    ];

    let messagesElements = messages.map( (m) => {
        return  <Message message={m.message}/>
    }
)

    let dialogsElements = dialogs.map( (d) => {
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

