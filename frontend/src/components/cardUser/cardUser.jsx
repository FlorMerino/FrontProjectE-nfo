import { FiMoreVertical } from 'react-icons/fi';
import styles from './../cardUser/cardUserStyles.module.css';
import { Link } from 'react-router-dom';
import { RiEditBoxLine, RiDeleteBin7Line } from 'react-icons/ri';
import { deleteUsers } from '../../redux/slice/userAction';
import { useDispatch } from 'react-redux';
import { allUsers } from '../../redux/slice/userAction';



const CardUser = (user) => {
  const id = user.user.Id
  const dispatch = useDispatch()
  const handleDelete = ()=>{
     dispatch(deleteUsers(id))
     
   };
    

    return (

        <tbody>
            <tr>               
                <td>{user.user.firstName}</td>
                <td>{user.user.lastName}</td>
                <td>{user.user.DocumentTypeId}</td>
                <td>{user.user.documentNumber}</td>
                <td>{user.user.UserStatusId}</td>
                <td>
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div class={`accordion-item ${styles.item}`}>

                            <button class={`accordion-button ${styles.accordionBtn}`} type="button" data-bs-toggle="collapse"
                                data-bs-target={`#panelsStayOpen-collapse${user.user.Id}`} aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne">
                            </button>

                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th colspan="6">
                    <div id={`panelsStayOpen-collapse${user.user.Id}`} class="accordion-collapse collapse">
                        <div class={`accordion-body ${styles.accordionDiv}`}>
                            <p>
                            Mas opciones
                            Address: .....  City: ....          
                            </p>
                            <button><Link to={`/Edit-User/${id}`}> <RiEditBoxLine></RiEditBoxLine> Edit</Link></button>
                            <button onClick={(props) => {handleDelete(props)}}><RiDeleteBin7Line></RiDeleteBin7Line> Delete</button>
                        </div>
                    </div>
                </th>

            </tr>

        </tbody>











    )
}

export default CardUser;