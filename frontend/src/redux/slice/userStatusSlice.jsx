import { createSlice } from "@reduxjs/toolkit";

export const userStatusSlice = createSlice({
    name: "userStatus",

    initialState: {
        allUserStatus:[],
        // userStatus:[],

    },
    
    reducers: {
    
        // getAllUserStates: (state, action)=>{
        //     state.allDocuments = action.payload    
        //     state.document = action.payload        
        // },


        postUserStatus: (state)=>{
            return{state}     
        },
        getAllUserStatus: (state,action)=>{
            state.allUserStatus = action.payload 
        }
        
    }
})

export const { 
    postUserStatus,
    getAllUserStatus
    
} = userStatusSlice.actions

export default userStatusSlice.reducer