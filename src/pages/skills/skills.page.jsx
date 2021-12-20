import React, { useState } from 'react';
import { skillsData } from './skills.data';
import './skills.style.scss';

function SkillsPage() {
    const [expandSkill, setExpandSkill] = useState({ Javascript: false, React: false});
    return (
        <div className='skills-page'>
            <div className='skills-container'>
                {
                    skillsData.map(skill => {
                        return(
                        <div className='skill-list'>
                            <div className={skill.sub.length > 0? 'skill-component full' : 'skill-component'} onClick={() => setExpandSkill({...expandSkill, [skill.name]: !expandSkill[skill.name]})}>
                                    <i className={`fab ${skill.icon}`}></i>
                                    <div>{skill.name}</div>
                            </div>
                            {
                                skill.sub.map(subSkill => {
                                    return(
                                        <div className={expandSkill[skill.name]? 'subskill-component expanded' : 'subskill-component'}>
                                            <i className='fas fa-angle-right'></i>
                                            <div>{subSkill.name}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default SkillsPage
