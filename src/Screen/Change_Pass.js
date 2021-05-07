import React, { useState } from 'react';
import logo from "../images/logo.png";
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import {API_ROOT} from '../constants'

const Change_pass = (props) => {
    const [oldPassword,setoldPassword]=useState(null)
    const [password,setpassword]=useState(null)
    const [confirmPassword,setconfirmPassword]=useState(null)
    const [burgerMenu,setburgerMenu]=useState(false)
    const burgerMenuClick=()=>{
        props.history.push('/drawer')
       
    }

    const requestChangePassword=()=>{
        if(oldPassword===""){
            alert("please enter old password")
        }else if(password===""){
            alert("please enter new password")
        }else if(confirmPassword===""){
            alert("please enter confirm password")
        }else
         if(password===confirmPassword){
            var token= localStorage.getItem("token")
                fetch(API_ROOT+`change-password?old_password=${oldPassword}&new_password=${password}` ,{
                method: 'POST',
                headers: {
                    'Accept':'application/json',
                    'Authorization': 'Bearer ' + token
                }
             
            })
                .then(response => response.json())
                .then(res =>{
                    if(res.status==="true"&&res.message==="Password is updated successfully."){
                        window.location = '/';
          
                    }
                })
               
            }else {
                alert("password not same...")
            }
    }

    
    return (
        <>
            <BurgerMenuModal modalIsOpen={burgerMenu} />
            <Header  onMenuClick={()=> burgerMenuClick()}   />
         
            { /* header starts here... */}
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <h1 className="navbar_header">
                                <img src={logo} className="logo-img img-fluid"></img>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
            { /* header ends here... */}


            {/* change password part starts here */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-12">
                        <div className="change-pass">
                            <div className="change-pass-text">Change Password</div>
                            <div className="pass-form">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Old Password</label>
                                        <input onChange={(e)=>setoldPassword(e.target.value)} type="password" class="form-control" id="exampleInputEmail1" placeholder="Enter Old Password" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">New Password</label>
                                        <input onChange={(e)=>setpassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="New Password" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Confirm New Password</label>
                                        <input onChange={(e)=>setconfirmPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm New Password" />
                                    </div>
                                    <button onClick={()=> requestChangePassword()} class="btn btn-warning">Update Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* change password part ends here */}
        </>
    )
}

export default Change_pass;