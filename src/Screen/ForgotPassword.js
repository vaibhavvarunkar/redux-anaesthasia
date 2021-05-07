import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import {API_ROOT} from '../constants'

const ForgotPassword=()=>{

    const [EmailOrPhone,setEmailOrPhone]=useState(null)

    const requestForgotPassword=()=>{
        var emailorphone=document.getElementById('email-or-phone').value
      if(emailorphone===""){
          alert("please enter email or phone number")
        
      }else{
        fetch(API_ROOT+`forgot-password?email=${emailorphone}` ,{
        method: 'POST',
        
     
    })
        .then(response => response.json())
        .then(res =>{
            console.log(res)
            if(res.status==="true"&&res.message==="Reset Email Sent Successfully."){
                window.location="/"
            }else{
                alert(res.message)
            }
        })
      }
    }

    
    return(
        <div>
         <header>
        <div class="container">
            <div class="row">
                <div class="col-md-12 header-right">
                    <h1 class="logo">
                        <a href="index-after-login.html"><img src={logo} /></a>
                    </h1>
                    <div class="usersDetail">
                        <i class="fii icon-user" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="subsBG">
        <div class="container">
            <div class="row justify-content-center ">
                <div class="col-md-5 whtbx">
                    <h3>Forgot Password</h3>
                    <p class="text-center">Enter e-mail address OR phone number <br/>associated with your account</p>
                    <div class="form-group">
                        <label>E-mail Address/Phone Number</label>
                        <input onchange={(e)=>setEmailOrPhone(e.target.value)} id="email-or-phone" class="form-control" placeholder="Enter E-mail Address/Phone Number" />
                    </div>
                    <button onClick={()=>requestForgotPassword()} class="btn ">submit</button>
                </div>
            </div>
            <p class="stexts text-center">Already have an account? <Link to="/signup" >Sign in here</Link></p>
        </div>
    </div>
    <footer>
        <p>Calculations must be re-checked and should not be used alone to guide patient care, nor should they substitute for clinical judgment. See our full disclaimer.</p>
        <span>Anesthesia One © 2021 · All Rights Reserved · <a href="#">Terms of Use </a>· <a href="#">Privacy Policy</a></span>
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
                    <span class="infos">click here to prevent this notification from appearing again</span>
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
                    <span class="infos">click here to prevent this notification from appearing again</span>
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
                    <span class="infos">click here to prevent this notification from appearing again</span>
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
                    <span class="infos">click here to prevent this notification from appearing again</span>
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
                        <div class="col-4"><span>GASTRODUO DENAL</span></div>
                    </div>

                    <div class="row mb-2 ml-0 mr-0">
                        <div class="col-4"><span>W/IMPLANTED FOREIGN MATERIAL </span></div>
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

export default ForgotPassword