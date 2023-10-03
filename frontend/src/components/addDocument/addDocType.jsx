import styles from './../addUser/addUserStyles.module.css';
import styles2 from './../home/homeStyles.module.css';
import userImage from '../../usersImage.png';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDocumentType } from '../../redux/slice/documentAction';


const AddDocumentType = () => {

    const dispatch = useDispatch()

    const [input, setInput] = useState({
        name: "",
        description:"",
        
    })

    const handleChange=(e)=> {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    const handleSubmit =(e) => {
    
        if(!input.name || !input.description) {
            e.preventDefault()
           alert('fields are missing')
            console.log("error")
        } 
        else {
            e.preventDefault()
            console.log(input)
            dispatch(createDocumentType({
                name: input.name,
                description: input.description,              
            }))
            setInput({
                name: "",
                description: "",
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

                <form  onSubmit={(e) => handleSubmit(e)}>
                    <fieldset className={styles.Form}>
                        <label htmlFor="document name">Document name</label>
                        <input type="text" 
                        value={input.name}
                        name="name"
                        onChange={(e) => handleChange(e)}
                        />

                        <label htmlFor="description">description</label>
                        <textarea 
                        name="description"
                        value={input.description}
                        onChange={(e) => handleChange(e)}
                        ></textarea>

                       <button>Create Document</button>
                    </fieldset>
                </form>
            </div>

        </div>
    )
}

export default AddDocumentType;