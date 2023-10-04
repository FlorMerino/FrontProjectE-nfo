import { configureStore } from "@reduxjs/toolkit";
import users from './../slice/userSlice';
import document from './../slice/documentSlice';
import userStatus from './../slice/userStatusSlice';
export default configureStore({
    reducer: {
        users: users,
        document: document,
        userStatus: userStatus
    }

})