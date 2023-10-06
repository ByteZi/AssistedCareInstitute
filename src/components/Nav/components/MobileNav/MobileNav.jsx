

const MobileNav = () => {

    return (
        <>
            <FontAwesomeIcon onClick={(e) => SandwhichToggle(e)} icon={faBars} className="sandwhich" />
            <div className='nav-mobile'>
                <Link className='nav-btn' to={'/about'}>About</Link>
                <Link className='nav-btn' to={'/mission'}>Mission</Link>
            </div>
        </>
    )
}

export default MobileNav