import React from 'react'
import s from './ProfileInfo.module.css'
import Description from "./Description/Description";

const ProfileInfo = (props) => {
    return (
        <div className={s.profile}>
            <div className={s.avatar}>
                <img src="https://cdn2.vectorstock.com/i/thumb-large/33/11/web-developer-design-vector-5883311.jpg" />
            </div>
                <div className={s.description}>
                   <Description />
                </div>
        </div>
    )
}

export default ProfileInfo;