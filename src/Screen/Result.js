import React,{useState} from 'react'
import Header from '../CustomComponent/Header'
import BurgerMenuScreen from './BurgerMenuScreen'
import {Link} from 'react-router-dom'
const Result=(props)=>{
    const [burgerMenu, setburgerMenu] = useState(false)
    const [fileName,setfileName]=useState(null)
    const burgerMenuClick = () => {
        props.history.push('/drawer')
    
    }

    return(
        <div  >
        <Header onMenuClick={() => burgerMenuClick()} />
        <div className="casename-container" >
                casename:{fileName===null?"-":fileName}
        </div>
       
        <div className="case-summary-container" >
            {/* 
<div className="case1-container" >
        <div className="case1-header" >case1</div>
        <i class="material-icons add-icon">add</i>
    </div>
    */}


        </div>

        <div className="all-action-container" >
        <div className="tab-container" >
            <Link to="/casesummarydata" className="tab-container-tabs " >
                    CASE SUMMARY DATA
        </Link>



                <Link  className="tab-container-tabs " to="/actionummarydata" >
                    ACTION SUMMARY DATA
        </Link>

                <Link className="tab-container-tabs active-tab" to="/result" >RESULT</Link>

                


            </div>
</div>
</div>
    )
}

export default Result