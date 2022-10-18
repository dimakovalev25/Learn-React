import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, addUserPost, updateNewPostText} from "./redux/state";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addUserPost={addUserPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );
}



