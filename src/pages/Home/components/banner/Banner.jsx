import './Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {

    return (
        <div className="banner-con flex align-center">
            <div className="banner-text flex-1 flex column just-center">
                <div className="banner-headers">
                    <p className="h1-tip">━ QUALITY YOU CAN AFFORD</p>
                    <h1 className="banner-container-h1">ASSISTED CARE <br /> INSTITUTE</h1>
                    <p className='text-divider'>━━</p>
                </div>
                <div className='banner-contact-con flex'>
                    <p className="banner-container-btn flex">Learn More</p>
                    <div className="banner-phone-con flex align-center">
                        <FontAwesomeIcon icon={faPhone} className="banner-phone" />
                        <p className="banner-phone">+650-580-6873</p>
                    </div>

                </div>
                <div className="banner-email-con flex align-center">
                    <FontAwesomeIcon icon={faEnvelope} className="banner-email-envelope" />
                    <p className="banner-email">info@assistedcareinstitute.com</p>
                </div>
            </div>
        </div>
    )
}

export default Banner