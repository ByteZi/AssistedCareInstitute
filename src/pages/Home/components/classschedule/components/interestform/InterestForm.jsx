import './InterestForm.css'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Validator from './hooks/validations'

const InterestForm = ({ interestFormRef }) => {
    const form = useRef()
    const [errors, setErrors] = useState([])
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const formVisible = useRef(true)

    const SubmitMessage = (e) => {
        e.preventDefault();

        const errArr = []

        for (let i = 0; i != 3; i++) {
            const form_name = form.current[i].name
            const form_value = form.current[i].value
            const validateErr = new Validator(form_name, form_value).validateStart()

            if (validateErr) errArr.push(validateErr)
        }
        setErrors(errArr)
        if (errArr.length > 0) return null
        console.log('success')
        if (!errors) return console.log(errors)
        emailjs.sendForm('service_2x4cxck', 'template_wg2ulnt', form.current, '3tiNk_K-47LEZ4niD')
            .then((data) => {
                formVisible.current.style.display = "none"
                setLoading(true)
                console.log(data.status)
                setLoading(false)
                setSuccess(true)
            }, (error) => {
                console.log(error.text);
            });

    };

    const CloseForm = (e) => {
        e.preventDefault()
        interestFormRef.current.style.display = 'none'
        formVisible.current.style.display = "block"
        setSuccess(false)
        setErrors([])
    }

    return (
        <div className='interestform-con column align-center just-center' ref={interestFormRef}>
            {
                errors && errors.map((item, k) => <p key={k} className="err-item">{item}</p>)
            }
            {
                success &&
                <div className="interestform-success flex column just-center align-center">
                    <h1 className="interestform-success">Success</h1>
                    <button onClick={e => CloseForm(e)} className='interestform-close form-btn'>Close</button>
                </div>
            }
            {
                // FORM
                loading ?
                    <div className="interestform-loading" />
                    :
                    <div ref={formVisible}>
                        <h1 className="interestform-header">Interest Form</h1>
                        <form ref={form} className='interestform-module flex column space-between align-center'>

                            <span>
                                <input type='text' placeholder='Name' name="name" />
                            </span>

                            <span>
                                <input type='text' maxLength={20} placeholder='Email' name="email" />
                            </span>

                            <span>
                                <input type='text' maxLength={9} placeholder='Telephone' name="phone" />
                            </span>

                            <span>
                                <textarea type='text' placeholder='Message' name="message" />
                            </span>
                        </form>

                        <div className="interest-form-btn-con">
                            <button onClick={(e) => SubmitMessage(e)} className='interestform-submit form-btn' >Submit</button>
                            <button onClick={e => CloseForm(e)} className='interestform-close form-btn'>Close</button>
                        </div>
                    </div>
            }


        </div>
    )
}

export default InterestForm