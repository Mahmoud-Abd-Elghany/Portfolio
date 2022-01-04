import React from 'react'
import './links-section.style.scss'

function LinksSection({expanded, links: {github, demo}}) {
    
    return (
        <div className={expanded? 'links-section expanded' : 'links-section'} target="_blank">
                <a className='icon-custom' href={demo} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-desktop fa-2x" ></i>
                </a>
                <a className='icon-custom' href={github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-2x"></i>
                </a>  
  
        </div> 
    )
}

export default LinksSection
