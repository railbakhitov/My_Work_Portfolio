import React from 'react'
import s from './Navbar.module.css'
import Tabs from "./Tabs/Tabs";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return (
            <nav className={s.nav}>
                <div>
                    <Tabs />
                </div>
                <div>
                    <Friends state={props.state.friendsList}/>
                </div>
            </nav>
    )
}

export default Navbar;