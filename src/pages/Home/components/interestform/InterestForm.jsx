import './InterestForm.css'
import { useState } from 'react'

const InterestForm = () => {

    const [formData, setFormData]= useState({
        name :'',
        email:'',
        telephone:''
    })

    const Submit = (e) =>{
       e.preventDefault();
        console.log(formData);
    }

    const CloseForm = (e) =>{
        const interestForm = document.querySelector('.interestform-con')
        return interestForm.style.display = 'none'
    }

    return (
        <div className='interestform-con flex column align-center just-center'>
                <h1>Interest Form</h1>
                <p className='text-divider'>━━━</p>
            <form className='interestform-module flex column space-between'>
                    
                <span>
                    <input type='text' placeholder='Name' value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}/>
                </span>

                <span>
                    <input type='text' placeholder='Email' value={formData.email}  onChange={e => setFormData({...formData, email: e.target.value})}/>
                </span>

                <span>
                    <input type='text' placeholder='Telephone'></input>
                </span>
            </form>
            <div className="interest-form-btn-con">
            <button onClick={e=> Submit(e)} className='interestform-submit form-btn' type='submit'>Submit</button>
            <button onClick={e => CloseForm(e)}className='interestform-close form-btn'>Close</button>
            </div>
        </div>
    )
}

export default InterestForm