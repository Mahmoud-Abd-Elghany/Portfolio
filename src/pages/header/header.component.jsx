import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import Button from '../../components/button/button.component';
import './header.style.scss'

function Header() {
    const location = useLocation();
    const path = location.pathname;
    return (
        <div>
            <div className={path === "/Projects" || path === "/Contact" ? "background-sec project-section": "background-sec"}></div>
            <div className={path === "/Projects" || path === "/Contact" ? "btn-section  project" : "btn-section"}>
                <Link className="link-style" to="/">
                    <Button active={path === "/"}>
                    Home
                    </Button>
                </Link>
                <Link className="link-style" to="/Projects">
                    <Button active={path === "/Projects"}>
                    Projects
                    </Button>
                </Link>
                <Link className="link-style" to="/Skills">
                    <Button active={path === "/Skills"}>
                    Skills
                    </Button>
                </Link>
                <Link className="link-style" to="/Contact">
                    <Button active={path === "/Contact"}>
                    Contact
                    </Button>
                </Link>
            </div>  
        </div>
    )
}

export default Header
