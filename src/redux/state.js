import {rerenderEntireTree} from "../render";

let state = {

    profilePage: {
        posts: [
            {id: 1, post: "--Hi", likesCount: 4},
            {id: 2, post: "--How are you?", likesCount: 9},
            {id: 3, post: "--Are yo OK?", likesCount: 22},
        ],
        newPostText: 'yyyyyyyyyy'
    },


    dialogsPage: {
        usermessages: [
            {id: 1, usermessages: "Hi!!!"},
            {id: 2, usermessages: "i am OK!!!!"},
            {id: 3, usermessages: "i am not home!!!"},
            {id: 4, usermessages: "i am not Dud"},
            // {id: 5, message: "OK?"},
            // {id: 6, message: "Yo!"},
        ],

        messages: [
            {id: 1, message: "--Hi"},
            {id: 2, message: "--How are you?"},
            // {id: 3, message: "Are yo OK?"},
            {id: 4, message: "Dud"},
            // {id: 5, message: "OK?"},
            // {id: 6, message: "Yo!"},
        ],

        dialogs: [
            {id: 1, name: "Sasha"},
            {id: 2, name: "Andrey"},
            // {id: 3, name: "Anton"},
            // {id: 4, name: "Dud"},
            // {id: 5, name: "Anya"},
            {id: 6, name: "Kesha"}
        ],

        bestfriends: [
            {id: 1, bestfriend: "Alex"},
            {id: 2, bestfriend: "Alexey"},
            {id: 3, bestfriend: "Karyna"},
        ],
    },
};

export let addPost = () => {
    let newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addUserPost = (postUserMessage) => {
    let newUserPost = {
        id: 6,
        usermessages: postUserMessage,
    }
    state.dialogsPage.usermessages.push(newUserPost);
    rerenderEntireTree(state);
}


export default state;