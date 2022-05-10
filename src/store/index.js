// directions fro reduxjs toolkit taken from documentation - https://redux.js.org/tutorials/essentials/part-2-app-structure
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import usersReducer from './slices/usersSlice';
import groupsReducer from './slices/groupsSlice';
import channelsReducer from './slices/channelsSlice';
import postsReducer from './slices/postsSlice';
import commentsReducer from './slices/commentsSlice';


export default configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        groups: groupsReducer,
        channels: channelsReducer,
        posts: postsReducer,
        comments: commentsReducer

    }
})