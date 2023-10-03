import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const ObjectItem = ({ item, i }) => {
    return (
        <li key={i} className="objective-item flex align-center">
            <FontAwesomeIcon icon={faCheck} className="objective-check"/>
            <p>{item}</p>
        </li>
    )
}

export default ObjectItem