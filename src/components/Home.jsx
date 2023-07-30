import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className='container'>
          <Link to={'https://www.teachforindia.org/'} ><img className='img-fluid' src={require('./img/img.png')} alt="" /></Link>
          
        </div>
    </div>
  )
}

export default Home