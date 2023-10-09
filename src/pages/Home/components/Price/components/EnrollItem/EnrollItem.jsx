import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './EnrollItem.css'

const EnrollItem = ({item}) => {

    return(
        <li className="enroll-item flex">
            <FontAwesomeIcon className="enroll-icon" icon={faCheck}/>
            <p className="enroll-txt">{item}</p>
        </li>
    )
}

export default EnrollItem