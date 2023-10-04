import { createSlice } from "@reduxjs/toolkit";

export const documentType = createSlice({
    name: "documents",

    initialState: {
        allDocuments:[],
        // document:[],

    },
    
    reducers: {
    
        // getAllDocuments: (state, action)=>{
        //     state.allDocuments = action.payload    
        //     state.document = action.payload        
        // },


        postDocType: (state)=>{
            return{state}     
        },
        getAllDocuments: (state,action)=>{
            state.allDocuments = action.payload
        }
        
    }
})

export const { 
     postDocType,
     getAllDocuments
    
} = documentType.actions

export default documentType.reducer