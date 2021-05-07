import React,{useEffect,useState} from 'react'
import Header from '../CustomComponent/Header'
import '../css/RiskEvalution.css'
const RiskEvalution = (props) => {
    const [riskevalutionArray,setriskevalutionArray] = useState([
        {
            id: 1,
            name: 'APFEL Score'
        },
        {
            id: 2,
            name: 'STOP BANG'
        },
        {
            id: 3,
            name: 'RCRI'
        },
        {
            id: 4,
            name: 'OTHER'
        }
    ])
    const [value,setValue]=useState(null)
    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }

    useEffect(()=>{
        if(props.location.state!==undefined)  {
            addnewData()
        }
    
    },[riskevalutionArray])

   
    const refresh = ()=>{
        // it re-renders the component
       setValue({});
    }

    const addnewData=()=>{
        
        if(props.location.state.actionSummaryType==="riskevalution"){
            if(props.location.state.categorySelected==="Crises"){
            props.location.state.actionSummary.map((data)=>{
                let obj = {
                    id:'',
                   name: ''
                  }
                  obj.id=riskevalutionArray.length+1
                  obj.name=data.name
                 riskevalutionArray.push(obj)
            })
            refresh()
        }
        }
    }

    const navigateToRiskEvalutionType=(value)=>{
        if(value==="RCRI"){
            props.history.push('/rcri')
        }
    }


    return (
        <div>

            <Header onMenuClick={() => burgerMenuClick()} />
            <div className="risk-evalution-main-container" >
                <div className="risk-evalution-list-container" >
                    {
                        riskevalutionArray.map((data) => {
                            return (
                                <div style={{cursor:'pointer'}} onClick={()=> navigateToRiskEvalutionType(data.name)} >{data.name}</div>
                            )
                        })
                    }
                </div>
                <div className="risk-evalution-add-more-btn" onClick={() => props.history.push('/allactionforactionsummary?addinto=riskevalution')} >
                    Add
                </div>


            </div>

        </div>
    )
}

export default RiskEvalution