import React,{useState} from 'react'
import upload from '../images/uploadIMg.png'
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'

const Feedback=(props)=>{
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
        <a href="#" onclick="goBack()"><i class="fii icon-down-arrow"></i></a> Feedback
    </div>

    <div class="row justify-content-center ">
        <div class="col-md-9 savedCases">
            <div class="whtbxs">
                <form>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="password" class="form-control" placeholder="Enter Name" />
                    </div>
                    <div class="form-group">
                        <label>Email Address</label>
                        <input type="password" class="form-control" placeholder="Enter Email Address" />
                    </div>
                    <div class="form-group">
                        <label>Query Subject</label>
                        <input type="password" class="form-control" placeholder="Enter Subject" />
                    </div>
                    <div class="form-group">
                        <label>Message</label>
                        <textarea class="form-control">Message</textarea>

                    </div>


                    <div class="form-group uploadsB">
                        <label>Upload a Image</label>
                        <span class="uploads">
                            <img src={upload} />
                            <input type="file" id="myFile" name="filename" />

                        </span>
                    </div>
                    <div class="form-group mt-4 text-center mb-4">
                        <button type="submit" class="btn font-weight-bold text-uppercase">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    </div>

</div>
</div>
        </div>
    )
}

export default Feedback