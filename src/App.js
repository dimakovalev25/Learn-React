// D:\dima\react\project_1\my-app> npm start
import React from 'react';
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import BestFriends from "./components/BestFriends/BestFriends";
import {addUserPost, updateNewPostText} from "./redux/state";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>

                <div className='navbar-wrapper'>
                    <Navbar/>
                    <Sidebar/>
                    <BestFriends/>
                </div>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs
                        state={props.state.dialogsPage}
                        addUserPost={props.addUserPost}
                    />}/>

                    <Route path='/profile' render={() => <Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                    />}/>

                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
