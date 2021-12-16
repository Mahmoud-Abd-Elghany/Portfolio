import React from 'react'
import { addExpandedClass } from '../../project/project.component'
import './desc-section.style.scss'

function DescSection({expanded}) {

    return (
            <div className={addExpandedClass('desc-section', expanded)}>
                <div className={addExpandedClass('desc-headline', expanded)}>Peacock</div>
                <div className={addExpandedClass('desc-par', expanded)}>An E-commerce website. Used firebase for user authentication and storing data, stripe for payment handeling, redux for state management and redux saga for handeling application side effects.</div>
            </div>
    )
}

export default DescSection
