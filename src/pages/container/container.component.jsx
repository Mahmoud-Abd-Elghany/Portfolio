import React from 'react'
import {Switch, Route, useLocation} from "react-router-dom";
import {CSSTransition, TransitionGroup } from "react-transition-group";
import Home from '../home/home.page';
import ProjectsPage from '../projects/projects.page';
import './container.style.scss'

function Container() {
    const location = useLocation();
    return (
        <div>
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
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default Container
