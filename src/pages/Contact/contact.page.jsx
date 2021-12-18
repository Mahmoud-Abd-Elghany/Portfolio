import React, { useState } from 'react'
import TextField from '../../components/textfield/textfield.component';
import './contact.style.scss'
import emailjs from 'emailjs-com';

function ContactPage() {
    const [formData, setFormData] = useState({
        email: '',
        subject:'',
        message: '',
    })

    const changeHandler = (e) => {
        e.preventDefault()
        const key = e.target.id;
        const value = e.target.value;
         setFormData({
            ...formData,
            [key]: value,
        })
    }

    const submitHandler = (e) => {
        console.log(`'${process.env.REACT_APP_SERVICE_ID}'`)
        e.preventDefault();
        emailjs.send('service_afonath', 'template_72pid4p', formData, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <form onSubmit={submitHandler} className='form-container'>
            <TextField type = 'email' placeholder='Email' onChange={changeHandler} value={formData.email}/>
            <TextField type = 'input' placeholder='Subject' onChange={changeHandler} value={formData.subject}/>
            <TextField type = 'textarea' placeholder='Message' onChange={changeHandler} value={formData.message}/>
            <button className='send-btn' type='submit'>Send <i class="fas fa-paper-plane"></i></button>
        </form>
    )
}

export default ContactPage
