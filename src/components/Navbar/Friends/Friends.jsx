import React from 'react'
import s from './Friends.module.css'

const Friends = (props) => {

    let nameFriend = props.state.map( name =>
        <div className={s.item}>
            <img src='http://lychsveta.kz/wp-content/uploads/2018/10/anonim.png'/>
            <span className={s.name}>{name}</span>
        </div>
    );

    return (
        <div className={s.class}>
            <span className={s.action}>
                Friends
            </span>
            <div className={s.friends}>
                { nameFriend }
            </div>
        </div>
    )
}

export default Friends;