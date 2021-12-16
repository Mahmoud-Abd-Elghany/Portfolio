import React from 'react'
import Project from '../../components/project/project.component'
import projects from './projects.data'
import './projects.page.scss'

function ProjectsPage() {
    return (
        <div className='projects-container'>
        {
            projects.map( projectData => {
                return (
                        <Project projectData={projectData}/>
                )
            })
        }
            
        </div>
    )
}

export default ProjectsPage
