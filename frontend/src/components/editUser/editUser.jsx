import React from "react";
import styles from './../addUser/addUserStyles.module.css';
import styles2 from './../home/homeStyles.module.css';
import userImage from '../../usersImage.png';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';


const EditUser = () => {

    return (
        <div className={styles2.container}>
            <div className={styles2.containerImg} >
                <img src={userImage} alt="user image" /> 
            </div>

            <div className={styles.head}>
                <Link to={'/'}><button> <BiArrowBack></BiArrowBack> Back</button></Link>
                <h1>Edit Project</h1>

            </div>
            <div className={styles.containerForm}>

            <form>
                    <fieldset className={styles.Form}>
                        <label htmlFor="First name">First name</label>
                        <input type="text" />

                        <label htmlFor="Last name">Last name</label>
                        <input type="text" />
                        <label htmlFor="Document type">Document type</label>
                        <select>
                            <option value="DNI">DNI</option>
                            <option value={'LC'} >Libreta civica</option>
                        </select>
                        <label htmlFor="Document number">Document number</label>
                        <input type="text" />
                        <label htmlFor="User state">User state</label>
                        <select>
                            <option value="Active">Active</option>
                            <option value={'Inactive'} >Inactive</option>
                        </select>

                        <label htmlFor="Address">Address</label>
                        <input type="text" />
                        <label htmlFor="City">City</label>
                        <input type="text" />
                        <label htmlFor="Postal code">Postal code</label>
                        <input type="text" />
                        <label htmlFor="Phone numbers">Phone numbers</label>
                        <input type="text" />
                        <label htmlFor="Email">Email</label>
                        <input type="text" />
                        <label htmlFor="Date of birth">Date of birth</label>
                        <input type="date" value="2023-10-03" min="1960-01-01" max="2025-12-31" />


                        <button>Create User</button>
                    </fieldset>
                </form>
            </div>

        </div>
    )
}

export default EditUser;