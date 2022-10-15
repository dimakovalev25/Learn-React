// D:\dima\react\project_1\my-app> npm start
import React from 'react';
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";

import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
                    <Route path='/profile' render={ () => <Profile posts={props.posts}  />} />
                    <Route path='/news' render={ () => <News />} />
                    <Route path='/friends' render={ () => <Friends />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
