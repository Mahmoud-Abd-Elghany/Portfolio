import React, { useState } from 'react'
import TextFieldCustom from '../../components/textfield/textfield.component';
import './contact.style.scss'
import emailjs from 'emailjs-com';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function ContactPage() {
    const [formData, setFormData] = useState({
        email: '',
        name:'',
        message: '',
    })

    const changeHandler = (e) => {
        
        e.preventDefault()
        const key = e.target.placeholder;
        const value = e.target.value;
        console.log(e.target);
         setFormData({
            ...formData,
            [key]: value,
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        emailjs.send('service_afonath', 'template_72pid4p', formData, process.env.REACT_APP_USER_ID)
            .then((result) => {
                alert('Your Massege has been received');
            }, (error) => {
                console.log(error.text);
            });
        setFormData({
            Email: '',
            Name:'',
            Message: '',
        });
    }
    return (
        <div className='contact-page'>
            <div className='contact-container'>
                <form onSubmit={submitHandler} className='form-container'>
                    <TextFieldCustom type = 'email' placeholder='Email' onChange={changeHandler} value={formData.Email}/>
                    <TextFieldCustom type = 'input' placeholder='Name' onChange={changeHandler} value={formData.Name}/>
                    <TextFieldCustom type = 'textarea' placeholder='Message' onChange={changeHandler} value={formData.Message} multiline={true} minRows={5}/>
                    <Button variant="contained" endIcon={<SendIcon />} sx={{borderRadius: "0px", backgroundColor:"rgb(0, 128, 233)"}}>
                        Send
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage
