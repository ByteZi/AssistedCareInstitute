import TOCData from "./data/TOCItems"
import TOCListItem from "./components/tocItems/TOCItem"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import './TOC.css'

const TermsOfCondition = () => {
    return (
        <div className="toc-con flex column just-center">
            <div className="toc-header-con flex">
                <h1 className="toc-header">Terms and Conditions</h1>
            </div>
            <p className="toc-header-text">Assisted Care Institute (ACI) is committed to a quality training
                experience. Therefore, we expect the same level of commitment from our
                students. By enrolling to ACI’s RCFE ICTP course, you agree in adhering to
                the following terms and conditions:</p>
            <ol className="toc-ol flex column">
                {TOCData.map((i, k) => <TOCListItem item={i} k={k} />)}
            </ol>
            <p className="toc-fail">
                Failure to adhere to the terms and conditions may result into termination
                of service without eligibility for refund.<br />
                ACI reserves the right to refuse service to anyone at anytime at the sole
                discretion of the training vendor.
            </p>
        </div>
    )
}

export default TermsOfCondition