import emailjs from '@emailjs/browser';
import Validator from './hooks/Validator'
import './SubmitFormBtn.css'

const SubmitFormBtn = ({ form, setLoading, setSuccess, setErrors }) => {

    const SubmitMessage = async (e) => {
        e.preventDefault();
        setLoading(true)
        const timeErr = "Please complete time selection"
        const errObj = {}
        for (let i = 0; i !== 7; i++) {
            const validateErr = new Validator(form.current[i].name, form.current[i].value).validateStart()
            if (validateErr === timeErr) {
                errObj['time'] = timeErr
            } else if (validateErr) {
                errObj[form.current[i].name] = validateErr
            }
        }
        const errorLength = Object.values(errObj).length
        try {
            if (errorLength > 0) throw errObj
          
            emailjs.sendForm('service_2x4cxck', 'template_wg2ulnt', form.current, '3tiNk_K-47LEZ4niD')
                .then((data) => {
                    console.log('Sending to email')
                    setLoading(true)
                    
                    setSuccess(true)
                    console.log(data.status)
                    console.log('Successfully sent!')
                }, (error) => {
                    console.log(error);
                });
        } catch (e) {
            console.error(e)
            setErrors(errObj)
        }
        setLoading(false)

    };

    return <button
        onClick={(e) => SubmitMessage(e)}
        className=' form-btn'>
        Submit
    </button>
}

export default SubmitFormBtn