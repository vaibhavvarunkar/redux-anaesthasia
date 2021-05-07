import React,{useState,useEffect} from 'react'
import Header from '../CustomComponent/Header'
import Tab from '../CustomComponent/Tab'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import '../css/ResulforActionLibrary.css'
import {Link} from 'react-router-dom'
import Select from 'react-select'
import {API_ROOT} from '../constants'

const optionsforage = [
    { value: 'Y', label: 'Year' },
    { value: 'M', label: 'Month' },
    {value:'W',label:'Week'},
    { value: 'D', label: 'Day' },
]

const optionsForWeight=[
    { value: 'KG', label: 'Kilogram' },
    { value: 'G', label: 'Gram' },
    
]


const ResultOfAction=(props)=>{
    const [burgerMenu,setburgerMenu]=useState(false)
    const [header,setHeader]=useState(null)
    const [age,setAge]=useState(null)
    const [weight,setWeight]=useState(null)
    const [height,setHeight]=useState(null)
    const [patientType,setPatientType]=useState(null)
    const [id,setId]=useState(null)
    const [drugId,setDrugId]=useState(null)
    const [parentName,setparentName]=useState(null)
    const [patientTypeArray,setpatientTypeArray]=useState([])
    const [ageType,setageType]=useState(null)
    const [weightType,setweightType]=useState(null)
    const [result,setResult]=useState([])
    const burgerMenuClick=()=>{
        props.history.push('/drawer')
    
    }


    useEffect(() => {
        var urlParams = new URLSearchParams(window.location.search)
        setHeader(urlParams.get('name'))
        setId(urlParams.get('id'))
        setDrugId(urlParams.get('drugId'))
        setparentName(urlParams.get('subName'))
        getPatientTypeData()
    }, [])

    const getPatientTypeData=()=>{
        var token= localStorage.getItem("token")
   
        fetch(API_ROOT+`case-summary-form-data?device_type=Android&device_token=123` ,{
            method: 'GET',
            headers: {
                'Accept':'application/json',
                'Authorization': 'Bearer ' + token
            }
         
        })
            .then(response => response.json())
            .then(res =>{
                if(res.status==="true"){
                res.data.patientTypes.forEach(element => {
                    element.value=element.id;
                    element.label=element.type_name;
                });

                setpatientTypeArray(res.data.patientTypes)
            }
            })
    }

    const handleChangePatientType = selectedOption => {
        setPatientType( selectedOption.value );
        console.log(`Option selected:`, selectedOption.id);
    };



    const getResultfromApi=()=>{
        var token= localStorage.getItem("token")
        
        console.log(parentName)
        if(parentName==="Crises"){
            fetch(`http://admin.anesthesiaone.com/api/action-library-search?token=${token}` ,{
                method: 'POST',
                
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
        
                    "crises_id": id,
                    "patient_age_days": 18,
                    "patient_type_id": patientType,
                    "patient_weight":weight
    
                   
                })
             
            })
                .then(response => response.json())
                .then(res =>{
                    console.log(res)
                    if(res.status==="true"){
                        console.log(res.data)
                    }
                })
            
        }else if(parentName==="Case Tips"){
            fetch(`http://admin.anesthesiaone.com/api/action-library-search?token=${token}` ,{
                method: 'POST',
                
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
        
                    "caseTips_id": id,
                    "patient_age_days": 18,
                    "patient_type_id": patientType,
                    "patient_weight":weight
    
                   
                })
             
            })
                .then(response => response.json())
                .then(res =>{
                    console.log(res)
                    if(res.status==="true"){
                        console.log(res.data)
                    }
                })
          

        }else if(parentName==="Airway & Equipments"){
            fetch(`http://admin.anesthesiaone.com/api/action-library-search?token=${token}` ,{
                method: 'POST',
                
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
        
                    "airwayAndEquipments_id": id,
                    "patient_age_days": 18,
                    "patient_type_id": patientType,
                    "patient_weight":weight
    
                   
                })
             
            })
                .then(response => response.json())
                .then(res =>{
                    console.log(res)
                    if(res.status==="true"){
                        console.log(res.data)
                    }
                })
          

        }else if(parentName==="Drugs"){
            fetch(`http://admin.anesthesiaone.com/api/action-library-search?token=${token}` ,{
            method: 'POST',
            
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
	
                "drug_id": id,
                "patient_age_days": 18,
                "patient_type_id": patientType,
                "patient_weight":weight

               
            })
         
        })
            .then(response => response.json())
            .then(res =>{
                console.log(res)
                if(res.status==="true"){
                    console.log(res.data)
                }
            })
        

        }else if(parentName==="Preoperative Evaluations"){
            fetch(`http://admin.anesthesiaone.com/api/action-library-search?token=${token}` ,{
                method: 'POST',
                
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
        
                    "preoperativeEvaluations_id": id,
                    "patient_age_days": 18,
                    "patient_type_id": patientType,
                    "patient_weight":weight
    
                   
                })
             
            })
                .then(response => response.json())
                .then(res =>{
                    console.log(res)
                    if(res.status==="true"){
                        console.log(res.data)
                    }
                })
          
        }else if(parentName==="Regional Anesthesia"){
            fetch(`http://admin.anesthesiaone.com/api/action-library-search?token=${token}` ,{
                method: 'POST',
                
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
        
                    "regionalAndNAnesthesia_id": id,
                    "patient_age_days": 18,
                    "patient_type_id": patientType,
                    "patient_weight":weight
    
                   
                })
             
            })
                .then(response => response.json())
                .then(res =>{
                    console.log(res)
                    if(res.status==="true"){
                        console.log(res.data)
                    }
                })
          
        }
    }
    
    const handleChangeAgeTpe = selectedOption => {
        if(selectedOption.value==="Y"){
            setAge(age*365)
        }else if(selectedOption.value==="M"){
            setAge(age*30)
        }else if(selectedOption.value==="W"){
            setAge(age*7)
        }else if(selectedOption.value==="D"){
            setAge(age)
        }
        setageType( selectedOption.value );
        
        console.log(`Option selected:`, selectedOption);

    };

    const handleChangeWeightType = selectedOption => {
        setweightType( selectedOption.value );
        console.log(`Option selected:`, selectedOption);
    };


    return(
        <div >
                    <BurgerMenuModal modalIsOpen={burgerMenu} />
            <Header  onMenuClick={()=> burgerMenuClick()}   />
           <div className="result-main-container" >
                <div className="header-of-list-container" >
                <i className="material-icons dropdown-icon" >play_arrow</i>
                     <div>{header}</div>     
                </div>
            
                <div className="dosing-container" >
               <div className="result-input-container" >
                    <div>Input</div>
                    <div>
                        Clear All
                    </div>
               </div>
               <div className="result-input-container" >
                    <div>Age</div>
                    <div>    <input value={age} onChange={(e)=>setAge(e.target.value)} placeholder="ANSWER" className="result-age-input" />
                  </div>
                <div>
                <Select onChange={(value)=> handleChangeAgeTpe(value)} placeholder="Year" className="result-age-type-dropdown" id="age" options={optionsforage} />
             
                </div>
               </div>
               <div className="result-input-container" >
                    <div>Weight</div>
                    <div>
                    <input value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder="ANSWER" className="result-age-input" />
                    </div>
                    <div>
                    <Select onChange={(value)=> handleChangeWeightType(value)} placeholder="Weight Type" className="result-weight-type-dropdown" id="age" options={optionsForWeight} />
             
                    </div>
               </div>

               
               <div className="result-input-container" >
                    <div>Patient type</div>
                    <div>
                    <div className="patientype-input-container" >
                    <Select onChange={(value)=> handleChangePatientType(value)} placeholder="PATIENT TYPE" className="patientype-dropdown" id="patien-type" options={patientTypeArray} />
             
                </div>
                
                    </div>
               </div>

               <div onClick={()=>getResultfromApi()}  className="submit-button">Submit</div>




           </div>
           <div className="input-border" >

           </div>
           <div className="result-container" >
            <p>
                {}
            </p>
           </div>
        
        
           

           </div>
        </div>
    )
}

export default ResultOfAction