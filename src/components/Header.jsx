import React, { useContext, useEffect }  from 'react'
import Swal from 'sweetalert2';
require('./header.css');


function Header() {
  
  var email = localStorage.getItem('email');

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    Swal.fire({
      title: `Logged out Sucessfully!`,
      icon: 'success',
      showCloseButton: true
      });
    
  }

    if(email){
      const emailRegex = /([^@]+)@/;
      const inputString = email;
      const match = inputString.match(emailRegex);
      var profileName ;

    if (match) {
      const nameBeforeAtSymbol = match[1];
      profileName = nameBeforeAtSymbol;
      
    }
    }
    
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand h5" href="#">TechForIndia</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active h5" aria-current="page" href="/">Home</a>
        </li>        
      </ul>
      {/* profile login check */}
      {email && (
          <div className='logout'>
            <span><a className='user-login' href='/' onClick={logout}>Logout <span>({profileName})</span></a></span>
          </div>
        )}
        {!email && (
          <>
            <form class="d-flex">
        <button class="btn btn-light m-1 header-bt" type="submit"><a href="/volunteer">Register as Volunteer</a></button>
        <button class="btn btn-light m-1 header-bt" type="submit"><a href="/login">Sign in as Admin</a></button>
      </form>
          </>
        )}
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header

