import styles from './../addUser/addUserStyles.module.css';
import styles2 from './../home/homeStyles.module.css';
import userImage from '../../usersImage.png';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserStatus } from '../../redux/slice/userStatusAction';


const AddUserStatus = () => {

    const dispatch = useDispatch()

    
    const [input, setInput] = useState({
        name: "",
    })

    const handleChange=(e)=> {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    const handleSubmit =(e) => {
    console.log(!input.name)
        if(!input.name) {
            e.preventDefault()
           alert('fields are missing')
            console.log("error")
        } 
        else {
            e.preventDefault()
            console.log(input)
            dispatch(createUserStatus(input))
            setInput({
                name: "",
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
                <h1>Add user state</h1>

            </div>
            <div className={styles.containerForm}>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <fieldset className={styles.Form}>
                        <label htmlFor="user state">State name</label>
                        <input 
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={(e) => handleChange(e)} 
                        />

                        <button>Create state</button>
                    </fieldset>
                </form>
            </div>

        </div>
    )
}

export default AddUserStatus;