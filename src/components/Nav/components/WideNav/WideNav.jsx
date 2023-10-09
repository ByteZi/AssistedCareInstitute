import './WideNav.css'
import { Link } from 'react-router-dom'

const WideNav = () => {
    return (
        <div className="nav-link-con flex">
            <Link className='nav-btn' to={'/'}>Home</Link>
            <Link className='nav-btn' to={'/about'}>About</Link>
            <Link className="nav-btn" to={'/ToC'}>TOC</Link>
        </div>
    )
}

export default WideNav