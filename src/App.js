import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs"
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

/*ЗАРИСОВАТЬ СТРУКТУРУ ПРОЕКТА*/

const App = (props) => {
    return (

        <div className='app-wraper'>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className='app-wraper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           state={props.state.dialogsPage}/>}/>
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           updateChangePost={props.updateChangePost}
                           addPost={props.addPost}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App;
