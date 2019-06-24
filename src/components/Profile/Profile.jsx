import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div className={s.content}>
        <div className={s.info}>
            <ProfileInfo/>
        </div>
        <div className={s.posts}>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    </div>
  )
}

export default Profile;