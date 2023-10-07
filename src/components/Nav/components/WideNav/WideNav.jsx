import './WideNav.css'
import { Link } from 'react-router-dom'

const WideNav = () => {
    return (
        <div className="nav-link-con flex">
            <Link className='nav-btn' to={'/'}>Home</Link>
            <Link className='nav-btn' to={'/about'}>About</Link>
            <Link className='nav-btn' to={'/mission'}>Mission</Link>
            <button className='nav-btn contact-btn'>Contact</button>
        </div>
    )
}

export default WideNav