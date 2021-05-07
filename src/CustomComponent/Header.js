import React from 'react'
import '../css/header.css'
import logo from '../images/logo-small.png'
import header from '../images/logo-white.png'
import {Link} from'react-router-dom'
const Header = (props) => {
    
    return (
        <div className="header" >
            <Link to="/favourite" className="header-logo" >
            <img alt="logo" src={header} className="header-logo" />
            </Link>
            <div>
            <input placeholder="SEARCH" className="search-text-input" />
            </div>
            <div>
            <i onClick={()=>props.onMenuClick()} class="material-icons burger-menu">menu</i>
            </div>
            
        </div>
    )
}

export default Header
