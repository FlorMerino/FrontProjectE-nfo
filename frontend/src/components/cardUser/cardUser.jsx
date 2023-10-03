import { FiMoreVertical } from 'react-icons/fi';
import styles from './../cardUser/cardUserStyles.module.css';
import { Link } from 'react-router-dom';
import { RiEditBoxLine, RiDeleteBin7Line } from 'react-icons/ri';



const CardUser = (user) => {


    return (

        <tbody>
            <tr>
                <td>Antoni</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>active</td>
                <td>
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div class={`accordion-item ${styles.item}`}>

                            <button class={`accordion-button ${styles.accordionBtn}`} type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapse" aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne">
                            </button>

                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th colspan="6">
                    <div id="panelsStayOpen-collapse" class="accordion-collapse collapse show">
                        <div class={`accordion-body ${styles.accordionDiv}`}>
                            <p>
                            Mas opciones
                            This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
                            These classes control the overall appearance, as well as the showing and hiding via CSS transitions. 
                            You can modify any of this with custom CSS or overriding our default variables. 
                            It's also worth noting that just about any HTML can go within , though the transition does limit overflow.
                            </p>
                            
                        </div>
                    </div>
                </th>

            </tr>

        </tbody>











    )
}

export default CardUser;