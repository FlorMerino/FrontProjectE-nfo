import axios from "axios";
import {
     
    createUser,
    editUser,  
    getAllUsers,  
    deleteUserById,
       
}from "./userSlice";



export const allUsers=()=>(dispatch)=>{
    axios.get("http://localhost:3001/users/allUsers")
    .then(resp=> {
        return{
            payload:dispatch(getAllUsers(resp.data))            
        }})
    
    .catch((e) => {
        console.log(e);
        // return alert('Something went wrong')
      });
}



export const postCreateUser=(user)=>(dispatch)=>{
    axios.post('http://localhost:3001/users/postUser', user)
    .then(resp=>dispatch(createUser(resp.data)))
    .then(()=>{
       return alert('User created successfully')
    })
    .catch((e) => {
        console.log(e)
        return alert('Something went wrong')
    })
   
    
}




export const editUsers=(bodyFormData, id)=>(dispatch)=>{
    console.log(bodyFormData)
    console.log(id)
    axios.put(`http://localhost:3001/users/modifyUser/${id}`, bodyFormData)
    
    .then(resp=>dispatch(editUser(resp.data)))
    .then(()=>{
        return alert('User modified successfully')
    })
    .catch((e) => {
        console.log(e);
        return alert('Something went wrong')
      });
  
}



export const deleteUsers=(id)=>(dispatch)=>{
    axios.delete(`http://localhost:3001/users/deleteUser/${id}`)
    .then(resp=>dispatch(deleteUserById(resp.data)))
    .then(()=>{
        return alert('Successfully deleted user')
    })
      
    .catch((e) => {
        console.log(e);
        return alert('Something went wrong')
      });  
}






