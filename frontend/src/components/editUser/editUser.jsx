import React from 'react';
import styles from './../addUser/addUserStyles.module.css';
import styles2 from './../home/homeStyles.module.css';
import userImage from '../../usersImage.png';
import { Link, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers, editUsers, postCreateUser } from '../../redux/slice/userAction';


const EditUser = () => {

    const {id} =useParams()

    // useEffect(()=>{

    //     dispatch(getUserById(param));
    //   },[dispatch,param]);

    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(allUsers())
      },[])
    const documents = useSelector(state => state.document.allDocuments)
    const userStatus = useSelector(state => state.userStatus.allUserStatus)
    const users = useSelector(state => state.users.allUsers)
    
     const user = users.find((u)=>{ return u.Id === id})

    const [input, setInput] = useState({})

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    const handleSubmit = (e) => {

        // if (!input.firstName || !input.userLogin) {
        //     e.preventDefault()
        //     alert('fields are missing')
            
        // }
        // if (input.DocumentTypeId && !input.documentNumber) {
        //     e.preventDefault()
        //     alert('Please enter your document number')
            
        // }else if(!input.DocumentTypeId && input.documentNumber){
        //     e.preventDefault()
        //     alert('Please enter your document type')
        // }
        
            e.preventDefault()
            console.log(input)
            dispatch(editUsers(input,id))
            setInput({})
        
    }


    return (
        <div className={styles2.container}>
            <div className={styles2.containerImg} >
                <img src={userImage} alt="user image" />
            </div>

            <div className={styles.head}>
                <Link to={'/'}><button> <BiArrowBack></BiArrowBack> Back</button></Link>
                <h1>Edit user</h1>

            </div>
            <div className={styles.containerForm}>

              <form onSubmit={(e) => handleSubmit(e)} >
                    <fieldset className={styles.Form}>
                        <label htmlFor="First name">First name</label>
                        <input 
                        type="text"
                        defaultValue={user.firstName}
                        
                        name="firstName"
                        onChange={(e) => handleChange(e)} 
                        />

                        <label htmlFor="Last name">Last name</label>
                        <input 
                        type="text" 
                        defaultValue={user.lastName}
                        
                        name="lastName"
                        onChange={(e) => handleChange(e)}
                        />

                        <label htmlFor="Document type">Document type</label>
                        {
                            documents.length !== 0 ?
                                <select name="DocumentTypeId" onChange={e => handleChange(e)} value={input.DocumentTypeId}>
                                    <option value="none" >-</option>
                                    { 
                                    documents.map((doc)=>{
                                       return <option value={doc.Id}>{doc.name}</option>
                                    })
                                    }
                                </select>
                                :
                                <div>
                                    <select name="DocumentTypeId" onChange={e => handleChange(e)} value={input.DocumentTypeId}>
                                        <option value="none" >-</option>
                                    </select>
                                    <p>
                                        Please make sure to enter some type of document, in the Add document type section</p>
                                </div>
                        }

                        <label htmlFor="Document number">Document number</label>
                        <input 
                        type="text" 
                        defaultValue={user.documentNumber}
                        name="documentNumber"
                        onChange={(e) => handleChange(e)}
                        />


                        <label htmlFor="User state">User status</label>
                        {
                            userStatus.length !== 0 ?
                                <select name="UserStatusId" onChange={e => handleChange(e)} value={input.UserStatusId}>
                                    <option value="none" >-</option>
                                    { 
                                    userStatus.map((status)=>{
                                       return <option value={status.Id}>{status.name}</option>
                                    })
                                    }
                                </select>
                                :
                                <div>
                                    <select name="UserStatusId" onChange={e => handleChange(e)} value={input.UserStatusId}>
                                        <option value="none" >-</option>
                                    </select>
                                    <p>
                                        Please make sure to enter some user status, in the Add user status section</p>
                                </div>
                        }
                        <label htmlFor="Address">Address</label>
                        <input 
                        type="text" 
                        defaultValue={user.address}
                        name="address"
                        onChange={(e) => handleChange(e)}
                        />

                        <label htmlFor="City">City</label>
                        <input 
                        type="text" 
                        defaultValue={user.city}
                        name="city"
                        onChange={(e) => handleChange(e)}
                        />

                        <label htmlFor="Postal code">Postal code</label>
                        <input 
                        type="text" 
                        defaultValue={user.postalCode}
                        name="postalCode"
                        onChange={(e) => handleChange(e)}
                        />

                        <label htmlFor="Phone numbers">Phone numbers</label>
                        <input 
                        type="text" 
                        defaultValue={user.phoneNumbers}
                        name="phoneNumbers"
                        onChange={(e) => handleChange(e)}
                        />

                        <label htmlFor="Email">Email</label>
                        <input 
                        type="text" 
                        defaultValue={user.email}
                        name="email"
                        onChange={(e) => handleChange(e)}
                        />

                        <label htmlFor="Date of birth">Date of birth</label>
                        <input 
                        type="date" 
                        defaultValue={user.dateOfBirth} min="1960-01-01" max="2025-12-31"
                        name='dateOfBirth'
                        onChange={(e) => handleChange(e)}
                        />


                        <button>Edit User</button>
                    </fieldset>
                </form> 
            </div>

        </div>
    )
}

export default EditUser;