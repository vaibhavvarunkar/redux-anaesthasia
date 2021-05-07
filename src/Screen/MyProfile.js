import React,{useEffect,useState} from 'react';
import logo from "../images/logo.png";
import user from "../images/user-imgss.jpg";
import {Link} from 'react-router-dom' 
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import {API_ROOT} from '../constants'

const MyProfile = (props) => {
    const [firstName,setfirstName]=useState(null)
    const [lastName,setlastName]=useState(null)
    const [email,setEmail]=useState(null)
    const [mobile,setMobile]=useState(null)
    const [burgerMenu,setburgerMenu]=useState(false)
    const burgerMenuClick=()=>{
        props.history.push('/drawer')
    
    }

    useEffect(() => {
        getProfile()
     }, [])
  

    const getProfile=()=>{
        var token= localStorage.getItem("token")
        fetch(API_ROOT+`get-profile` ,{
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Authorization': 'Bearer ' + token
        }
     
    })
        .then(response => response.json())
        .then(res =>{
            if(res.status==="true"&&res.message==="User profile data."){
              
            setfirstName(res.data.first_name)
            setlastName(res.data.last_name)
            setEmail(res.data.email)
            setMobile(res.data.mobile_number)
            }else{
                alert('data not found.')
            }
        })
    }
    return (
        <>
             <BurgerMenuModal modalIsOpen={burgerMenu} />
            <Header  onMenuClick={()=> burgerMenuClick()}   />
          
            { /* header starts here... */}
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12z col-12">
                            <h1 className="navbar_header">
                                <img src={logo} className="logo-img img-fluid"></img>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
            { /* header ends here... */}


            {/* profile part starts here */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-12">
                        <div className="profile-container">
                            <div className="user-profile">
                                <img src={user} className="user-profile-pic"></img>
                                <h3 className="username">{firstName===null?"Daniel D Evans":firstName}  {lastName===null?"Daniel D Evans":lastName}</h3>
                                <p className="user-email">{email===null?"daniel.d.evans@gmail.com":email}</p>
                                <Link to="/editprofile" ><i style={{position:"absolute",top:15,right:35}} class="fa fa-pencil "></i></Link>
                            </div>
                            <div className="user-profile-show">
                                <ul>
                                    <li>
                                        <span>First name</span>
                                        <p id="firstname" >{firstName===null?"Daniel D Evans":firstName} </p>
                                        <hr />
                                    </li>
                                    <li>
                                        <span>Last name</span>
                                        <p id="lastname" >{lastName===null?"Daniel D Evans":lastName} </p>
                                        <hr />
                                    </li>
                                    <li>
                                        <span>Email Address</span>
                                        <p id="email" >{email===null?"daniel.d.evans@gmail.com":email}  </p>
                                        <hr />
                                    </li>
                                    <li>
                                        <span>Phone Number</span>
                                        <p id="phoneNumber" >{mobile===null?"+1 937-903-2831":mobile} </p>
                                        <hr />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* profile part ends here */}

        </>
    )
}

export default MyProfile;