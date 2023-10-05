import './footer.css'

const Footer = () => {
    return (
        <div className="footer-con flex column">
            <h1>ACI</h1>
            <div className="footer-divider"/>
            <div className="footer-rows">
                <div className="footer-licensing flex column">
                    <h2>Licensing</h2>
                    <p>━━━</p>
                    <a href="http://www.freepik.com">Designed by stories / Freepik</a>
                    <a href="http://www.vecteezy.com">Vecteezy</a>
                </div>
            </div>
        </div>
    )
}

export default Footer