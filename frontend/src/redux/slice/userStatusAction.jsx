import axios from "axios";

import {

    postUserStatus,
    getAllUserStatus

} from "./userStatusSlice";



export const createUserStatus=(status)=>(dispatch)=>{
    axios.post('http://localhost:3001/usersStatus/postStatus', status)
    .then(resp=>dispatch(postUserStatus(resp.data)))
    .then(()=>{
       return alert('User status created successfully')
    })
    .catch((e) => {
        console.log(e)
        return alert('Something went wrong')
    })
       
}

export const allStatus=()=>(dispatch)=>{
    axios.get("http://localhost:3001/usersStatus/allStatus")
    .then(resp=> {
        return{
            payload:dispatch(getAllUserStatus(resp.data))            
        }})
    
    .catch((e) => {
        console.log(e);
        // return alert('Something went wrong')
      });
}
