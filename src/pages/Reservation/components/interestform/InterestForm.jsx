
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

    const SubmitMessage = async (e) => {
        e.preventDefault();
        const errArr = {}
        for (let i = 0; i !== 3; i++) {
            const validateErr = new Validator(form.current[i].name, form.current[i].value).validateStart()
            if (validateErr) errArr[form.current[i].name] = validateErr
        }
        const errorLength = Object.keys(errArr).length;
        try {
            if (errorLength > 0) throw errArr
            setLoading(true)
            emailjs.sendForm('service_2x4cxck', 'template_wg2ulnt', form.current, '3tiNk_K-47LEZ4niD')
                .then((data) => {
                    console.log(data.status)
                    setLoading(false)
                    setSuccess(true)
                }, (error) => {
                    console.log(error.text);
                });
        } catch (e) {
            setErrors(errArr)
            console.log(errors)
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
                    < form ref={form} className='interestform-module flex column' >
                        {
                            loading
                                ? <div className="interestform-loading" />
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
                                        <button onClick={(e) => SubmitMessage(e)} className=' form-btn' >Submit</button>
                                    </div>
                                </>
                        }
                    </form >
            }
        </>

    )
}

export default InterestForm




