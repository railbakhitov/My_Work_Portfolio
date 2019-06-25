import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updateChangePost} from './redux/state';
import {BrowserRouter} from "react-router-dom";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateChangePost={updateChangePost}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

