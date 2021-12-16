import React from 'react'
import './tech-section.style.scss'

function TechSection({expanded, tech}) {
    return (
        <div className={expanded? 'tech-section expanded' : 'tech-section'}>
            {
                tech.map(tech => {
                    return (
                        <div className='tech'>
                        &bull; {tech}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TechSection
