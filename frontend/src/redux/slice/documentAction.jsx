import axios from "axios";


import {

    postDocType,

} from "./documentSlice";



export const createDocumentType=(document)=>(dispatch)=>{
    axios.post('http://localhost:3001/docTypes/postDoc', document)
    .then(resp=>dispatch(postDocType(resp.data)))
    .then(()=>{
       return alert('Document created successfully')
    })
    .catch((e) => {
        console.log(e)
        return alert('Something went wrong')
    })
   
    
}