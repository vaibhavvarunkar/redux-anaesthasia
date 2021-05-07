import React from 'react'
import Modal from 'react-modal'
import '../css/BurgerMenu.css'
import {Link} from 'react-router-dom'
import {API_ROOT} from '../constants'

const BurgerMenuModal = (props) => {
    
    const customStyles = {
        content : {
          top                   : '12%',
          left                  : '60%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          backgroundColor:"white",
          width:200,
          height:400
        }
      };

    
      const logout=()=>{
        var token= localStorage.getItem("token")
   
        fetch(API_ROOT+`user-logout?device_type=Android&device_token=123` ,{
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Authorization': 'Bearer ' + token
        }
     
    })
        .then(response => response.json())
        .then(res =>{
            if(res.status==="true"&&res.message==="Logout successfully"){
              window.location="/login"
              localStorage.removeItem('token')
                  
            }

        })
    }

    

    return (
        <div>
        <Modal
          isOpen={props.modalIsOpen}
          onRequestClose={props.onClose}
          style={customStyles}
          contentLabel="Example Modal"
         >
        <div className="burger-modal-container" >
            <Link to="/favourite" >Home</Link>
            <div className="border" ></div>
            <Link to="/myprofile" >MY PROFILE</Link>
            <div className="border" ></div>
           
            <Link to="/savecases" >OPEN A CASE</Link>
            <div style={{marginLeft:20}} >The User's Cases</div>
            <div style={{marginLeft:20}} >Shared Cases</div>
            <div style={{marginLeft:20}} >Case Templates</div>
            <div className="border" ></div>
           
            <div >OPEN A CASE SUMMARY</div>
            <div className="border" ></div>
           
            <Link to="/settings" >SETTINGS</Link>
            <div className="border" ></div>
           
            <Link to="/mysubcription" >MY SUBSCRIPTION</Link>
            <div className="border" ></div>
           
            <Link to="/notification"  >NOTIFICATION</Link>
            <div className="border" ></div>
           
            <Link to="/feedback" >FEEDBACK</Link>
            <div className="border" ></div>
           
            <div onClick={()=>logout()} >LOGOUT</div>
        </div>
        </Modal>
        </div>
    )
}

export default BurgerMenuModal
