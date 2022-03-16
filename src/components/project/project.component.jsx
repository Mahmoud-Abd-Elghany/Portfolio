import React from 'react'
import DescSection from '../project-sections/desc-section/desc-section.component';
import LinksSection from '../project-sections/links-section/links-section.components';
import TechSection from '../project-sections/tech-section/tech-section.component';
import './project.style.scss'

const Project = ({projectData:{name, desc, tech, links, img}, active, setActive, expanded, setExpanded}) => {
    console.log(expanded === name)
    return (
        <div className='container'>
            <div className={addExpandedClass('card-container', expanded === name)}>
                    <div className={addExpandedClass('img-section', expanded)} style = {{backgroundImage: `url(${img})`}} onClick={() => {
                    expanded? setExpanded("") : setExpanded(name)
                    setActive(!active)
                    }}></div>
                    <DescSection expanded={expanded === name} name={name} desc={desc}/>
                    <TechSection expanded = {expanded === name} tech= {tech}/>
                    <LinksSection expanded = {expanded === name} links={links}/>
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
