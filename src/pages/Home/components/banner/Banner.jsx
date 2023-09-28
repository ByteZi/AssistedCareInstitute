import './Banner.css'

const Banner = (props) => {

    return (
        <div className="banner-con flex align-center">

            <div className="banner-text flex-1 flex column just-center">
                <div className="banner-headers">
                    <h1 className="banner-container-h1">ASSISTED CARE <br /> INSTITUTE</h1>
                    <p className='text-divider'>━</p>
                    <h3 className="banner-container-h3">QUALITY YOU CAN AFFORD</h3>
                </div>
                <p className="banner-container-btn ">Learn More</p>
            </div>

            <div className='banner-img flex flex-1'>
                    <img src={require('./assets/hands.png')} className='hands' />
            </div>
        </div>
    )
}

export default Banner