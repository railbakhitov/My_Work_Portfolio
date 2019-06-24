import React from 'react'
import s from './Tabs.module.css'
import {NavLink} from "react-router-dom";

const Tabs = (props) => {
    return (
        <div>
            <div className={s.item + ' ' + s.one}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='settings'>Settings</NavLink>
            </div>
        </div>
    )
}

export default Tabs;