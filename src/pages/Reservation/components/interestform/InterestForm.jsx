import './InterestForm.css'
import './css/conditional.css'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Validator from './hooks/validations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

const InterestForm = () => {
    const form = useRef()
    const inputRef = useRef()
    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const SubmitMessage = (e) => {
        e.preventDefault()
        const errArr = {}
        for (let i = 0; i !== 3; i++) {
            const form_name = form.current[i].name
            const form_value = form.current[i].value
            const validateErr = new Validator(form_name, form_value).validateStart()
            if (validateErr) errArr[form_name] = validateErr
        }
        setErrors(errArr)



        if (Object.keys(errors).length > 0) console.error("Something went wrong with the input values", errors)
        else {
            // emailjs.sendForm('service_2x4cxck', 'template_wg2ulnt', form.current, '3tiNk_K-47LEZ4niD')
            //     .then((data) => {
            //         setLoading(true)
            //         console.log(data.status)
            //         setLoading(false)
            //         setSuccess(true)
            //     }, (error) => {
            //         console.log(error);
            //     });
            // setErrors({})
            console.log('success no errors', errors)
        }

    };


    return (
        <>
            {
                success ?
                    <div className="interestform-success flex align-center column">
                        <FontAwesomeIcon icon={faSmile} className="success-icon" />
                        <h1 className="success-h1">Awesome!</h1>
                        <p className="success-txt">We'll contact you soon.</p>
                    </div>
                    :
                    < form ref={form} onSubmit={(e) => SubmitMessage(e)} className='interestform-module flex column' >
                        {
                            loading
                                ? <div className="interestform-load" />
                                :
                                <>
                                    <h1 className="interestform-header">Reserve</h1>
                                    <div ref={inputRef} className="interestform-input-con">
                                        <input className="interestform-input" type='text' placeholder='Name' name="name" maxLength={30} />
                                        {errors['name'] && <p className="err-item">{errors['name']}</p>}
                                        <input type='text' className="interestform-input" maxLength={30} placeholder='Email' name="email" />
                                        {errors['email'] && <p className="err-item">{errors['email']}</p>}
                                        <input type="number"
                                            maxLength={9}
                                            placeholder='Telephone'
                                            name="phone"
                                            className="interestform-input"
                                        />
                                        {errors['phone'] && <p className="err-item">{errors['phone']}</p>}
                                        <textarea className="interestform-textarea" type='text' placeholder='Message' name="message" />
                                        <button type="submit" className=' form-btn' >Submit</button>
                                    </div>
                                </>
                        }
                    </form >
            }
        </>

    )
}

export default InterestForm




