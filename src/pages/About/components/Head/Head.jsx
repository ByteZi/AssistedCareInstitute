import './Head.css'

const Head = () => {
    return (
        <div className="about-head-con flex align-center just-center ">
            <div className="about-img-con flex just-center ">
                <img src={require('./assets/owner/owner.jpg')} className="owner-img" alt="owner"/>
            </div>
            <div className="about-text-con flex column ">
                <p className="about-tip h1-tip">━ About the Owner</p>
                <h1 className="about-title">Theresa Aguirre, RN-MSN</h1>
                <p className="about-title-desc about-p ">
                    Theresa Aguirre, is the owner and training vendor
                    of Assisted Care Institute. A master’s degree
                    prepare registered nurse with more than 15 years
                    of patient care experience in a variety of health
                    care settings.
                </p>
            </div>
        </div>
    )
}

export default Head