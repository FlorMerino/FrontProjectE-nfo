import styles from './../addUser/addUserStyles.module.css';
import styles2 from './../home/homeStyles.module.css';
import userImage from '../../usersImage.png';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCreateUser } from '../../redux/slice/userAction';


const AddUser = () => {

    const dispatch = useDispatch()

    const documents = useSelector(state => state.document.allDocuments)
    const userStatus = useSelector(state => state.userStatus.allUserStatus)

    const [input, setInput] = useState({
       
        userLogin: "logeado",
        firstName: "",
        lastName: "",
        DocumentTypeId: null,
        documentNumber: "",
        address: "",
        city: "",
        postalCode: "",
        phoneNumbers: "",
        email: "",
        UserStatusId:null ,
        dateOfBirth: null,
        twoFactorEnabled: false,
        mustChangePassword: false,

    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    const handleSubmit = (e) => {

        if (!input.firstName || !input.userLogin) {
            e.preventDefault()
            alert('fields are missing')
            
        }
        if (input.DocumentTypeId && !input.documentNumber) {
            e.preventDefault()
            alert('Please enter your document number')
            
        }else if(!input.DocumentTypeId && input.documentNumber){
            e.preventDefault()
            alert('Please enter your document type')
        }
        else {
            e.preventDefault()
            console.log(input)
            dispatch(postCreateUser(input))
            setInput({
                userLogin: true,
                firstName: "",
                lastName: "",
                DocumentTypeId: null,
                documentNumber: "",
                address: "",
                city: "",
                postalCode: "",
                phoneNumbers: "",
                email: "",
                UserStatusId:null ,
                dateOfBirth: null,
                twoFactorEnabled: false,
                mustChangePassword: false,
            })
        }
    }


    return (
        <div className={styles2.container}>
            <div className={styles2.containerImg} >
                <img src={userImage} alt="user image" />
            </div>

            <div className={styles.head}>
                <Link to={'/'}><button> <BiArrowBack></BiArrowBack> Back</button></Link>
                <h1>Add user</h1>

            </div>
            <div className={styles.containerForm}>

                <form onSubmit={(e) => handleSubmit(e)} >
                    <fieldset className={styles.Form}>
                        <label htmlFor="First name">First name</label>
                        <input 
                        type="text"
                        value={input.firstName}
                        name="firstName"
                        onChange={(e) => handleChange(e)} 
                        />

                        <label htmlFor="Last name">Last name</label>
                        <input 
                        type="text" 
                        value={input.lastName}
                        name="lastName"
                        onChange={(e) => handleChange(e)}
                        />

                        <label htmlFor="Document type">Document type</label>
                        <select name="DocumentTypeId" onChange={e => handleChange(e)} value={input.DocumentTypeId}>
                            <option value="none" >-</option>
                            <option value={1}>DNI</option>
                            <option value={2}>Libreta civica</option>
                        </select>

                        <label htmlFor="Document number">Document number</label>
                        <input 
                        type="text" 
                        value={input.documentNumber}
                        name="documentNumber"
                        onChange={(e) => handleChange(e)}
                        />


                        <label htmlFor="User state">User state</label>
                        <select name="UserStatusId" onChange={e => handleChange(e)} value={input.UserStatusId}>
                            <option value="none" >-</option>
                            <option value="1">Active</option>
                            <option value="2" >Inactive</option>
                        </select>

                        <label htmlFor="Address">Address</label>
                        <input 
                        type="text" 
                        value={input.address}
                        name="address"
                        onChange={(e) => handleChange(e)}
                        />

                        <label htmlFor="City">City</label>
                        <input 
                        type="text" 
                        value={input.city}
                        name="city"
                        onChange={(e) => handleChange(e)}
                        />

                        <label htmlFor="Postal code">Postal code</label>
                        <input 
                        type="text" 
                        value={input.postalCode}
                        name="postalCode"
                        onChange={(e) => handleChange(e)}
                        />

                        <label htmlFor="Phone numbers">Phone numbers</label>
                        <input 
                        type="text" 
                        value={input.phoneNumbers}
                        name="phoneNumbers"
                        onChange={(e) => handleChange(e)}
                        />

                        <label htmlFor="Email">Email</label>
                        <input 
                        type="text" 
                        value={input.email}
                        name="email"
                        onChange={(e) => handleChange(e)}
                        />

                        <label htmlFor="Date of birth">Date of birth</label>
                        <input 
                        type="date" 
                        value={input.dateOfBirth} min="1960-01-01" max="2025-12-31"
                        name='dateOfBirth'
                        onChange={(e) => handleChange(e)}
                        />


                        <button>Create User</button>
                    </fieldset>
                </form>
            </div>

        </div>
    )
}

export default AddUser;