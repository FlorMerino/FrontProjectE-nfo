import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import userImage from '../../usersImage.png';
import styles from './../home/homeStyles.module.css'
import { Link } from 'react-router-dom';
import CardUser from '../cardUser/cardUser';
import { allUsers } from '../../redux/slice/userAction';
import { allDocuments } from '../../redux/slice/documentAction';
import { allStatus } from '../../redux/slice/userStatusAction';

const Home = () => {

    const dispatch = useDispatch();

    const users = useSelector(state => state.users.allUsers)
    console.log(users)
    React.useEffect(()=>{
        dispatch(allUsers())
        dispatch(allDocuments())
        dispatch(allStatus())
      },[])


    return (
        <div className={styles.container}>
            <div className={styles.containerImg} >
                <img src={userImage} alt="user image" />
            </div>

            <div className={styles.head}>
                <h1>All users</h1>
                <Link to={'/Add-User'}><button>+ Add User</button></Link>
                <Link to={'/Add-DocumentType'}><button>Add document type</button></Link>
                <Link to={'/Add-UserStatus'}><button>+ Add user status</button></Link>
            </div>

            <div class="table-responsive-xxl">
                <table class="table table-hover">
                    <thead>
                        <tr class="table-primary">
                            <th >First name</th>
                            <th >Last name</th>
                            <th>Document type</th>
                            <th>Document number</th>
                            <th>User state</th>
    

                        </tr>
                    </thead>

                    {
                         users.length !== 0 ?
                         users.map((user) => {
                            return (
                                <CardUser user={user}></CardUser> 
                            )})
                         :
                    <p>no hay usuarios para mostrar</p>
                    }
                    
                    

                </table>



            </div>
        </div>
    );
}

export default Home;