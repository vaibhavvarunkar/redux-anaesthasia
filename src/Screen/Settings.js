import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'

const Settings=(props)=>{
    const [burgerMenu,setburgerMenu]=useState(false)
    const burgerMenuClick=()=>{
        props.history.push('/drawer')
    
    }

    return(
        <div>
                   <BurgerMenuModal modalIsOpen={burgerMenu} />
            <Header  onMenuClick={()=> burgerMenuClick()}   />
          

                     <div class="col-md-12 pl-0 pr-2">

<div class="conArea d-block">
    <div class="LHeadings text-center">
        <a href="#" onclick="goBack()"><i class="fii icon-down-arrow"></i></a> Settings
    </div>

    <div class="row justify-content-center ">
        <div class="col-md-9 savedCases">
            <div class="whtbxs">
                <ul>
                    <li>
                        <div class="float-left">
                            <h6>Notifications </h6>
                        </div>
                        <div class="float-right">
                            <div class="material-switch pull-right">
                                <input id="someSwitchOptionPrimary" name="someSwitchOption001" type="checkbox" />
                                <label for="someSwitchOptionPrimary" class="label-primary"></label>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </li>

                    <li>
                        <div class="float-left">
                            <h6><Link to="/changepassword" >Change Password </Link></h6>
                        </div>

                        <div class="clearfix"></div>
                    </li>


                    <li>
                        <div class="float-left">
                            <h6><Link to="/termsandconditions" >Terms  Conditions</Link></h6>
                        </div>

                        <div class="clearfix"></div>
                    </li>


                    <li  onclick="location.href = 'Dark/Settings.html';">
                        <div class="float-left">
                            <h6>Colour Theme </h6>
                        </div>
                        <div class="float-right">
                            <p>White</p>
                        </div>
                        <div class="clearfix"></div>
                    </li>


                    <li>
                        <div class="float-left">
                          <h6>  <Link to="/privacypolicy" >Privacy Policy</Link></h6>
                        </div>

                        <div class="clearfix"></div>
                    </li>


                    <li>
                        <div class="float-left">
                           <h6> <Link to="/about" >About us </Link></h6>
                        </div>

                        <div class="clearfix"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</div>
</div>

        </div>
    )
}

export default Settings