import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Anton</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Dud</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className="message">Hi</div>
                <div className="message">How are you?</div>
                <div className="message">Are yo OK?</div>
            </div>
        </div>


    )
}

export default Dialogs;

