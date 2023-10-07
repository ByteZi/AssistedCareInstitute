import './Enrollment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { enrollmentData } from './data/enrollmentData'

const Enrollment = () => {
    return (
        <div className="enrollment-con">
            <div className="enrollment-card">
                <h1 className="enrollment-card-price">$529</h1>
            </div>
        </div>
    )
}

export default Enrollment