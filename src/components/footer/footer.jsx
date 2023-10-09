import './Footer.css'
import { Link } from 'react-router-dom'
import TOC from '../../pages/TOC/TOC'

const Footer = () => {
    return (
        <div className="footer-con flex column">
            <div className="footer-top flex">
                <Link className="footer-link-top" element={<TOC/>} to={'/ToC'}>Terms of Condition</Link>
                <p className="footer-link-divider"> | </p>
            </div>
            <div className="footer-divider"/>
            <div className="footer-rows">
                <div className="footer-licensing flex column">
                    <h3>Licensing</h3>
                    <p>━━━</p>
                    <a href="http://www.freepik.com">Designed by stories / Freepik</a>
                    <a href="http://www.vecteezy.com">Vecteezy</a>
                </div>
            </div>
        </div>
    )
}

export default Footer