import React,{useState,useEffect} from 'react'
import Header from '../CustomComponent/Header'
import Tab from '../CustomComponent/Tab'
import '../css/index.css'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import {Link} from 'react-router-dom'

const Recent = (props) => {
    const [burgerMenu,setburgerMenu]=useState(false)
    const [caseSummaryList,setcaseSummaryList]=useState([])
    const burgerMenuClick=()=>{
        props.history.push('/drawer')
    
    }
    useEffect(() => {
        getCaseSummaryList()
     }, [])
  

    const getCaseSummaryList=()=>{
        var token= localStorage.getItem("token")
        fetch(`http://admin.anesthesiaone.com/api/user-case-summaries?token=${token}`)
        .then(response => response.json())
        .then(res =>{
            if(res.status==="true"&&res.message==="User Case Summarries"){
                setcaseSummaryList(res.data)
            }
        })
    }

    const deleteCaseSummaryAsPerId=(casesummaryId)=>{
        var token= localStorage.getItem("token")
        fetch(`http://admin.anesthesiaone.com/api/case-summary/${casesummaryId}?token=${token}` ,{
        method: 'DELETE',
      
    })
        .then(response => response.json())
        .then(res =>{
            console.log(res.data)
            window.location.reload()
        })
    }

    
    return (
        <div  >

            <BurgerMenuModal modalIsOpen={burgerMenu} />

            <Header onMenuClick={()=> burgerMenuClick()} />
            <div className="index-tab-container" >
            <div className="tab-container" >
               <Link to="/casesummary" className="tab-container-tabs" >
               START A CASE
                </Link>
         
            <Link to="/favourite" className="tab-container-tabs " >
                FAVOURITE
                </Link>
            <Link className="tab-container-tabs active-tab" to="/recent" >CASES</Link>
            
             
            
            
            
            <Link to="/allaction" className="tab-container-tabs" >ACTION LIBRARY</Link>
            
        </div>
    
            </div>
            <div class="col-md-12 pl-0 pr-2">

<div class="conArea d-block">
    <div class="LHeadings text-center">
        <a href="#" onclick="goBack()"><i class="fii icon-down-arrow"></i></a> CASES
    </div>

    <div class="row">
        <div class="col-md-12 savedCases">
             <ul class="savdcard">

                {
                    caseSummaryList.map((data)=>{
                        return(
                            <li onClick={()=>props.history.push({ pathname: '/casesummarydata',
                            state:{caseSummaryId:data.id}
                        })} >
                            <div class="cszeDetail">
                                <h5>{ data.name}</h5>
                                <p>{data.created_at}</p>
                            </div>
        
                            <div class="soclsBtn">
                                <a href="#"><i class="fii icon-share-2"></i></a>
                                <a  href="#"> <i onClick={()=>deleteCaseSummaryAsPerId(data.id)} class="material-icons">delete</i></a>
                                <a href="#"><i class="fii icon-edit"></i></a>
                            </div>
                            <div class="clearfix"></div>
                        </li>
                      
                        )
                    })
                }
               
            </ul>
           </div>
    </div>

</div>
</div>


           
         </div>
    
        )
}

export default Recent
