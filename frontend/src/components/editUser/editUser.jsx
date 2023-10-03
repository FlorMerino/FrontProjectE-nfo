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
                        <label htmlFor="Name">Project Name</label>
                        <input type="text" />

                        <label htmlFor="Description">Description</label>
                        <textarea></textarea>

                        <label htmlFor="Project Manager">Project Manager</label>
                        <select name="manager" id=""></select>

                        <label htmlFor="Assigned to">Assigned to</label>
                        <select name="Assigned to" id=""></select>

                        
                        <label htmlFor="Status">Status</label>
                        <select name="status" id=""></select>

                        <button>Save Changes</button>
                    </fieldset>
                </form>
            </div>

        </div>
    )
}

export default EditUser;