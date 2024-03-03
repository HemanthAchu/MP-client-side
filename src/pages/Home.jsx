import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Categories from '../components/Categories'

function Home() {
  const [uploadVideoResponse,setuploadVideoResponse] =useState("")
 
  return (
    <div>
      <div className="container mt-5 d-flex justify-content-between">
        <Add setuploadVideoResponse={setuploadVideoResponse}  /> 
        <Link to={'/watch'}>View History</Link>
      </div>
      <div className="container-fulid mt-5 mb-5 row">
        <div className="col-lg-7">
          <h3>All Videos</h3>
          <View uploadVideoResponse={uploadVideoResponse}  />
        </div>
        <div className="col-lg-5">
        <Categories/>
       
        
        </div>
      </div>
    </div>
  )
}

export default Home
