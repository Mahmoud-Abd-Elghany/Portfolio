import React from 'react'
import './textfield.style.scss'

function TextField({type, placeholder, onChange, value}) {
    return (
            <div class="form__group field">
                {
                    type === 'textarea'?
                    <textarea type={`${type}`} className='form__field message__field' name={`${placeholder}`} id={`${placeholder.toLowerCase()}`} placeholder='Enter you message here...' required onChange={onChange} value={value}/>
                    :
                    <input type={`${type}`} className='form__field' name={`${placeholder}`} id={`${placeholder.toLowerCase()}`} placeholder={`${placeholder}...`} required onChange={onChange} value={value}/>
                }
                
                <label for="name" className="form__label">{placeholder}</label>
            </div>
    )
}

export default TextField
