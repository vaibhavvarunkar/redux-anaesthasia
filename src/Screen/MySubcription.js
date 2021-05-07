import React,{useState} from 'react'
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import { Link } from 'react-router-dom'

const MySubcription=(props)=>{
    const [burgerMenu,setburgerMenu]=useState(false)
    const burgerMenuClick=()=>{
        props.history.push('/drawer')
    
    }

    return(
        <div>
                 <BurgerMenuModal modalIsOpen={burgerMenu} />
            <Header  onMenuClick={()=> burgerMenuClick()}   />
          
 <div class="container">
 <div class="col-md-12 pl-2 pr-2">
                <div class="conArea d-block">
                    <div class="LHeadings text-center">
                        <a href="#" onclick="goBack()"><i class="fii icon-down-arrow"></i></a> My Subscriptions
                    </div>
                    <div class="row justify-content-center ">
                        <div class="col-md-9 savedCases">
                            <div class="greyBlock">

                                <div class="row">
                                    <div class="col-md-9">
                                        <h5>Current Plan</h5>
                                        <h4>Monthly</h4>
                                        <p>Get access to hundreds of guided medical guidlines and scores.</p>
                                    </div>
                                    <div class="col-md-3 text-right align-self-center">$20/- Per Month</div>
                                </div>


                                <div class="row">
                                    <div class="col-md-12 mt-4 mb-3 text-center">
                                        <Link to="/subcription" > <button type="submit" class="btn font-weight-bold text-uppercase">update Plan</button>
                                       </Link>
                                        <button type="submit" class="btn font-weight-bold text-uppercase">Cancel Subscription</button>

                                    </div>
                                </div>
                            </div>
                            <p class="infs">Recurring Billing. Cancel anytime. Payment will be charged to your saved payment method. Your subscription automatically renews unless auto-renew is turned of at least 24 hours before the end of the current period. </p>
                        </div>
                    </div>

                </div>
            </div>
        
   </div>
   <footer>
        <p>Calculations must be re-checked and should not be used alone to guide patient care, nor should they substitute for clinical judgment. See our full disclaimer.</p>
        <span>Anesthesia One © 2021 · All Rights Reserved · <a href="#">Terms of Use </a>· <a href="#">Privacy Policy</a></span>
    </footer>
  
        </div>
    )
}

export default MySubcription