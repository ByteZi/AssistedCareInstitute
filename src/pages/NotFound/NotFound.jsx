import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './NotFound.css'
import {  faSadCry } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => {

    return (
        <div className="not-found-con flex column align-center just-center">
            <div className=" not-found-content-con flex column just-center text-center align-center just-center">
                <FontAwesomeIcon className="not-found-icon" icon={faSadCry} />
              
                    <h2 className="not-found-err">404</h2>
                    <p className="not-found-err-p"> Sorry, this page may have been moved, deleted or may not haven't existed. </p>
              
            </div>
        </div>
    )
}

export default NotFound