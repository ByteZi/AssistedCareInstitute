import './MobileNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const MobileNav = () => {

    const navMobileRef = useRef()
    const iconMobileRef = useRef()

    const SandwhichToggle = (e) => {
        e.preventDefault();
        const navStat = navMobileRef.current.className.split(' ')
        const iconStat = iconMobileRef.current.className.split(' ')
        if (navStat[3] === 'nm-active') {
            [navStat[3], iconStat[1]] = ['nm-deactive', 's-deactive']
        }
        else {
            [navStat[3], iconStat[1]] = ['nm-active', 's-active']
        }
        navMobileRef.current.className = navStat.join(" ")
        iconMobileRef.current.className = iconStat.join(' ')
        
    }

    return (
        <div className="nav-mobile-con">
            <div className="sandwich-con s-deactive" ref={iconMobileRef}>
            <FontAwesomeIcon onClick={(e) => SandwhichToggle(e)} icon={faBars} className="sandwhich" />
            </div>
            <div className='nav-mobile flex column nm-deactive' ref={navMobileRef}>
                <Link className='nav-mobile-btn' to={'/'}>Home</Link>
                <Link className='nav-mobile-btn' to={'/about'}>About</Link>
                <Link className='nav-mobile-btn' to={'/mission'}>Mission</Link>
            </div>
        </div>
    )
}

export default MobileNav