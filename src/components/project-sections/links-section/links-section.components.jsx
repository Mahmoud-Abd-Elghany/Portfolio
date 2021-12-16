import React from 'react'
import './links-section.style.scss'

function LinksSection({expanded}) {
    
    return (
        <div className={expanded? 'links-section expanded' : 'links-section'}></div> 
    )
}

export default LinksSection
