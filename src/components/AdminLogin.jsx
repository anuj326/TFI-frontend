import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2';

function AdminLogin() {
    const history = useNavigate()

    const [user, setUser] = useState({
       email:'', password:'',
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
  const loginUser = async(e)=>{
    e.preventDefault();
    const {email, password} =user;
  const res = await fetch(endPoint+'/signin',{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(
      { email, password }
    )
  });
  const data = await res.json();
  console.log(data);
  console.log(data.token);
  if(res.status == 400 || !data){
    Swal.fire({
      title: `Invalid Username Or Password`,
      icon: 'error',
      showCloseButton: true
      });
  }else{
    Swal.fire({
      title: `Logged in Sucessfully!`,
      icon: 'success',
      showCloseButton: true
      });
    setTimeout(() => {
      localStorage.setItem( "email", data.email); 
      localStorage.setItem( "token",data.token);
       window.location = "/dashboard";	
    }, 1000);
   //window.alert('Logged in Successfully')
   
  }
  
}
  
    return (
      <div className='row align-items-start'>
        <div className='col'>
            
         </div>
          <div className='col'>
            <div className='text-center'>
                 {/* <i class="fa-solid fa-user-plus"></i> */}
                 <p className='slogan'>Welcome Back , Admin</p>
            </div>
            
            <form className='form-control ' method='POST'>
              <div className=''>                              
                Email: <input className='form-control' type="email" name="email" id="email" placeholder='Enter Email' required
                  value={user.email}
                  onChange={handelInputs}
                /> <br />
                Contact <input className='form-control' type="password" name="password" id="password" placeholder='Enter Password'
                  value={user.password}
                  onChange={handelInputs}
                /> <br />
                
                <div className='d-grid gap-2'>
                  <input className='btn btn-primary' type='submit' onClick={loginUser} value={'Submit'} />
                  <button className='btn btn-primary btl' ><a href="/">Back to Home</a></button>
              </div>
              </div>
              
            </form>
          </div>
         
         <div className='col'>
              
         </div>
          
      </div>
  )
}

export default AdminLogin