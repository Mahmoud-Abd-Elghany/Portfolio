import React from 'react'
import './textfield.style.scss'

function TextField({type, placeholder, onChange, value}) {
    console.log('value',value);
    return (
            <div class="form__group field">
                <input type={`${type}`} class="form__field" placeholder={`${placeholder}`} name={`${placeholder}`} id={`${placeholder.toLowerCase()}`} required onChange={onChange} value={value}/>
                <label for="name" class="form__label">{placeholder}</label>
            </div>
    )
}

export default TextField
