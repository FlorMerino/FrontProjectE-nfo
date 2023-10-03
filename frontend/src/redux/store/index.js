import { configureStore } from "@reduxjs/toolkit";
import users from './../slice/userSlice';
import document from './../slice/documentSlice';

export default configureStore({
    reducer: {
        users: users,
        document: document
    }

})