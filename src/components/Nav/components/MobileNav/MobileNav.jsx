import './MobileNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const MobileNav = () => {

    const navMobileRef = useRef()
    const iconMobileRef = useRef()
    const navigate = useNavigate()
  

    const MobileNavToggle = (e, val=false) => {
        e.preventDefault();
        const navStat = navMobileRef.current.className.split(' ')
        const iconStat = iconMobileRef.current.className.split(' ')
        if (navStat[3] === 'nm-active') [navStat[3], iconStat[1]] = ['nm-deactive', 's-deactive']
        else [navStat[3], iconStat[1]] = ['nm-active', 's-active']
        navMobileRef.current.className = navStat.join(" ")
        iconMobileRef.current.className = iconStat.join(' ')
        return val && navigate(val)
        
    }


    return (
        <div className="nav-mobile-con">
            <div className="sandwich-con s-deactive" ref={iconMobileRef}>
                <FontAwesomeIcon onClick={(e) => MobileNavToggle(e)} icon={faBars} className="sandwich" />
            </div>
            <div className='nav-mobile flex column nm-deactive' ref={navMobileRef}>
                <Link onClick={(e)=>MobileNavToggle(e, '/') } className='nav-mobile-btn' to={'/'}>Home</Link>
                <Link onClick={(e)=>MobileNavToggle(e, '/about') } className='nav-mobile-btn' to={'about'}>About</Link>
                <Link onClick={(e)=>MobileNavToggle(e, '/reservation') } className='nav-mobile-btn' to={'/reservation'}>Reserve</Link>
            </div>
        </div>
    )
}

export default MobileNav