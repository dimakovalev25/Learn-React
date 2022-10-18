import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import UserMessages from "./Message/UserMessage";


const Dialogs = (props) => {
    let messagesElements = props.state.messages.map((item) => {
            return <Message message={item.message}/>
        }
    )

    let messagesUserElements = props.state.usermessages.map((item) => {
            return <UserMessages usermessages={item.usermessages}/>
        }
    )

    let dialogsElements = props.state.dialogs.map((item) => {
        return <DialogItem name={item.name} id={item.id}/>
    });

    let newMessageElement = React.createRef();

    let addMessage = () => {
      let text =  newMessageElement.current.value;
    };



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.dialogUser}>
                {messagesUserElements}
                <div>
                <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;

