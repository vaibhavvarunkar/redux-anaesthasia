import React,{useState,useEffect} from 'react'
import Header from '../CustomComponent/Header'
import Tab from '../CustomComponent/Tab'
import '../css/index.css'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import {API_ROOT} from '../constants'

function IndexAfterLogin() {
    
    const [drugData,setdrugData]=useState([])
    const [drugList,setdrugList]=useState([])
    const [isDrugClick,setisDrugClick]=useState(false)
    
    const getDrugType=()=>{
            var token= localStorage.getItem("token")
            setisDrugClick(true)
            fetch(API_ROOT+`drug-type-list` ,{
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Authorization': 'Bearer ' + token
            }
         
        })
            .then(response => response.json())
            .then(res =>{
                if(res.status==="true"){
                setdrugData(res.data.data)
                }
            })

            fetch('http://ec2-18-189-0-11.us-seast-2.compute.amazonaws.com/api/drug-list' ,{
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Authorization': 'Bearer ' + token
            }
         
        })
            .then(response => response.json())
            .then(res =>{
                if(res.status==="true"){
                    setdrugList(res.data.data)
                    
                }
            })


    }

    const [burgerMenu,setburgerMenu]=useState(false)
    const burgerMenuClick=()=>{
        setburgerMenu(!burgerMenu)
    }


    return (
        <div  >
            <Header onMenuClick={()=> burgerMenuClick()} />
            <BurgerMenuModal  modalIsOpen={burgerMenu} />
            <div className="index-tab-container" >
            <Tab/>
            </div>
         </div>
    )
}

export default IndexAfterLogin
