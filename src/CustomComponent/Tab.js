import React from 'react'
import '../css/tab.css'
import startcase from '../images/plus.png'
import {Link} from 'react-router-dom'
const Tab = () => {
    
     return (
        <div className="tab-container" >
               <Link to="/casesummary" className="tab-container-tabs" >
               START A CASE
                </Link>
         
            <Link to="/favourite" className="tab-container-tabs" >
                FAVOURITE
                </Link>
            <Link className="tab-container-tabs" to="/recent" >CASES</Link>
            
             
            
            
            
            <Link to="/allaction" className="tab-container-tabs" >ACTION LIBRARY</Link>
            
        </div>
    )
}

export default Tab
