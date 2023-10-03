import styles from './../addUser/addUserStyles.module.css';
import styles2 from './../home/homeStyles.module.css';
import userImage from '../../usersImage.png';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const AddUserStatus = () => {

    const dispatch = useDispatch()

    
    const [input, setInput] = useState({
        stateName: "",
        
    })


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

                <form>
                    <fieldset className={styles.Form}>
                        <label htmlFor="user state">State name</label>
                        <input type="text" />

                        <button>Create state</button>
                    </fieldset>
                </form>
            </div>

        </div>
    )
}

export default AddUserStatus;