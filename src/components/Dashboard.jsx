import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function Dashboard() {
    var email = localStorage.getItem('email');
    const endPoint = 'http://localhost:8000';
    console.log(email);
    if(!email){
        window.location = '/';
    }
    const [vdata, setVdata] = useState([]);
    useEffect(() => {
        // Fetch data from the server
        fetch(endPoint+'/data',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            }
        })
          .then((res) => res.json())
          .then((data) => setVdata(data))
          .catch((err) => console.error('Error fetching data:', err));
      }, [setVdata]);
     const  data = setVdata?.data;
       console.log(vdata);
       var count = 1;
  return (
    <div>
        <h1 className='text-center m-4'>Dashboard</h1>
        <div className='container'>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Conatct</th>
                    <th scope="col">Location</th>
                    <th scope="col">Language</th>
                    <th scope="col">Availablity</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Using map to render rows */}
                        {vdata.map((item) => (
                            // key={item.id}
                            <tr >
                            <td>{count++}</td>
                            <td>{item.fname}</td>
                            <td>{item.email}</td>
                            <td>{item.contact}</td>
                            <td>{item.location}</td>
                            <td>{item.language}</td>
                            <td>{item.availablity}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Dashboard