import React, {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import Button from '../../components/button/button.component';
import './header.style.scss'

function Header() {
    const location = useLocation();
    const path = location.pathname;
    const [headerActive, setHeaderActive] = useState(false);
    return (
        <div className={headerActive? "header-container active" : "header-container"}>
            <i className="fas fa-bars bars" onClick={() => setHeaderActive(!headerActive)}></i>
            <div className={headerActive? "btn-section active" : "btn-section"} onClick={() => setHeaderActive(false)}>
                <Link className="link-style" to="/">
                    <Button active={path === "/"}>
                     &#60;Home/&#62;
                    </Button>
                </Link>
                <Link className="link-style" to="/Projects" >
                    <Button active={path === "/Projects"}>
                    &#60;Projects/&#62;
                    </Button>
                </Link>
                <Link className="link-style" to="/Skills">
                    <Button active={path === "/Skills"}>
                    &#60;Skills/&#62;
                    </Button>
                </Link>
                <Link className="link-style" to="/Contact">
                    <Button active={path === "/Contact"}>
                    &#60;Contact/&#62;
                    </Button>
                </Link>
            </div>  
        </div>
    )
}

export default Header
