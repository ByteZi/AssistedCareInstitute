import './footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className="footer-con flex column just-center">
            < div className="footer-top flex align-center just-center" >  
                <p>©ACI 2023 </p>    
                <p className="footer-link-divider"> | </p>      
                <Link className="footer-link-top" to={'/policies/terms-of-conditions'}>Terms and Condition</Link>
                <p className="footer-link-divider"> | </p>
                <Link className="footer-link-top" to={'/policies/refund-policy'}>Refund Policy</Link>
            </div >
            <div className="footer-divider" />
            <div className="footer-rows">
                <div className="footer-licensing flex column">
                    <h3>Licensing</h3>
                    <p>━━━</p>     
                    <a className="row-txt" href="http://www.freepik.com">Designed by stories / Freepik</a>
                    <a className="row-txt" href="http://www.vecteezy.com">Vecteezy</a>
                </div>
            </div>
        </div>
    )
}

export default Footer


// <div className="footer-divider" />
// <div className="footer-rows">
// <div className="footer-licensing flex column">
//     <h3>Licensing</h3>
//     <p>━━━</p>
//     <a className="row-txt" href="http://www.freepik.com">Designed by stories / Freepik</a>
//     <a className="row-txt" href="http://www.vecteezy.com">Vecteezy</a>
// </div>
// </div>