import './Nav.css'

const Nav = (props) => {

    return (
        <nav className="nav flex space-between">
            <h1 className="nav-logo">LOGO</h1>

            <div className="nav-link-container flex">
                <button className='nav-btn'>Home</button>
                <button className='nav-btn'>Course</button>
                <button className='nav-btn'>About</button>
                <button className='nav-btn contact-btn'>Contact</button>
            </div>
            
        </nav>
    )
}

export default Nav