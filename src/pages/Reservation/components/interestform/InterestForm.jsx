
import './InterestForm.css'
import './css/conditional.css'
import { useState } from 'react';
import { useRef } from 'react';
import { timeOptions, dateOptions } from './data/timeOptions'
import Loading from './components/Loading/Loading';
import Success from './components/Success/Success';
import ErrItem from './components/ErrItem/ErrItem';
import FormInput from './components/FormInput/FormInput';
import SubmitFormBtn from './components/SubmitFormBtn/SubmitFormBtn';

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




    return (
        <>
            {
                success
                    ? <Success />
                    :
                    < form ref={form} className='interestform-module flex column' >
                        {
                            loading
                                ? <Loading />
                                :
                                <>
                                    <h1 className="interestform-header">Reserve</h1>
                                    <div ref={inputRef} className="interestform-input-con">
                                        <FormInput name={"name"} />
                                        <ErrItem errors={errors} item={"name"} />

                                        <FormInput name={"email"} />
                                        <ErrItem errors={errors} item={"email"} />

                                        <input
                                            type="text"
                                            value={phone}
                                            onChange={e => setPhone(formatPhoneNumber(e.target.value))}
                                            maxLength={10}
                                            placeholder='Telephone'
                                            name="phone"
                                            className="interestform-input"
                                        />
                                        <ErrItem errors={errors} item={"phone"} />

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
                                        <ErrItem errors={errors} item={"time"} />

                                        <textarea
                                            className="interestform-textarea"
                                            type='text' placeholder='Message'
                                            name="message"
                                        />

                                        <SubmitFormBtn
                                            form={form}
                                            setErrors={setErrors}
                                            setLoading={setLoading}
                                            setSuccess={setSuccess}
                                        />
                                    </div>
                                </>
                        }
                    </form >
            }
        </>

    )
}

export default InterestForm




