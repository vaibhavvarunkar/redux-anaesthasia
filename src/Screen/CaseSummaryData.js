import { data } from 'jquery'
import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import Header from '../CustomComponent/Header'
const CaseSummaryData=(props)=>{
    const [age,setage]=useState(null)
    const [gender,setgender]=useState(null)
    const [patientType,setpatientType]=useState(null)
    const [height,setheight]=useState(null)
    const [weight,setweight]=useState(null)
    const [fileName,setfileName]=useState(null)
    const [npo_status_time,setnpo_status_time]=useState(null)
    const [surgeryData,setsurgeryData]=useState([])
    const [surgeryTypesListData,setsurgeryTypesListData]=useState([])
    const [allergies,setallergies]=useState([])
    const [anesthesia_histories,setanesthesia_histories]=useState([])
    const [midical_histories,setmidical_histories]=useState([])
    const [midications,setmidications]=useState([])
    const [asa_ps,setasa_ps]=useState([])

    const burgerMenuClick = () => {
        props.history.push('/drawer')
    
    }

    
    useEffect(() => {
        if(props.location.state!==undefined){
        localStorage.setItem('caseID',props.location.state.caseSummaryId)
        getCaseSummaryDataAsPerId( props.location.state.caseSummaryId)
        }else{
            getCaseSummaryDataAsPerId(localStorage.getItem('caseID'))
        }
        
     }, [])

     const getCaseSummaryDataAsPerId=(caseId)=>{
        var token= localStorage.getItem("token")
        fetch(`http://admin.anesthesiaone.com/api/case-summary-by-id/${caseId}?token=${token}`)
        .then(response => response.json())
        .then(res =>{
            if(res.status==="true"){
                setage(res.data.age)
                setgender(res.data.gender)
                setpatientType(res.data.patient_types_id)
                setheight(res.data.height)
                setweight(res.data.weight)
                setfileName(res.data.name)
                setnpo_status_time(res.data.npo_status_time)
                setsurgeryData(res.surgeryTypes)
                setsurgeryTypesListData(res.surgeryTypesListData)
                setallergies(res.allergies)
                setanesthesia_histories(res.anesthesia_histories)
                setmidical_histories(res.midical_histories)
                setmidications(res.midications)
                setasa_ps(res.asa_ps)

            }
        })
     }
  

    return(
        <div>
            <Header onMenuClick={() => burgerMenuClick()} />
            <div className="casename-container" >
                    casename:{fileName===null?"-":fileName}
                </div>
                
           
            <div className="all-action-container" >
                <div className="tab-container" >
                <Link to="/casesummarydata" className="tab-container-tabs active-tab" >
                        CASE SUMMARY DATA
            </Link>



                    <Link  className="tab-container-tabs " to="/actionummarydata" >
                        ACTION SUMMARY DATA
            </Link>

                    <Link className="tab-container-tabs" to="/result" >RESULT</Link>

                    


                </div>

                <div className="result-container" >
                            <div className="answer-container" >
                                <div>
                                    1.AGE?
                        </div>
                                <div>
                                    {age}
                                </div>
                            </div>
                            <div className="answer-container" >
                                <div>
                                    2.GENDER??
                        </div>
                                <div>
                                    {gender}
                                </div>
                            </div>
                            <div className="answer-container" >
                                <div>
                                    3.PATIENT TYPE?
                        </div>
                                <div>
                                    {patientType}
                                </div>
                            </div>
                            <div className="answer-container" >
                                <div>
                                    4.HEIGHT?
                        </div>
                                <div>
                                    {height}
                                </div>
                            </div>
                            <div className="answer-container" >
                                <div>
                                    5. WEIGHT?
                        </div>
                                <div>
                                    {weight}
                                </div>
                            </div>
                            <div className="answer-container" >
                                <div>
                                    5. ASA-PS?
                        </div>
                                <div>
                                    {
                                       asa_ps.map((data)=>{
                                           return(
                                               <div>{data.name}</div>
                                           )
                                       }) 
                                    }
                                    {/*asaps.map((data) => {
                                        return (
                                            <div>
                                                {data.label},
                                            </div>
                                        )
                                    })*/}
                                </div>
                            </div>
                            <div className="answer-container" >
                                <div>
                                    6. SURGERY TYPE?
                        </div>
                                <div  >
                                    {
                                        surgeryData.map((data)=>{
                                            return(
                                                <div>{data.name}</div>
                                            )
                                        })
                                    }
                                    {/*
                                        surgerySubType.length == 0 ?
                                            surgeryType.map((data) => {
                                                return (
                                                    <div>
                                                        {data.label}
                                                    </div>
                                                )
                                            }) : <></>
                                        */}
                                        
                                    {/* surgerySubType.map((data) => {
                                        return (
                                            <div>
                                                {data.label}
                                            </div>
                                        )

                                      })
                                    */}
                                </div>
                            </div>
                            <div className="answer-container" >
                                <div>
                                    7. ANESTHESIA TYPE?
                        </div>
                                <div>
                                    -
                                    {/*
                                        anesthesiaSubType.length == 0 ?
                                            anesthesia_type.map((data) => {
                                                return (
                                                    <div>
                                                        {data.label}
                                                    </div>
                                                )
                                            }) : <></>
                                        */}

                                    {/*
                                    anesthesiaSubType.map((data) => {
                                        return (
                                            <div>
                                                {data.label}
                                            </div>
                                        )
                                    })
                                */}
                                </div>
                            </div>
                            <div className="answer-container" >
                                <div>
                                    9. NPO STATUS?
                        </div>
                                <div>
                                    {npo_status_time}{/* timeOfLastFoodOrDrink*/ }
                                </div>
                            </div>

                            <div className="answer-container" >
                                <div>
                                    10. MEDICATIONS?
                        </div>
                                <div>
                                    
                                    {
                                        midications.map((data)=>{
                                            return(
                                                <div>{data.drug_name}</div>
                                            )
                                        })
                                    }
                                    {/*
                                    medication.map((data) => {
                                        return (
                                            <div>{data.label}</div>
                                        )
                                    })
                                */}
                                </div>
                            </div>

                            <div className="answer-container" >
                                <div>
                                    11.  ALLERGIES?
                        </div>
                                <div>
                                    
                                    {
                                        allergies.map((data)=>{
                                            return(
                                                <div>{data.drug_name}</div>
                                            )
                                        })
                                    }
                                    {/*
                                    allegries.map((data) => {
                                        return (
                                            <div>{data.label}</div>
                                        )
                                    })
                                */}
                                </div>
                            </div>


                            <div className="answer-container" >
                                <div>
                                    12. MEDICAL HISTORY?
                        </div>
                                <div>
                                    
                                    {
                                        midical_histories.map((data)=>{
                                            return(
                                                <div>{data.name}</div>
                                            )
                                        })
                                    }
                                    {/*
                                        medicalHistoryArray.map((data) => {
                                            return (
                                                <div>
                                                    {data},
                                                </div>
                                            )
                                        })
                                    */}
                                </div>
                            </div>


                            <div className="answer-container" >
                                <div>
                                    13. SURGICAL HISTORY?	?
                        </div>
                                <div>
                                    
                                    {/*
                                        surgerySubHistory.length == 0 ?
                                            surgeryHistory.map((data) => {
                                                return (
                                                    <div>
                                                        {data.label}
                                                    </div>
                                                )
                                            }) : <></>
                                        */}
                                    {/*
                                    surgerySubHistory.map((data) => {
                                        return (
                                            <div>
                                                {data.label}
                                            </div>
                                        )
                                    })
                                */}
                                </div>
                            </div>

                            <div className="answer-container" >
                                <div>
                                    14.  ANESTHESIA HISTORY?
                        </div>
                                <div>
                                    
                                    {
                                        anesthesia_histories.map((data)=>{
                                            return(
                                                <div>{data.name}</div>
                                            )
                                        })
                                    }
                                    {/*
                                    anesethesiaSubHistory.map((data) => {
                                        return (
                                            <div>
                                                {data.label}
                                            </div>
                                        )
                                    })
                                */}
                                </div>
                            </div>
                            </div>



                </div>
            
   
        </div>
    )
}

export default CaseSummaryData