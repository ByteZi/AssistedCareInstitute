import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = (props) => {

    return (
        <nav className="nav flex space-between align-center">
            <h1 className="nav-logo text-center">ACI</h1>

            <div className="nav-link-container flex">
                <Link className='nav-btn' to={'/about'}>About</Link>
                <Link className='nav-btn' to={'/about'}>About</Link>
                <button className='nav-btn'>About</button>
                <button className='nav-btn contact-btn'>Contact</button>
            </div>
            
        </nav>
    )
}

export default Nav