import React from 'react'
import '../css/mainHeader.css'
import logo from '../images/logo-small.png'
import {Link} from 'react-router-dom'
const MainHeader = (props) => {
    
    return (
        <div className="main-header-container" >
           <div>
           <img src={logo} className="logo" />
         
           </div>
          <div className="sub-item-container" >
              <Link>Home</Link>
              <Link>contact</Link>
              <Link to="/signup" >signup</Link>
              <Link to="/login" >login</Link>
         
         </div> 
            
        </div>
    )
}

export default MainHeader
