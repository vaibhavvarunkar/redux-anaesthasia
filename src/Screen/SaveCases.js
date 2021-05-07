import React,{useState} from 'react'
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'

const SaveCases=(props)=>{
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
        <a href="#" onclick="goBack()"><i class="fii icon-down-arrow"></i></a> Saved Cases
    </div>

    <div class="row">
        <div class="col-md-12 savedCases">
            <h3>My Cases</h3>
            <ul class="savdcard">
                <li>
                    <div class="cszeDetail">
                        <h5>Dec. 25, 2020 Case 1</h5>
                        <p>24 yo, F, BMI 44kg/m ^2, ...</p>
                    </div>

                    <div class="soclsBtn">
                        <a href="#"><i class="fii icon-share-2"></i></a>
                        <a href="#"><i class="fii icon-close"></i></a>
                        <a href="#"><i class="fii icon-edit"></i></a>
                    </div>
                    <div class="clearfix"></div>
                </li>
                <li>
                    <div class="cszeDetail">
                        <h5>Dec. 25, 2020 Case 1</h5>
                        <p>24 yo, F, BMI 44kg/m ^2, ...</p>
                    </div>

                    <div class="soclsBtn">
                        <a href="#"><i class="fii icon-share-2"></i></a>
                        <a href="#"><i class="fii icon-close"></i></a>
                        <a href="#"><i class="fii icon-edit"></i></a>
                    </div>
                    <div class="clearfix"></div>
                </li>
                <li>
                    <div class="cszeDetail">
                        <h5>Dec. 25, 2020 Case 1</h5>
                        <p>24 yo, F, BMI 44kg/m ^2, ...</p>
                    </div>

                    <div class="soclsBtn">
                        <a href="#"><i class="fii icon-share-2"></i></a>
                        <a href="#"><i class="fii icon-close"></i></a>
                        <a href="#"><i class="fii icon-edit"></i></a>
                    </div>
                    <div class="clearfix"></div>
                </li>
                <li>
                    <div class="cszeDetail">
                        <h5>Dec. 25, 2020 Case 1</h5>
                        <p>24 yo, F, BMI 44kg/m ^2, ...</p>
                    </div>

                    <div class="soclsBtn">
                        <a href="#"><i class="fii icon-share-2"></i></a>
                        <a href="#"><i class="fii icon-close"></i></a>
                        <a href="#"><i class="fii icon-edit"></i></a>
                    </div>
                    <div class="clearfix"></div>
                </li>
            </ul>
           </div>
    </div>

</div>
</div>

        </div>
    )
}

export default SaveCases