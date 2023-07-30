import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2';
require('./volunteer.css');

function Volunteer() {
  
    const history = useNavigate()

  const [user, setUser] = useState({
    fname:'', email:'', contact:'', location:'',language:'', availablity:''
  });


let   name , value;
const handelInputs = (e) =>{
  //  console.log(e.target.name);
  //  console.log(e.target.value);
    e.preventDefault();
    name =  e.target.name;
    value = e.target.value;
    setUser({...user, [name]: value})
    //console.log(user.email);
}
const endPoint = 'http://localhost:8000';
const postData = async (e)=>{
      e.preventDefault();
      const {fname , email , contact , location ,language , availablity} =user;
      const res = await fetch(endPoint+'/register',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(
          { fname , email , contact , location ,language , availablity }
        )
      });
      const data = res.json();
      if(res.status == 422 || !data){   
        Swal.fire({
          title: `Volunteer already registered`,
          icon: 'error',
          showCloseButton: true
          });
      }else if(res.status == 400 || !data){
        Swal.fire({
          title: `All fields Required`,
          icon: 'error',
          showCloseButton: true
          });
      }else{
          Swal.fire({
          title: `Registered successfully`,
          icon: 'success',
          showCloseButton: true
          });
        history('/');
      }
      
}

  return (
    <div className='row align-items-start'>
      <div className='col'>
          
       </div>
        <div className='col'>
          <div className='text-center'>
               {/* <i class="fa-solid fa-user-plus"></i> */}
               <p className='slogan'>Let's Register and Start new Journey</p>
          </div>
          
          <form className='form-control ' method='POST'>
            <div className=''>
              Full Name: <input className='form-control' type="text" name="fname" id="fname" placeholder='Full Name' required
                value={user.fname}
                onChange={handelInputs}
              /> <br />
              
              Email: <input className='form-control' type="email" name="email" id="email" placeholder='Email' required
                value={user.email}
                onChange={handelInputs}
              /> <br />
              Contact <input className='form-control' type="text" name="contact" id="contact" placeholder='Contact'
                value={user.contact}
                onChange={handelInputs}
              /> <br />

              Location: <input className='form-control' type="text" name="location" id="location" placeholder='Location' required
                value={user.location}
                onChange={handelInputs}
              /><br />
              Spoken Language: <input className='form-control' type="text" name="language" id="language" placeholder='Language' required
                value={user.language}
                onChange={handelInputs}
              /><br />
              Availablity: <input className='form-control' type="text" name="availablity" id="availablity" placeholder='Enter Your Avialable Days' required
                value={user.availablity}
                onChange={handelInputs}
              /><br />
              
              <div className='d-grid gap-2'>
                <input className='btn btn-primary' type='submit' onClick={postData} value={'Submit'} />
                <button className='btn btn-primary btl'><a href="/">Back to Home</a></button>
            </div>
            </div>
            
          </form>
        </div>
       
       <div className='col'>
            
       </div>
        
    </div>
  )
}

export default Volunteer