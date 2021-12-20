import React from 'react'
import {Switch, Route, useLocation} from "react-router-dom";
import {CSSTransition, TransitionGroup } from "react-transition-group";
import Home from '../home/home.page';
import ProjectsPage from '../projects/projects.page';
import ContactPage from '../Contact/contact.page';
import './container.style.scss'
import SkillsPage from '../skills/skills.page';

function Container() {
    const location = useLocation();
    return (
        <div className='cont'>
            <TransitionGroup>
                <CSSTransition
                    key = {location.key}
                    appear ={true}
                    timeout={800}
                    classNames="fade"
                    >
                    <Switch location={location}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/Projects" component={ProjectsPage}/>
                        <Route path="/Contact" component={ContactPage}/>
                        <Route path="/Skills" component={SkillsPage}/>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default Container
