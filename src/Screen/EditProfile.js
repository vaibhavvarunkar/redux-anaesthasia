import React,{useEffect,useState} from 'react';
import logo from "../images/logo.png";
import user from "../images/user-imgss.jpg";
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import {API_ROOT} from '../constants'

const EditProfile = (props) => {
    const [firstName,setfirstName]=useState(null)
    const [lastName,setlastName]=useState(null)
    const [email,setEmail]=useState(null)
    const [mobile,setMobile]=useState(null)
    const [burgerMenu,setburgerMenu]=useState(false)
    const [file,setFile]=useState(null)
    const burgerMenuClick=()=>{
        props.history.push('/drawer')
    
    }

    useEffect(() => {
        getProfile()
     }, [])

     const saveUserProfile=()=>{
    if(firstName===""){
        alert("please enter first name")
    } if(lastName===""){
        alert("please enter last name")
    
    }
    else if(email===""){
        alert("please enter email")
    }else if(mobile===""){
        alert("please enter phoneNumber")
    }else{
           var token= localStorage.getItem("token")
           
 let formdata = new FormData();


    formdata.append("profile_pic",file)
    formdata.append("email",email)
    formdata.append("first_name",firstName)
    formdata.append("last_name",lastName)
    formdata.append("mobile_number",mobile)
    

           fetch(`http://ec2-18-189-0-11.us-east-2.compute.amazonaws.com/api/update-profile` ,{
        method: 'POST',
        headers: { 
           'Accept': 'application/json',
           'Authorization': 'Bearer ' + token
       
            
         },
         body:formdata
       
    })
        .then(response => response.json())
        .then(res =>{
            console.log(res)
            if(res.status==="true"){
                console.log(res)
                alert(res.message)
            }
        })

    
    }
  
    }

  

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
                        <div className="col-md-12 col-12">
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
                            </div>
                            <div className="user-profile-show">
                                <ul>
                                <li>
                                    <div class="form-group mb-0">
                                        <label>Image Upload</label>
                                        <input onChange={(e)=>setFile(e.target.files)} id="file" type="file" class="form-control" />
                                    </div>
                                </li>
                               
                                    <li>
                                        <span>First name</span>
                                        <input value={firstName} onChange={(e)=>setfirstName(e.target.value)}   id="first-name"  class="form-control"  aria-describedby="emailHelp" placeholder="Enter First Name"/>
                  
                                        <hr />
                                    </li>
                                    <li>
                                        <span>Last name</span>
                                        <input value={lastName} onChange={(e)=>setlastName(e.target.value)}   id="last=name"  class="form-control"  aria-describedby="emailHelp" placeholder="Enter Last Name"/>
                  
                                        <hr />
                                    </li>
                                    <li>
                                        <span>Email Address</span>
                                        <input value={email} onChange={(e)=>setEmail(e.target.value)}   id="email" type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter Email Id"/>
                  
                                        <hr />
                                    </li>
                                    <li>
                                        <span>Phone Number</span>
                                        <input value={mobile} onChange={(e)=>setMobile(e.target.value)}   id="mobile" type="numeric" class="form-control"  aria-describedby="emailHelp" placeholder="Enter Email Id"/>
                  
                                        <hr />
                                    </li>
                                    <li style={{marginBottom:15}} >
                                    <div onClick={()=>saveUserProfile()} style={{width:200,height:50,backgroundColor:"green",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:15,color:"white",cursor:"pointer"}} >
                                    Submit
                                </div>
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

export default EditProfile;