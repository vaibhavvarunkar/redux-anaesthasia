import React,{useState,useEffect} from 'react'
import Header from '../CustomComponent/Header'
import Tab from '../CustomComponent/Tab'
import '../css/index.css'
import '../css/Favourite.css'
import {Link} from 'react-router-dom'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'

const Favorites = (props) => {
    const [burgerMenu,setburgerMenu]=useState(false)
    const [favouriteData,setfavouriteData]=useState([])
    const [airway_and_equipments,setairway_and_equipments]=useState([])
    const [case_tips,setcase_tips]=useState([])
    const [crises,setcrises]=useState([])
    const [drugs,setdrugs]=useState([])
    const [preoperative_evaluations,setpreoperative_evaluations]=useState([])
    const [regional_and_n_anesthesias,setregional_and_n_anesthesias]=useState([])
    const [value,setValue] = useState();
    const burgerMenuClick=()=>{
        props.history.push('/drawer')
    }

    useEffect(() => {
        getFavourite()
        
    }, [])

    useEffect(()=>{
        if(props.location.state!==undefined)  {
            addnewData()
        }
    
    },[airway_and_equipments,case_tips,crises,drugs,preoperative_evaluations,regional_and_n_anesthesias])

   
    const refresh = ()=>{
        // it re-renders the component
       setValue({});
    }

    const saveFavouriteList=()=>{
        let airwayandequipmentsForRequest = []
        airway_and_equipments.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            airwayandequipmentsForRequest.push(obj)
        })

        let casetipsForRequest=[]
        case_tips.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            casetipsForRequest.push(obj)
        })

        let crisesForRequest=[]
        crises.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            crisesForRequest.push(obj)
        })

        let drugsForRequest=[]
        drugs.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            drugsForRequest.push(obj)
        })

        let preoperative_evaluationForRequest=[]
        preoperative_evaluations.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            preoperative_evaluationForRequest.push(obj)
        })

        let regional_and_neuraxial_anesthesiaForRequest=[]
        regional_and_n_anesthesias.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            regional_and_neuraxial_anesthesiaForRequest.push(obj)
        })
        var token = localStorage.getItem("token")
        
        if(props.location.state.categorySelected==="Crises"){
        fetch(`http://admin.anesthesiaone.com/api/save-user-favourites?token=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                crises:crisesForRequest
            })
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                     if (res.status === "true") {
                    alert(res.message)
                }
            })
        }else if(props.location.state.categorySelected==="Case Tips"){
            fetch(`http://admin.anesthesiaone.com/api/save-user-favourites?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    case_tips:casetipsForRequest
                })
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                         if (res.status === "true") {
                        alert(res.message)
                    }
                })
           
        }else if(props.location.state.categorySelected==="Airway & Equipments"){
            fetch(`http://admin.anesthesiaone.com/api/save-user-favourites?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    airway_and_equipments:airwayandequipmentsForRequest
                })
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                         if (res.status === "true") {
                        alert(res.message)
                    }
                })
           
        }else if(props.location.state.categorySelected==="Drugs"){
            fetch(`http://admin.anesthesiaone.com/api/save-user-favourites?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    drugs:drugsForRequest
                })
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                         if (res.status === "true") {
                        alert(res.message)
                    }
                })
          
        }else if(props.location.state.categorySelected==="Preoperative Evaluation"){
            fetch(`http://admin.anesthesiaone.com/api/save-user-favourites?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    preoperative_evaluation:preoperative_evaluationForRequest
                })
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                         if (res.status === "true") {
                        alert(res.message)
                    }
                })
          
        }else if(props.location.state.categorySelected==="Regional Anesthesia"){
            fetch(`http://admin.anesthesiaone.com/api/save-user-favourites?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    regional_and_neuraxial_anesthesia:regional_and_neuraxial_anesthesiaForRequest
                })
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                         if (res.status === "true") {
                        alert(res.message)
                    }
                })
          
        }
    




    }


    
    const addnewData=()=>{
        
        if(props.location.state.actionSummaryType==="favourite"){
            if(props.location.state.categorySelected==="Crises"){
            props.location.state.actionSummary.map((data)=>{
                let obj = {
                    id:'',
                   name: ''
                  }
                  obj.id=crises.length+1
                  obj.name=data.name
                  crises.push(obj)
            })
        }else if(props.location.state.categorySelected==="Case Tips"){
            props.location.state.actionSummary.map((data)=>{
                let obj = {
                    id:'',
                   name: ''
                  }
                  obj.id=case_tips.length+1
                  obj.name=data.name
                  case_tips.push(obj)
            })
        }else if(props.location.state.categorySelected==="Airway & Equipments"){
            props.location.state.actionSummary.map((data)=>{
                let obj = {
                    id:'',
                   name: ''
                  }
                  obj.id=airway_and_equipments.length+1
                  obj.name=data.name
                  airway_and_equipments.push(obj)
            })
           
        }else if(props.location.state.categorySelected==="Drugs"){

            props.location.state.actionSummary.map((data)=>{
                let obj = {
                    id:'',
                   drug_name: ''
                  }
                  obj.id=drugs.length+1
                  obj.drug_name=data.name
                  drugs.push(obj)
            })
         
        }
        else if(props.location.state.categorySelected==="Preoperative Evaluation"){
            props.location.state.actionSummary.map((data)=>{
                let obj = {
                    id:'',
                   name: ''
                  }
                  obj.id=preoperative_evaluations.length+1
                  obj.name=data.name
                  preoperative_evaluations.push(obj)
            })
         
        }
        else if(props.location.state.categorySelected==="Regional Anesthesia"){
            props.location.state.actionSummary.map((data)=>{
                let obj = {
                    id:'',
                   name: ''
                  }
                  obj.id=regional_and_n_anesthesias.length+1
                  obj.name=data.name
                  regional_and_n_anesthesias.push(obj)
            })
          
          
        }
          
    }
    }

    const getFavourite=()=>{
        var token = localStorage.getItem('token')
        fetch(`http://admin.anesthesiaone.com/api/get-user-favourites?token=${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(res => {
                 if(res.status==="true"&&res.message==="User favourites data"){
                setairway_and_equipments( res.airway_and_equipments)
                setcase_tips(res.case_tips)
                setcrises(res.crises)
                setdrugs(res.drugs)
                setpreoperative_evaluations(res.preoperative_evaluations)
                setregional_and_n_anesthesias(res.regional_and_n_anesthesias)
               
                 }else{
                     alert(res.message)
                 }
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
         
            <Link to="/favourite" className="tab-container-tabs active-tab" >
                FAVOURITE
                </Link>
            <Link className="tab-container-tabs" to="/recent" >CASES</Link>
            
             
            
            
            
            <Link to="/allaction" className="tab-container-tabs" >ACTION LIBRARY</Link>
            
        </div>
    
            </div>
            <div className="favourite-container" >
             {  airway_and_equipments.length==0&&case_tips.length==0&&crises.length==0&&drugs.length==0&&preoperative_evaluations.length==0&&regional_and_n_anesthesias.length==0?
             <div> 
            You Do Not Have Any Favorites Yet
            </div>:
            <></>
             }
             <div>Airway and equipments </div>

            {
                airway_and_equipments.map((data)=>{
                    
                    return(
                        <div className="favourite-list-container" >
                        <div>{data.id}.{data.name}</div>
                        <div><input defaultChecked={true} style={{ marginLeft: 40 }} type="checkbox" /></div>

                        </div>
                 
                        )
                })
            }
             <div>case tips </div>

            {
                case_tips.map((data)=>{
                    
                    return(
                        <div className="favourite-list-container" >
                        <div>{data.id}.{data.name}</div>
                        <div><input defaultChecked={true} style={{ marginLeft: 40 }} type="checkbox" /></div>

                        </div>
                 
                        )
                })
            }
            <div>crises </div>

            {
                crises.map((data)=>{
                    
                    return(
                        <div className="favourite-list-container" >
                        <div>{data.id}.{data.name}</div>
                        <div><input defaultChecked={true} style={{ marginLeft: 40 }} type="checkbox" /></div>

                        </div>
                 
                        )
                })
            }
              <div>drugs </div>

            {
                drugs.map((data)=>{
                    
                    return(
                        <div className="favourite-list-container" >
                        <div>{data.id}.{data.drug_name}</div>
                        <div><input defaultChecked={true} style={{ marginLeft: 40 }} type="checkbox" /></div>

                        </div>
                 
                        )
                })
            }
               <div>preoperative_evaluations </div>

            {
                preoperative_evaluations.map((data)=>{
                    
                    return(
                        <div className="favourite-list-container" >
                        <div>{data.id}.{data.name}</div>
                        <div><input defaultChecked={true} style={{ marginLeft: 40 }} type="checkbox" /></div>

                        </div>
                 
                        )
                })
            }
             <div>regional_and_n_anesthesias </div>

            {
                regional_and_n_anesthesias.map((data)=>{
                    
                    return(
                        <div className="favourite-list-container" >
                        <div>{data.id}.{data.name}</div>
                        <div><input defaultChecked={true} style={{ marginLeft: 40 }} type="checkbox" /></div>

                        </div>
                 
                        )
                })
            }
            <div className="favourite-add-more-btn" onClick={() => props.history.push('/allactionforactionsummary?addinto=favourite') } >
                                                Add
            </div>
         
            <div onClick={()=>saveFavouriteList()} className="save-button-container" >Save</div>
          
            </div>
           </div>
    
        )
}

export default Favorites
