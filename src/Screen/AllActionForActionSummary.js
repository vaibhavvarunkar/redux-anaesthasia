import React,{useState,useEffect} from 'react'
import Header from '../CustomComponent/Header'
import Tab from '../CustomComponent/Tab'
import '../css/AllActionForActionSummary.css'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import AllAction from './AllAction'
import ActionSummary from './ActionSummary'
import {Link} from 'react-router-dom'
const AllActionForActionSummary = (props) => {
    const [isSub,setSub]=useState(false)
    const [actionLibraryData,setactionLibraryData]=useState([])
    const [burgerMenu,setburgerMenu]=useState(false)
    const [subCategory,setsubCategory]=useState([])
    const [subsubCategory,setsubsubCategory]=useState([])
    const [subsub,setsubsub]=useState(false)
    const [subId,setsubId]=useState(null)
    const [subName,setsubName]=useState(null)
    const [actionSummaryData,setactionSummaryData]=useState([])
    const [actionSummaryType,setactionSummaryType]=useState(null)
    const [value,setValue] = useState();
    const [isChecked,setisChecked]=useState(false)

  const refresh = ()=>{
      // it re-renders the component
     setValue({});
  }
    useEffect(() => {
        getActionLibrary()
        var urlParams = new URLSearchParams(window.location.search)
        setactionSummaryType(urlParams.get('addinto'))
     }, [])
  

    
    const getActionLibrary=()=>{
        var token= localStorage.getItem("token")
        fetch(`http://admin.anesthesiaone.com/api/action-library-data?token=${token}`,{
            method: 'GET',
            
            headers: { 
                'Content-Type': 'application/json'
            }}).then(response => response.json())
            .then(res =>{
                if(res.status==="true"){
                const obj=[{
                    name:"Crises",
                    data:res.data.crises


                },
                {
                    name:"Case Tips",
                    data:res.data.caseTips
                },{
                    name:"Airway & Equipments",
                    data:res.data.airwayAndEquipments
                },{
                   name:"Drugs",
                   data:res.data.drugs 
                },{
                    name:"Preoperative Evaluation",
                    data:res.data.preoperativeEvaluations
                },{
                    name:"Regional Anesthesia",
                    data:res.data.regionalAndNAnesthesia
                }]
                console.log(obj)
                
                setactionLibraryData(obj)
            }
            })
    }

    
    
    
       const burgerMenuClick=()=>{
        props.history.push('/drawer')
      
    }

       const onClickCategory=(name)=>{
           setsubId(null)
           setsubName(name)
            for(var i=0;i<actionLibraryData.length;i++){
                if(actionLibraryData[i].name===name){
                    setsubCategory(actionLibraryData[i].data)
                    setSub(true)
          
                }
            }
       }

        const onClickSubCategory=(id,name)=>{
            setsubId(id)
            for(var i=0;i<subCategory.length;i++){
                if(subCategory[i].id===id&&name==="Crises"){
                    setsubsub(true)
                   setsubsubCategory(subCategory[i].crises_sub_type)
                }else if(subCategory[i].id===id&&name==="Case Tips") {
                    setsubsub(true)
                  
                    setsubsubCategory(subCategory[i].case_tip_sub_type)
                }else if(subCategory[i].id===id&&name==="Airway & Equipments"){
                    setsubsub(true)
                    setsubsubCategory(subCategory[i].sub_type)
                }else if(subCategory[i].id===id&&name==="Drugs"){
                    setsubsub(true)
                    setsubsubCategory(subCategory[i].sub_type)
                    
                }else if(subCategory[i].id===id&&name==="Preoperative Evaluation"){
                    setsubsub(true)
                    setsubsubCategory(subCategory[i].sub_type)
                    
                }else if(subCategory[i].id===id&&name==="Regional Anesthesia"){
                    setsubsub(true)
                    setsubsubCategory(subCategory[i].sub_type)
                    
                }
            }
        }

        const lastListClicked=(id,drug_type_id,name)=>{
         //   window.location=`/resultOfAction?id=${id}&name=${name}&drugId=${drug_type_id}&subName=${subName}`
         /*   console.log(id,drug_type_id)
            */
           
        }

        const sendDataToActionSummary=()=>{
            let surgery_histories_data=[]  
            actionSummaryData.map((data)=>{
              let obj = {
                  name: ''
                 }
            
                  obj.name=data
                  surgery_histories_data.push(obj)
              })
              if(actionSummaryType!=="favourite"){
                if(actionSummaryType!=="riskevalution"){
            props.history.push({
                pathname: '/actionsummary',
                state:{actionSummaryType:actionSummaryType,actionSummary:surgery_histories_data}
            } )
        }else{
            props.history.push({
                pathname: '/riskevalution',
                state:{actionSummaryType:actionSummaryType,actionSummary:surgery_histories_data,categorySelected:subName}
            } )
        
        }
        }else {
            props.history.push({
                pathname: '/favourite',
                state:{actionSummaryType:actionSummaryType,actionSummary:surgery_histories_data,categorySelected:subName}
            } )
        }

          
        }

        

        const addintoActionSummary=(value)=>{
                 actionSummaryData.push(value)
                refresh()
            
         }

        
    return (
                <div  >
                    <BurgerMenuModal modalIsOpen={burgerMenu} />
            <Header  onMenuClick={()=> burgerMenuClick()}   />
            <div className="all-action-container" >
            <div className="tab-container" >
                   



                    <Link to="/casesummary" className="tab-container-tabs" >
                        CASE SUMMARY
            </Link>

                    <Link className="tab-container-tabs active-tab" to="/actionsummary" >ACTION SUMMARY</Link>


                </div>
                <div className="action-library" >
                    Action Library
                </div>
            
            <div className="all-action-subcontainer" >
                   {
                       actionLibraryData.map((data)=>{
                           return(
                           <div  >
                               {subName === data.name ?

<div className="all-action-subcontainer-content" >
    <i className="material-icons down-icon" >play_arrow</i>

    <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => onClickCategory(data.name)} >{data.name}</div>

</div>


:
<div className="all-action-subcontainer-content" >
    <i className="material-icons dropdown-icon" >play_arrow</i>

    <div style={{ cursor: "pointer" }} onClick={() => onClickCategory(data.name)} >{data.name}</div>

</div>

}

                               {    isSub&&subName===data.name?
                                   subCategory.map((data1)=>{
                                      //console.log(data1)
                                      console.log(data.name,subsub,subId)
                                       return(
                                           <div>
                                              {
                                                        subId==data1.id?
                                                        <div style={{ marginLeft: 20 }} className="all-action-subcontainer-content" >
                                                        <i className="material-icons down-icon" >play_arrow</i>
                                                        <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => onClickSubCategory(data1.id, data.name)} >{data1.name}</div>
                                                       
                                                    </div>
                                                    
                                                       
                                                        :
                                                        <div style={{ marginLeft: 20 }} className="all-action-subcontainer-content" >
                                                        <i className="material-icons dropdown-icon" >play_arrow</i>
                                                            <div style={{ cursor: "pointer" }} onClick={() => onClickSubCategory(data1.id, data.name)} >{data1.name}</div>
                                                        
                                                    </div>
                                                    
                                                    }
                                                   
                                           {
                                               data.name==="Crises"&&subsub&&data1.id===subId?
                                               subsubCategory.map((data2)=>{
                                                //   console.log(data2)
                                                   return(
                                                       <div style={{marginLeft:40}} className="all-action-subcontainer-content-for-subcategory" >
                                                               <div className="sub-category-circle" ></div>
                                                                    
                                                       <div style={{cursor:"pointer"}} onClick={()=>lastListClicked(data2.id,data1.id,data2.name)} >{data2.name}</div>
                                                       <div><input onChange={()=>addintoActionSummary(data2.name)}  style={{marginLeft:40}} type="checkbox" /></div>
                                                       </div>
                                                   )
                                               }):<></>

                                           }
                                           {
                                               data.name==="Case Tips"&&subsub&&data1.id===subId?
                                               subsubCategory.map((data2)=>{
                                                  // console.log(data2)
                                                   return(
                                                    <div style={{marginLeft:40}} className="all-action-subcontainer-content-for-subcategory" >
                                                     <div className="sub-category-circle" ></div>
                                                                    
                                             <div style={{cursor:"pointer"}}  onClick={()=>lastListClicked(data2.id,data1.id,data2.name)}>{data2.name}</div>
                                             <div><input onChange={()=>addintoActionSummary(data2.name)} style={{marginLeft:40}} type="checkbox" /></div>
                                                   
                                             </div>
                                         
                                                    )
                                               }):<></>
                                           }
                                           {
                                               data.name==="Airway & Equipments"&&subsub&&data1.id===subId?
                                               subsubCategory.map((data2)=>{
                                                  // console.log(data2)
                                                   return(
                                                    <div style={{marginLeft:40}} className="all-action-subcontainer-content-for-subcategory" >
                                                     <div className="sub-category-circle" ></div>
                                                                    
                                             <div style={{cursor:"pointer"}} onClick={()=>lastListClicked(data2.id,data1.id,data2.name)}>{data2.name}</div>
                                             <div><input onChange={()=>addintoActionSummary(data2.name)} style={{marginLeft:40}} type="checkbox" /></div>
                                                   
                                             </div>
                                         
                                                    )
                                               }):<></>
                                           }
                                             {
                                               data.name==="Drugs"&&subsub&&data1.id===subId?
                                               subsubCategory.map((data2)=>{
                                                  // console.log(data2)
                                                   return(
                                                    <div style={{marginLeft:40}} className="all-action-subcontainer-content-for-subcategory" >
                                                     <div className="sub-category-circle" ></div>
                                                                    
                                             <div style={{cursor:"pointer"}} onClick={()=>lastListClicked(data2.id,data1.id,data2.name)}>{data2.name}</div>
                                             <div><input onChange={()=>addintoActionSummary(data2.name)} style={{marginLeft:40}} type="checkbox" /></div>
                                                   
                                             </div>
                                         
                                                    )
                                               }):<></>
                                           }
                                             {
                                               data.name==="Preoperative Evaluation"&&subsub&&data1.id===subId?
                                               subsubCategory.map((data2)=>{
                                                  // console.log(data2)
                                                   return(
                                                    <div style={{marginLeft:40}} className="all-action-subcontainer-content-for-subcategory" >
                                                     <div className="sub-category-circle" ></div>
                                                                    
                                             <div style={{cursor:"pointer"}} onClick={()=>lastListClicked(data2.id,data1.id,data2.name)}>{data2.name}</div>
                                             <div><input onChange={()=>addintoActionSummary(data2.name)} style={{marginLeft:40}} type="checkbox" /></div>
                                                   
                                             </div>
                                         
                                                    )
                                               }):<></>
                                           }
                                             {
                                               data.name==="Regional Anesthesia"&&subsub&&data1.id===subId?
                                               subsubCategory.map((data2)=>{
                                                  // console.log(data2)
                                                   return(
                                                    <div style={{marginLeft:40}} className="all-action-subcontainer-content-for-subcategory" >
                                                      <div className="sub-category-circle" ></div>
                                                                    
                                             <div style={{cursor:"pointer"}} onClick={()=>lastListClicked(data2.id,data1.id,data2.name)}>{data2.name}</div>
                                             <div><input onChange={()=>addintoActionSummary(data2.name)} style={{marginLeft:40}} type="checkbox" /></div>
                                                   
                                             </div>
                                         
                                                    )
                                               }):<></>
                                           }
                                           
                                         
                                           </div>
                                       )
                                   }):<></>
                               }
                           </div>
                           )
                       })
                   }
                   </div>
                   <div>{
                   actionSummaryData.length==0?<div className="list-of-action-summary">Nothing selected</div>:

                   actionSummaryData.map((data)=>{
                       return(
                           <div className="list-of-action-summary" >{data}</div>
                       )
                   })}</div>
                   <div onClick={()=>sendDataToActionSummary()} className="submit-button-container" >Add to {actionSummaryType}</div>
            
         
            </div>
         </div>
    

        )
}

export default AllActionForActionSummary
