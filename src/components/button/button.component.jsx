import React from 'react'
import './button.style.scss'

function Button(props) {
    return (
        <div className='btn-container'>
            <button className={ props.active?  'custom-btn inverted' : 'custom-btn'}>{props.children}</button>
        </div>
    )
}

export default Button
