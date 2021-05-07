import React, { useState, useEffect } from 'react'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import Header from '../CustomComponent/Header'
import '../css/AllAction.css'
import '../css/casesummary.css'
import { Link } from 'react-router-dom'
import closecase from '../images/closeCase.png'

const ActionSummaryData = (props) => {
    const [burgerMenu, setburgerMenu] = useState(false)
    const [preOpVisible, setpreOpVisible] = useState(true)
    const [intraOpVisible, setintraOpVisible] = useState(false)
    const [postOpVisible, setpostOpVisible] = useState(false)
    const [fileName,setfileName]=useState(null)
    const [preOp, setpreOp] = useState([
       
    ])
    const [postOp, setpostOp] = useState([
       
    ])
    const [intraOp, setintraOp] = useState([
       
    ])
    const [casesummary_id, setcasesummary_id] = useState(null)
    const [value,setValue] = useState();
    const [caseName,setcaseName]=useState(null)

    useEffect(() => {
        
        getActionSummaryDataAsPerId(localStorage.getItem('caseID'))

    }, [])

    const getActionSummaryDataAsPerId=(caseId)=>{
        var token= localStorage.getItem("token")
        fetch(`http://admin.anesthesiaone.com/api/case-summary-by-id/${caseId}?token=${token}`)
        .then(response => response.json())
        .then(res =>{
            if(res.status==="true"){
                setfileName(res.data.name)
              
              setpreOp(res.cs_preops)
              setpostOp(res.cs_postops)
              setintraOp(res.cs_intraops)
            }
        })
     }
  

  
    

    
    const burgerMenuClick = () => {
        props.history.push('/drawer')
    
    }
    const preOpClick = () => {
        setintraOpVisible(false)
        setpostOpVisible(false)

        setpreOpVisible(!preOpVisible)
    }

    const intraOpClick = () => {
        setpreOpVisible(false)
        setpostOpVisible(false)
        setintraOpVisible(!intraOpVisible)
    }

    const postOpClick = () => {
        setpreOpVisible(false)
        setintraOpVisible(false)
        setpostOpVisible(!postOpVisible)
    }

    const saveActionSummary = () => {
        if(preOpVisible==true){
            setpreOpVisible(false)
            setintraOpVisible(true)
            setpostOpVisible(false)
        }else if(intraOpVisible==true){
            setintraOpVisible(false)
            setpostOpVisible(true)
            setpreOpVisible(false)
        }else if(postOpVisible==true){
            setintraOpVisible(false)
            setpostOpVisible(false)
            setpreOpVisible(true)
        
        }
    }




    return (
        <div  >
            <BurgerMenuModal modalIsOpen={burgerMenu} />
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



                    <Link  className="tab-container-tabs active-tab" >
                        ACTION SUMMARY DATA
            </Link>

                    <Link className="tab-container-tabs" to="/result" >RESULT</Link>

                    


                </div>

                <div className="action-summary-container" >
                    <div className="action-summary" >
                        {preOpVisible?
                          <div onClick={() => preOpClick()}  className="preop-container active-sub-tabs" >
                          <div  >PREOP</div>
                         
                      </div>
                    :
                        <div onClick={() => preOpClick()}  className="preop-container" >
                            <div  >PREOP</div>
                           
                        </div>
                        }
                        {intraOpVisible?
                        <div onClick={() => intraOpClick()} className="preop-container active-sub-tabs" >
                        <div  >INTRAOP</div>
                       
                    </div>
                    
                        :
                        <div onClick={() => intraOpClick()} className="preop-container" >
                            <div  >INTRAOP</div>
                           
                        </div>
                        }
                        {postOpVisible?
                        <div onClick={() => postOpClick()} className="preop-container active-sub-tabs" >
                        <div >POSTOP</div>
                       
                    </div>
                    
                        :

                        <div onClick={() => postOpClick()} className="preop-container" >
                            <div >POSTOP</div>
                           
                        </div>
                        }

                    </div>

                    {preOpVisible === true ?
                        <div className="preop-container-subcontainer" >
                            {preOp.map((data) => {
                                return (
                                    <div className="action-summary-list-container" >
                                        <div>{data.id}.{data.name}</div>
                                     
                                    </div>

                                )
                            })
                            }
                              

                        </div> : <></>
                    }

                    {
                        intraOpVisible ?
                            <div className="preop-container-subcontainer" >
                                
                                


                                {intraOp.map((data) => {
                                    return (
                                        <div className="action-summary-list-container" >
                                            <div>{data.id}.{data.name}</div>
                                         
                                        </div>

                                    )
                                })
                                }
                                         
                            </div> : <></>
                    }
                    {
                        postOpVisible ?
                            <div className="preop-container-subcontainer" >
                                {postOp.map((data) => {
                                    return (
                                        <div className="action-summary-list-container" >
                                            <div>{data.id}.{data.name}</div>
                                        
                                        </div>
                                    )
                                })
                                }
                                          
                            </div> : <></>
                    }




                    <div className="next-button-container" >

                        <div onClick={()=>saveActionSummary()} className="next-button" >
                            NEXT
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default ActionSummaryData