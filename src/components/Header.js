import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { AiOutlineBars, AiOutlinePlus } from 'react-icons/ai'
import { CgProfile } from "react-icons/cg";
import { HiDotsVertical } from "react-icons/hi";

const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <nav className="header">
            <div className="logo">
                <Link to="/">
                    weApp
                </Link>
            </div>            
            <ul className={isNavOpen ? "" : "nav__hide"}>
                <p className="menu__smallscreen">Menu</p>
                <li>
                    <Link to="/">
                        <IoHome /> 
                        <div>News</div>
                    </Link>
                </li>
                <li>
                    <Link to="/users">
                        <AiOutlineBars /> 
                        <div>Users</div>
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <CgProfile /> 
                        <div>Me</div>
                    </Link>
                </li>
                <li>
                    <Link to="/create-post">
                        <AiOutlinePlus />
                        <div>Create new article</div>
                    </Link>
                </li>
            </ul>
            <div className="header__right">
                <Link to="/profile"><CgProfile /></Link>
                <HiDotsVertical onClick={() => setIsNavOpen(!isNavOpen)} />
            </div>
        </nav>
    )
}

export default Header