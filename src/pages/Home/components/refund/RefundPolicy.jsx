import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import './RefundPolicy.css'

const RefundPolicy = () => {

    return (
        <div className="toc-refund-con flex column align-center text-center ">
            <div className="toc-header-con flex flex-1">
                <FontAwesomeIcon icon={faAsterisk} className="h1-ast" />
                <h1 className="toc-refund">Refund Policy</h1>
            </div>
            <p>While all sales are final, registration fees can be credited towards a future
                course. ACI has a 72-hour advanced-notice cancellation policy. The
                student needs to attend ALL 10 day sessions in order to successfully
                complete the course. Refer to the make up policy for more information.</p>
        </div>
    )
}

export default RefundPolicy