import React, { useState } from 'react'
import Project from '../../components/project/project.component'
import projects from './projects.data'
import './projects.page.scss'

function ProjectsPage(){
    const [expanded, setExpanded] = useState("");
    const [active, setActive] = useState(false);
    return (
        <div className={active? 'projects-container expanded': 'projects-container'}>
            <div className='projects-list'>
            {
                projects.map( projectData => {
                    return (
                        <div className={
                            active? expanded===projectData.name? "visible": "hidden" : "visible"
                        } key = {projectData.key}>
                            <Project 
                                projectData={projectData} 
                                expanded={expanded} 
                                active={active}
                                setExpanded={setExpanded}
                                setActive={setActive}
                                />
                        </div>
                            
               )
                })
            }  
            </div>
        </div>
    )
}

export default ProjectsPage
