import axios from "axios";

import {

    postUserStatus,

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