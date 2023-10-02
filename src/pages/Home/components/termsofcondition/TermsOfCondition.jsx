import TermsOfCondition from "./data/TermsOfCondition"

const TermsOfCondition = () => {
    return (
        <div className="TOC-con">
            <h1>Terms of Conditions</h1>
            <p>Assisted Care Institute (ACI) is committed to a quality training
                experience. Therefore, we expect the same level of commitment from our
                students. By enrolling to ACI’s RCFE ICTP course, you agree in adhering to
                the following terms and conditions:</p>
            <ol>
                {TermsOfCondition.map((i,k) => {
                    
                })}
            </ol>
            <p>
                Failure to adhere to the terms and conditions may result into termination
                of service without eligibility for refund.
            </p>
            <p>
                ACI reserves the right to refuse service to anyone at anytime at the sole
                discretion of the training vendor.
            </p>
            <h2>Refund Policy</h2>
            <p>While all sales are final, registration fees can be credited towards a future
                course.  ACI has a 72-hour advanced-notice cancellation policy. The
                student needs to attend ALL 10 day sessions in order to successfully
                complete the course.  Refer to the make up policy for more information.</p>
        </div>
    )
}

export default TermsOfCondition