import React from 'react'
import './tech-section.style.scss'

function TechSection({expanded}) {
    return (
        <div className={expanded? 'tech-section expanded' : 'tech-section'}></div>
    )
}

export default TechSection
