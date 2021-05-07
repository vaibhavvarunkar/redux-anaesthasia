import React,{useState,useEffect,useContext} from 'react'
import google from '../images/gplus.png'
import { GoogleLogin } from 'react-google-login';
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import facebook from '../images/facebook.png'
import {API_ROOT} from '../constants'

function Login(props) {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  
    
       
    const responseGoogle = (response) => {
        console.log(response.profileObj.googleId);

       fetch(API_ROOT+`login-with-social?social_id=${response.profileObj.googleId}&social_type=Google&device_token=123456789&device_type=Android` ,{
            method: 'POST',
            
            headers: { 
               'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
         
        })
            .then(response => response.json())
            .then(res =>{
                console.log(res)
                if(res.status==="true"&&res.message==="Login successfully."){
                    localStorage.setItem('token', res.token);
                    props.history.push('/favourite')
                   
                      }else if(res.status==="false"&&res.message==="User not found."){
                         alert("User not found.")
                     }else if(res.status==="false"&&res.message==="Password Incorrect."){
                         alert("User not found.")
                     }
            
            })
            

      }

      const loginUser=()=>{
        
          console.log(email,password)
        if(email===""){
            alert("please enter email id")
        }else if(password===""){
            alert("please enter password")
        }else{
            fetch(API_ROOT+`login?email=${email}&password=${password}&device_token=123&device_type=Android` ,{
        method: 'POST',
        
        headers: { 
           'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
     
    })
        .then(response => response.json())
        .then(res =>{
            if(res.status==="true"&&res.message==="Login Successfully"){
                localStorage.setItem('token', res.token);
                props.history.push('/favourite')
                   
            
                 
                   
                 }else if(res.status==="false"&&res.message==="User not found."){
                     alert("User not found.")
                 }else if(res.status==="false"&&res.message==="Password Incorrect."){
                     alert("User not found.")
                 }
        })
    }
}
    return (
        <div>
        <header>
        <div class="container">
            <div class="row">

                <div class="col-md-12 header-right">
                    <h1 class="logo">
                        <a ><img src={logo} /></a>
                    </h1>
                    <div class="usersDetail"><i class="fii icon-user" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="subsBG">
        <div class="container">
            <div class="row justify-content-center ">
                <div class="col-md-5 whtbx">
                    <h3>Welcome Back!</h3>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input onChange={(e)=>setEmail(e.target.value)}   id="email" type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter Email Id"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange={(e)=>setPassword(e.target.value)} id="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password"/>
                    </div>

                    <Link to="/forgotPassword" >Forgot Password?</Link>

                    <button onClick={()=>loginUser()} class="btn " >Login</button>
                    <p class="ORs">OR</p>
                    <div class="socials text-center">
                        <a href="#">
                            <img src={facebook} />
                        </a>

                        <a onclick="onSignIn()" >
                        <GoogleLogin
    clientId="488862924565-av28ojkuhskvf7gt8p174gmerllpbvns.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={ responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
                        </a>
                    </div>

                </div>

            </div>
            
            <p class="stexts text-center">Don't have an account? <Link to="/signup" >Sign up here</Link></p>
        </div>

    </div>
    <footer>
        <p>Calculations must be re-checked and should not be used alone to guide patient care, nor should they substitute for clinical judgment. See our full disclaimer.</p>
        <span>Anesthesia One © 2021 · All Rights Reserved · <Link to="/termsandconditions">Terms of Use </Link>· <Link to="/privacypolicy">Privacy Policy</Link></span>
    </footer>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">

                <div class="modal-body">
                    <h6>are you sure you want to clear data for this field. </h6>
                    <div class="btnBox">
                        <button class="savebtns" data-dismiss="modal">yes</button>
                        <button data-dismiss="modal">NO</button>
                    </div>
                    <span class="infos">click here to prevent this
                        notification from appearing again</span>
                </div>

            </div>
        </div>
    </div>


    <div class="modal fade" id="genderModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">

                <div class="modal-body">
                    <h6>are you sure you want to clear data for this field. </h6>
                    <div class="btnBox">
                        <button class="gsavebtns" data-dismiss="modal">yes</button>
                        <button data-dismiss="modal">NO</button>
                    </div>
                    <span class="infos">click here to prevent this
                        notification from appearing again</span>
                </div>

            </div>
        </div>
    </div>

    <div class="modal fade" id="WeightModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">

                <div class="modal-body">
                    <h6>are you sure you want to clear data for this field. </h6>
                    <div class="btnBox">
                        <button class="wsavebtns" data-dismiss="modal">yes</button>
                        <button data-dismiss="modal">NO</button>
                    </div>
                    <span class="infos">click here to prevent this
                        notification from appearing again</span>
                </div>

            </div>
        </div>
    </div>

    <div class="modal fade" id="surgeryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">

                <div class="modal-body">
                    <h6>are you sure you want to clear data for this field. </h6>
                    <div class="btnBox">
                        <button class="sursavebtns" data-dismiss="modal">yes</button>
                        <button data-dismiss="modal">NO</button>
                    </div>
                    <span class="infos">click here to prevent this
                        notification from appearing again</span>
                </div>

            </div>
        </div>
    </div>


    <div class="modal fade" id="generalModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">general/sURGERY TYPE</h5>
                    <div class="actnss">
                        <i class="fii icon-floppy-disk sursavebtns" data-dismiss="modal"></i>
                        <i data-dismiss="modal" class="fii icon-close"></i>

                    </div>
                </div>
                <div class="modal-body">
                    <div class="row mb-2  ml-0 mr-0">
                        <div class="col-4"><span>APPENDECTOMY - UNCOMPLICATED</span></div>
                        <div class="col-4"><span>MALL INTESTINE – HERNIA REPAIR</span></div>
                        <div class="col-4"><span>SMALL INTESTINE – NON OBSTRUCTED	</span></div>

                    </div>

                    <div class="row mb-2 ml-0 mr-0">
                        <div class="col-4"><span>SMALL INTESTINE - OBSTRUCTED </span></div>
                        <div class="col-4"><span>COLORECTAL</span></div>
                        <div class="col-4"><span>GASTRODUO
                            DENAL</span></div>

                    </div>

                    <div class="row mb-2 ml-0 mr-0">
                        <div class="col-4"><span>W/IMPLANTED
                            FOREIGN
                            MATERIAL </span></div>
                        <div class="col-4"><span>NOT LISTED</span></div>


                    </div>
                </div>

            </div>
        </div>
    </div>





    <div class="modal fade" id="AllModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">

                <div class="modal-body">
                    <h6>PLEASE SELECT HOW YOU WOULD LIKE TO SAVE THIS CASE:</h6>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4 br-right">
                                <a href="#" data-dismiss="modal">SAVE W/O STARTING CASE</a>
                                <a href="#" data-dismiss="modal">SAVE TO YOUR PROFILE</a>
                            </div>
                            <div class="col-4">
                                <a href="#" data-dismiss="modal">SAVE AS CASE 1</a>
                                <a href="#" data-dismiss="modal">SAVE AS CASE 3</a>
                            </div>
                            <div class="col-4">
                                <a href="#" data-dismiss="modal">SAVE AS CASE 2</a>
                                <a href="#" data-dismiss="modal">SAVE AS CASE 4</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <div class="modal fade" id="summaryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">

                <div class="modal-body">
                    <h6>PLEASE SELECT HOW YOU WOULD LIKE TO SAVE THIS CASE:</h6>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4 br-right">
                                <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#summaryModal-2">SAVE W/O STARTING CASE</a>
                                <a href="#" data-dismiss="modal">SAVE TO YOUR PROFILE</a>
                            </div>
                            <div class="col-4">
                                <a href="#" data-dismiss="modal">SAVE AS CASE 1</a>
                                <a href="#" data-dismiss="modal">SAVE AS CASE 3</a>
                            </div>
                            <div class="col-4">
                                <a href="#" data-dismiss="modal">SAVE AS CASE 2</a>
                                <a href="#" data-dismiss="modal">SAVE AS CASE 4</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <div class="modal fade" id="summaryModal-2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">




                <div class="modal-body">
                    <h6>CASE 1</h6>
                    <span>SAVE AS:</span>
                    <span class="blocks">18YO_F_COLORECTAL_12-19-2020</span>
                </div>

            </div>
        </div>
    </div>
    <div class="modal fade" id="StartCaseModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">

                <div class="modal-body">
                    <h6>PLEASE SELECT HOW YOU WOULD LIKE TO SAVE THIS CASE:</h6>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-4 br-right">
                                <a href="#" data-dismiss="modal" class="saveLater">Save all started cases</a>
                                <a href="#" data-dismiss="modal" class="saveLater">SAVE Later</a>
                                <a href="#" data-dismiss="modal" class="saveLater">SAVE No Cases</a>
                            </div>
                            <div class="col-4">
                                <span>&nbsp;</span>
                                <a href="#" data-dismiss="modal" class="saveLater">SAVE AS CASE 1</a>
                                <a href="#" data-dismiss="modal" class="saveLater">CASE 3 Not Started</a>
                            </div>
                            <div class="col-4">
                                <span>&nbsp;</span>
                                <a href="#" data-dismiss="modal" class="saveLater">CASE 2 Not Started</a>
                                <a href="#" data-dismiss="modal" class="saveLater">CASE 4 Not Started</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


            
        </div>
    )
}

export default Login
