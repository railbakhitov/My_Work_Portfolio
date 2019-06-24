import React from 'react'
import s from './Post.module.css'

const Posts = (props) => {
    return (

        <div className={s.item}>
            <img src='http://baptiste-contreras.fr/img/icon1.jpg'/>
            <span className={s.message}>
                {props.message}
            </span>
            <div>
                <span>{props.like} likes</span>
            </div>
        </div>

    )
}

export default Posts;