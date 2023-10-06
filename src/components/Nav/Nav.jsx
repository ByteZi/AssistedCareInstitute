import './Nav.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = (props) => {

    const SandwhichToggle = (e) => {
        e.preventDefault();

    }

    return (
        <nav className="nav flex space-between align-center">
            <h1 className="nav-logo text-center">ACI</h1>

            

            
        </nav>
    )
}

export default Nav