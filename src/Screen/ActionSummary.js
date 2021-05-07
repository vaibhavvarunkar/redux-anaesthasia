import React, { useState, useEffect } from 'react'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import Header from '../CustomComponent/Header'
import '../css/AllAction.css'
import '../css/casesummary.css'
import { Link } from 'react-router-dom'
import closecase from '../images/closeCase.png'

const ActionSummary = (props) => {
    const [burgerMenu, setburgerMenu] = useState(false)
    const [preOpVisible, setpreOpVisible] = useState(true)
    const [intraOpVisible, setintraOpVisible] = useState(false)
    const [postOpVisible, setpostOpVisible] = useState(false)
    const [preOp, setpreOp] = useState([
        {
            id:1,
            name:"Case Summary"
        },
        {
            id:2,
            name:"PREOPERATIVE TESTING"
        },
        {
            id:3,
            name:"RISK EVALUATION"
        },
        {
            id:4,
            name:"PHYSICAL EXAM"
        },
        {
            id:5,
            name:"PREMEDICATION"
        },
        {
            id:6,
            name:"OTHER/NOT LISTED"
        }
    ])
    const [postOp, setpostOp] = useState([
        {
            id:1,
            name:"ANALGESIA"
        },
        {
            id:2,
            name:"ANTIMETIC"
        },
        {
            id:3,
            name:"AIRWAY"
        },
        {
            id:4,
            name:"BLOOD PRESSURE"
        },
        {
            id:5,
            name:"CRISES"
        },
        {
            id:6,
            name:"OTHER/NOT LISTED"
        },
       
    ])
    const [intraOp, setintraOp] = useState([
        {
            id:1,
            name:"ANESTHESIA TYPE"
        },
        {
            id:2,
            name:"AIRWAY"
        },
        {
            id:3,
            name:"ACCESS"
        },
        {
            id:4,
            name:"MONITORING"
        },
        {
            id:5,
            name:"SPECIALIZED MONITORING"
        },
        {
            id:6,
            name:"POSITIONING"
        },
        {
            id:7,
            name:"INDUCTION"
        },
        {
            id:8,
            name:"MAINTEANCE"
        },
        {
            id:9,
            name:"EMERGENCE"
        },
        {
            id:10,
            name:"CRISES"
        },
        {
            id:11,
            name:"OTHER/NOT LISTED"
        }
    ])
    const [casesummary_id, setcasesummary_id] = useState(null)
    const [value,setValue] = useState();
    const [caseName,setcaseName]=useState(null)

  const refresh = ()=>{
      // it re-renders the component
     setValue({});
  }
    useEffect(() => {
        var urlParams = new URLSearchParams(window.location.search)
        setcasesummary_id(urlParams.get('caseSummaryId'))
        setcaseName(urlParams.get('caseName'))
        getActionSummaryData()
    if(props.location.state!==undefined)  {
    
        addnewData()
        }


       // getData()
    }, [])

  
    const addnewData=()=>{
        if(props.location.state.actionSummaryType==="preop"){
            props.location.state.actionSummary.map((data)=>{
                let obj = {
                    id:'',
                   name: ''
                  }
                  obj.id=preOp.length+1
                  obj.name=data.name
                  preOp.push(obj)
            })
            setpreOpVisible(true)
            setintraOpVisible(false)
            setpostOpVisible(false)
            refresh()
        }else if(props.location.state.actionSummaryType==="postop"){
               props.location.state.actionSummary.map((data)=>{
                   let obj = {
                       id:'',
                      name: ''
                     }
                     obj.id=postOp.length+1
                     obj.name=data.name
                     postOp.push(obj)
               })
               setpreOpVisible(false)
               setintraOpVisible(false)
               setpostOpVisible(true)
             
               refresh()
            }else if(props.location.state.actionSummaryType==="intraop"){
               props.location.state.actionSummary.map((data)=>{
                   let obj = {
                       id:'',
                      name: ''
                     }
                     obj.id=intraOp.length+1
                     obj.name=data.name
                     intraOp.push(obj)
               })
               setpreOpVisible(false)
               setintraOpVisible(true)
               setpostOpVisible(false)
             
               refresh()
            }
           
    }
    
    const getActionSummaryData = () => {
        var token = localStorage.getItem('token')

        fetch(`http://admin.anesthesiaone.com/api/action-summary-ops?token=${token}&case_summaries_id=${casesummary_id}`, {
            method: 'GET',

        })
            .then(response => response.json())
            .then(res => {
                if (res.status === "true"&&res.data.preops.length!==0) {
                    console.log(res)
                    setpreOp(res.data.preops)
                    setintraOp(res.data.intraops)
                    setpostOp(res.data.postops)
                }
            })
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
        var postOpForRequest=[]
        postOp.map((data)=>{
            var obj=""

            obj=data.name
            postOpForRequest.push(obj)
        })

        var preOpForRequest=[]
        preOp.map((data)=>{
            var obj=""

            obj=data.name
            preOpForRequest.push(obj)
        })

        var intraOpForRequest=[]
        intraOp.map((data)=>{
            var obj=""

            obj=data.name
            intraOpForRequest.push(obj)
        })



        console.log(postOpForRequest,preOpForRequest,intraOpForRequest)

        var token = localStorage.getItem("token")

        fetch(`http://admin.anesthesiaone.com/api/save-user-action-summary-ops?token=${token}`, {
            method: 'POST',
            body: JSON.stringify({
                "case_summaries_id": casesummary_id,
                "preops":preOpForRequest,
                "intraops":intraOpForRequest,
                "postops": postOpForRequest

            })

        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                alert(res.message)
            })
        }
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

    const navigation=(name)=>{
        if(name==="PREOPERATIVE TESTING"){
            props.history.push('/preoperativeevaluation')
        }
        if(name==="RISK EVALUATION"){
            props.history.push('/riskevalution')
        }
        if(name==="PHYSICAL EXAM"){
            props.history.push('/physicalexam')
        }
    }



    return (
        <div  >
            <BurgerMenuModal modalIsOpen={burgerMenu} />
            <Header onMenuClick={() => burgerMenuClick()} />
            <div className="casename-container" >
                    casename:{caseName===null?"-":caseName}
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
                   {/* <Link to="/afterLogin" className="close-case-container" >
                        <img src={closecase} className="close-case-image" />

                    </Link>
                    */}



                    <Link to="/casesummary" className="tab-container-tabs" >
                        CASE SUMMARY
        </Link>

                    <Link className="tab-container-tabs active-tab" to="/actionsummary" >ACTION SUMMARY</Link>


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
                                        <div onClick={()=> navigation(data.name)} >{data.id}.{data.name}</div>
                                        <div><input style={{ marginLeft: 40 }} defaultChecked={true} type="checkbox" /></div>

                                    </div>

                                )
                            })
                            }
                               <div className="add-more-button" onClick={() => props.history.push('/allactionforactionsummary?addinto=preop') } >
                                                Add
                        </div>

                        </div> : <></>
                    }

                    {
                        intraOpVisible ?
                            <div className="preop-container-subcontainer" >
                                
                                


                                {intraOp.map((data) => {
                                    return (
                                        <div className="action-summary-list-container" >
                                            <div>{data.id}.{data.name}</div>
                                            <div><input defaultChecked={true} style={{ marginLeft: 40 }} type="checkbox" /></div>

                                        </div>

                                    )
                                })
                                }
                                            <div className="add-more-button" onClick={() => props.history.push('/allactionforactionsummary?addinto=intraop')} >
                                                Add
                        </div>
                            </div> : <></>
                    }
                    {
                        postOpVisible ?
                            <div className="preop-container-subcontainer" >
                                {postOp.map((data) => {
                                    return (
                                        <div className="action-summary-list-container" >
                                            <div>{data.id}.{data.name}</div>
                                            <div><input defaultChecked={true} style={{ marginLeft: 40 }} type="checkbox" /></div>

                                        </div>
                                    )
                                })
                                }
                                            <div className="add-more-button" onClick={() => props.history.push('/allactionforactionsummary?addinto=postop')} >
                                                Add
                        </div>
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

export default ActionSummary