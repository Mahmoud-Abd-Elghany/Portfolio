import React from 'react'
import { useState } from 'react'
import DescSection from '../project-sections/desc-section/desc-section.component';
import LinksSection from '../project-sections/links-section/links-section.components';
import TechSection from '../project-sections/tech-section/tech-section.component';
import './project.style.scss'

const Project = ({projectData:{name, desc, tech, links, img}}) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className='container'>
            <div className={addExpandedClass('card-container', expanded)}>
                    <div className={addExpandedClass('img-section', expanded)} style = {{backgroundImage: `url(${img})`}} onClick={() => setExpanded(!expanded)}></div>
                    <DescSection expanded={expanded} name={name} desc={desc}/>
                    <TechSection expanded = {expanded} tech= {tech}/>
                    <LinksSection expanded = {expanded} links={links}/>
            </div>
            <div className={addExpandedClass('title', expanded)}>{name}</div>
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
