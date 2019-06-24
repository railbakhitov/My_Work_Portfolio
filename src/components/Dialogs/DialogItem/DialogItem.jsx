import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>
                <div className={s.item}>
                    <img src={props.img} />
                    <span className={s.name}>
                        {props.name}
                    </span>
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;