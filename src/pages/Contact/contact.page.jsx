import React, { useState } from 'react'
import TextField from '../../components/textfield/textfield.component';
import './contact.style.scss'

function ContactPage() {
    const [formData, setFormData] = useState({
        email: '',
        subject:'',
        message: '',
    })

    const changeHandler = async (e) => {
        e.preventDefault()
        const key = e.target.id;
        const value = e.target.value;
         await setFormData({
            ...formData,
            [key]: value,
        })
        await console.log(formData);
    }
    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <form className='form-container'>
            <TextField type = 'email' placeholder='Email' onChange={changeHandler} value={formData.email}/>
            <TextField type = 'input' placeholder='Subject' onChange={changeHandler} value={formData.subject}/>
            <TextField type = 'input' placeholder='Message' onChange={changeHandler} value={formData.message}/>
            <button className='custom-btn' type='submit'>Submit</button>
        </form>
    )
}

export default ContactPage
