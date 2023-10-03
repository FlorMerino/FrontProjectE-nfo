import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",

    initialState: {
        allUsers:[],//estado que siempre va a almacenar todos los usuarios
        users:[],

    },
    
    reducers: {
    
        getAllUsers: (state, action)=>{
            state.allUsers = action.payload    
            state.users = action.payload        
        },


        createUser: (state)=>{
            return{state}     
        },

        editUser: (state, action)=>{
            return {
                ...state,
                data: action.payload
            }      
        },

        deleteUserById: (state,action)=>{         
            state.allUsers = action.payload    
            state.users = action.payload 
        
          },
        
    }
})

export const { 
     createUser,
     editUser,
     getAllUsers,
     deleteUserById,
    
} = userSlice.actions

export default userSlice.reducer


