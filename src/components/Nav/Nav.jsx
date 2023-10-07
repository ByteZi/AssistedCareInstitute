import './Nav.css'
import MobileNav from './components/MobileNav/MobileNav'
import WideNav from './components/WideNav/WideNav'

const Nav = (props) => {

    const SandwhichToggle = (e) => {
        e.preventDefault();

    }

    return (
        <nav className="nav flex space-between align-center">
            <h1 className="nav-logo text-center">ACI</h1>

            <WideNav/>
            <MobileNav/>
            
        </nav>
    )
}

export default Nav