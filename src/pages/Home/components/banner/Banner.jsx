import './Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {

    return (
        <>
            <div className="banner-con align-center flex just-center">
                <div className="banner-header-con flex column just-center div-fill flex-1">
                    <div className="banner-headers">
                        <p className="h1-tip">━ QUALITY YOU CAN AFFORD</p>
                        <h1 className="banner-container-h1">ASSISTED CARE <br /> INSTITUTE</h1>
                        <p className='text-divider'>━━</p>
                    </div>
                    <div className='banner-contact-con flex'>
                        <a className="banner-con-btn flex" href='#course'>Learn More</a>
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
                <div className="banner-logo-con flex-1 ">
                    <img src={require('../../../../assets/LogoRCFE.png')} className="banner-logo" alt="banner-logo" />
                </div>
            </div>
        </>
    )
}

export default Banner