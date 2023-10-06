

const WideNav = () => {
    return (
        <div className="nav-link-container flex">
            <Link className='nav-btn' to={'/about'}>About</Link>
            <Link className='nav-btn' to={'/mission'}>Mission</Link>
            <button className='nav-btn contact-btn'>Contact</button>
        </div>
    )
}

export default WideNav