import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import './Success.css'

const Success = () => <div className="interestform-success flex align-center column">
    <FontAwesomeIcon icon={faSmile} className="success-icon" />
    <h1 className="success-h1">Awesome!</h1>
    <p className="success-txt">We'll contact you soon.</p>
</div>

export default Success