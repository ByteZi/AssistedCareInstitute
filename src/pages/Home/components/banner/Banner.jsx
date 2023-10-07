import './Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Banner = () => {

    return (
        <div className="banner-con">
            <div className="banner-header-con flex align-center">
                <div className="banner-text-con">
                    <div className="banner-headers">
                        <p className="h1-tip">━ QUALITY YOU CAN AFFORD</p>
                        <h1 className="banner-container-h1">ASSISTED CARE <br /> INSTITUTE</h1>
                        <p className='text-divider'>━━</p>
                    </div>
                    <div className='banner-contact-con flex'>
                        <Link className="banner-con-btn flex" to={'/about'}>Learn More</Link>
                        <div className="banner-phone-con flex  align-center">
                            <FontAwesomeIcon icon={faPhone} className="banner-phone fas" />
                            <p className="banner-phone">+650-580-6873</p>
                        </div>

                    </div>
                    <div className="banner-email-con flex align-center">
                        <FontAwesomeIcon icon={faEnvelope} className="banner-email-envelope fas" />
                        <p className="banner-email">info@assistedcareinstitute.com</p>
                    </div>

                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Banner