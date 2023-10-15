
import './InterestForm.css'
import { useState, useRef } from 'react';
import Loading from './components/Loading/Loading';
import Success from './components/Success/Success';
import FormInput from './components/FormInput/FormInput';
import SubmitFormBtn from './components/SubmitFormBtn/SubmitFormBtn';
import PhoneInput from './components/PhoneInput/PhoneInput';
import SelectTime from './components/SelectTime/SelectTIme';

const InterestForm = () => {
    const form = useRef()
    const inputRef = useRef()
    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [phone, setPhone] = useState('')

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
                                        {errors.name && <p className="err-item">{errors.name}</p> }

                                        <FormInput name={"email"} />
                                        {errors.email && <p className="err-item">{errors.email}</p> }

                                        <PhoneInput setPhone={setPhone} phone={phone} />
                                        {errors.phone && <p className="err-item">{errors.phone}</p> }

                                        <SelectTime />
                                        {errors.time && <p className="err-item">{errors.time}</p> }

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




