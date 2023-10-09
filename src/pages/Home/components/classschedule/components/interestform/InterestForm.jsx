import './InterestForm.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser';

const InterestForm = ({interestFormRef}) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: ''
    })

    const Submit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    const CloseForm = (e) => {
        return interestFormRef.current.style.display = 'none'
    }

    return (
        <div className='interestform-con column align-center just-center' ref={interestFormRef}>
            <h1 className="interestform-header">Interest Form</h1>
            <form className='interestform-module flex column space-between'>
                <span>
                    <input type='text' placeholder='Name' value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                </span>

                <span>
                    <input type='text' placeholder='Email' value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                </span>

                <span>
                    <input type='text' placeholder='Telephone'></input>
                </span>
            </form>
            <div className="interest-form-btn-con">
                <button onClick={e => Submit(e)} className='interestform-submit form-btn' type='submit'>Submit</button>
                <button onClick={e => CloseForm(e)} className='interestform-close form-btn'>Close</button>
            </div>
        </div>
    )
}

export default InterestForm