import React from 'react'
import { useState } from 'react'
import DescSection from '../project-sections/desc-section/desc-section.component';
import LinksSection from '../project-sections/links-section/links-section.components';
import TechSection from '../project-sections/tech-section/tech-section.component';
import './project.style.scss'

const Project = () => {
    const [expanded, setExpanded] = useState(false);
    const img = 'https://images.unsplash.com/photo-1633113215937-18127a49a8a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    return (
        <div className={addExpandedClass('card-container', expanded)}>
                <div className={addExpandedClass('img-section', expanded)} style = {{backgroundImage: `url(${img})`}} onClick={() => setExpanded(!expanded)}>
                    <div className='background-hover'></div>
                </div>
                <DescSection expanded={expanded} />
                <TechSection expanded = {expanded} />
                <LinksSection expanded = {expanded} />
        </div>
    )
}

export const addExpandedClass = (baseClass, expanded) => {
    if(expanded){
        return `${baseClass} expanded `;
    }else{
         return `${baseClass}`;
    }

};

export default Project
