import React,{useState} from 'react'
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'

const Subcription=(props)=>{
    const [burgerMenu,setburgerMenu]=useState(false)
    const burgerMenuClick=()=>{
        props.history.push('/drawer')
    
    }

    return(
        <div>
                    <BurgerMenuModal modalIsOpen={burgerMenu} />
            <Header  onMenuClick={()=> burgerMenuClick()}   />
     
    <div class="subsBG">
        <div class="container">
            <div class="row m-0">
                <div class="col-md-12">
                    <div class="LHeadings text-center">
                        <a href="#" onclick="goBack()"><i class="fii icon-down-arrow"></i></a> Subscription Plans
                    </div>
                </div>
            </div>
            <div class="row m-0 spBlock">
                <div class="col-md-4 pr-1">
                    <div class="subsBlock">
                        <span class="imgss"><img src="images/barcode.png"/></span>
                        <h5>Monthly</h5>
                        <p>$20/- Per Month</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Phasellus nec odio congue, dictum eros vel, gravida arcu.</li>
                            <li>Morbi vel nulla congue libero sagittis auctor ac a libero.</li>
                            <li>Aliquam sit amet sapien molestie.</li>
                        </ul>
                        <button type="button" onclick="location.href = 'login.html';" class="btn btn-lg">Select Plan</button>

                    </div>
                </div>
                <div class="col-md-4 pl-1  pr-1">
                    <div class="subsBlock actives">
                        <span class="imgss"><img src="images/barcode.png"/></span>
                        <h5>Monthly</h5>
                        <p>$20/- Per Month</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Phasellus nec odio congue, dictum eros vel, gravida arcu.</li>
                            <li>Morbi vel nulla congue libero sagittis auctor ac a libero.</li>
                            <li>Aliquam sit amet sapien molestie.</li>
                        </ul>
                        <button type="button" onclick="location.href = 'login.html';" class="btn btn-lg">Select Plan</button>

                    </div>
                </div>
                <div class="col-md-4 pl-1">
                    <div class="subsBlock">
                        <span class="imgss"><img src="images/barcode.png"/></span>
                        <h5>Monthly</h5>
                        <p>$20/- Per Month</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Phasellus nec odio congue, dictum eros vel, gravida arcu.</li>
                            <li>Morbi vel nulla congue libero sagittis auctor ac a libero.</li>
                            <li>Aliquam sit amet sapien molestie.</li>
                        </ul>
                        <button type="button" onclick="location.href = 'login.html';" class="btn btn-lg">Select Plan</button>

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

export default Subcription