import React from 'react'
import { addExpandedClass } from '../../project/project.component'
import './desc-section.style.scss'

function DescSection({expanded, name, desc}) {
    return (
            <div className={addExpandedClass('desc-section', expanded)}>
                <div className={addExpandedClass('desc-headline', expanded)}>{name}</div>
                <div className={addExpandedClass('desc-par', expanded)}>{desc}</div>
            </div>
    )
}

export default DescSection
