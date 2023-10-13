
import './InterestForm.css'
import './css/conditional.css'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Validator from './hooks/validations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { timeOptions, dateOptions } from './data/timeOptions'

const InterestForm = () => {
    const form = useRef()
    const inputRef = useRef()
    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [phone, setPhone] = useState('')

    const formatPhoneNumber = (val) => {
        if (!val) return val
        const phoneNumber = val.replace(/[^\d]/g, '');
        const phoneLength = val.length
        // if (phoneLength > 4) return setPhone(`(${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)})`)
        // return setPhone(`(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}`)
        // console.log(val) 
        return phoneNumber
    }

    const SubmitMessage = async (e) => {
        e.preventDefault();
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
            setLoading(true)
            emailjs.sendForm('service_2x4cxck', 'template_wg2ulnt', form.current, '3tiNk_K-47LEZ4niD')
                .then((data) => {
                    console.log('Sending to email')
                    setLoading(true)
                    setSuccess(true)
                    console.log(data.status)
                }, (error) => {
                    console.log(error);
                });
        } catch (e) {
            // console.error(e)
            setErrors(errObj)
        }
        setLoading(false)

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
                                        <input
                                            className="interestform-input"
                                            type='text'
                                            placeholder='Name'
                                            name="name"
                                            maxLength={30}
                                        />
                                        {errors['name'] && <p className="err-item">{errors['name']}</p>}

                                        <input
                                            type='text'
                                            className="interestform-input"
                                            maxLength={30}
                                            placeholder='Email'
                                            name="email"
                                        />
                                        {errors['email'] && <p className="err-item">{errors['email']}</p>}

                                        <input type="text"
                                            value={phone}
                                            onChange={e => setPhone(formatPhoneNumber(e.target.value))}
                                            maxLength={10}
                                            placeholder='Telephone'
                                            name="phone"
                                            className="interestform-input"
                                        />
                                        {errors['phone'] && <p className="err-item">{errors['phone']}</p>}

                                        <div className="interestform-time-con flex column align-center">
                                            <p className="interestform-time-txt">Best time to contact:</p>
                                            <div className="interestform-time flex space-evenly">
                                                <div className="interestform-time-from-con">
                                                    <select name="timeFrom">
                                                        <option value="--" selected disabled hidden>---</option>
                                                        {timeOptions.map((value, k) => <option key={k} value={value}>{value}</option>)}
                                                    </select>

                                                    <select name="timeMeridiemFrom" defaultValue="--">
                                                        <option value="--" selected disabled hidden>---</option>
                                                        <option value="AM">AM</option>
                                                        <option value="PM">PM</option>
                                                    </select>
                                                </div>

                                                <p className="interestform-meridiem-div inline">-</p>

                                                <div className="interestform-time-to">
                                                    <select name="timeTo">
                                                        <option value="--" selected disabled hidden>---</option>
                                                        {timeOptions.map((value, k) => <option key={k} value={value}>{value}</option>)}
                                                    </select>

                                                    <select name="timeMeridiemTo">
                                                        <option value="--" selected disabled hidden>---</option>
                                                        <option value="AM">AM</option>
                                                        <option value="PM">PM</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {errors['time'] && <p className="err-item">{errors['time']}</p>}

                                        <textarea
                                            className="interestform-textarea"
                                            type='text' placeholder='Message'
                                            name="message"
                                        />
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




