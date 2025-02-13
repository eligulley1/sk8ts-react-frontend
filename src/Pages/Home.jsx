import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import '../css/Home.css'
function Home() {
    return (
      <div className='home-container'>
        <div className='image-highlight-container'>
          <Link to='/ProductInfo/6'>
            <img src='/Images/shoe_photo.jpg' className='image-highlight'></img>
          </Link>
        </div>
        <div className='about-business-container'>
          Placeholder text
        </div>
      </div>
    )
  }
  
  export default Home