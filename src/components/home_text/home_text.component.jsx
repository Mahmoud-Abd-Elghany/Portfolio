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
            <div className='links-list'>
                <a className='icon-home' href={"https://www.linkedin.com/in/mahmoudabdelghany/"} target="_blank" rel="noopener noreferrer">
                <div className='icon'><i class="fab fa-linkedin fa-2x"></i></div>
                </a>  
                <a className='icon-home' href={"https://github.com/Mahmoud-Abd-Elghany/"} target="_blank" rel="noopener noreferrer">
                <div className='icon'><i class="fab fa-github-square fa-2x"></i></div>
                </a> 
                <a className='icon-home' href={"https://drive.google.com/file/d/1MXNuS4uq-M7ummvUpk-ChDiU4IymQBCD/view?usp=sharing"} target="_blank" rel="noopener noreferrer">
                    <div className='icon'><i class="far fa-file fa-2x"></i></div>
                </a>
            </div>
        </div>
    )
}
