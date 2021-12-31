import React from 'react'
import './home_text.style.scss'

export default function HomeText() {
    return (
        <div className='text_container'>
            <div className='tertiary_text'>Hello,</div>
            <div>
                <span className='tertiary_text'>I'm </span>
                <span className='primary_text'> Mahmoud Abdelghany</span>
                <span className='tertiary_text'>,</span>
            </div>
            <div>
                <span className='tertiary_text'>a </span>
                <span className='secondary_text'>Frontend Developer</span>
                <span className='tertiary_text'>.</span>
            </div>
        </div>
    )
}
