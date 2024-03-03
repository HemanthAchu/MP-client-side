import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DeletehistoryAPI, gethistoryAPI } from '../Services/allAPI'

function Watch() {
  const [history,sethistory] =useState()
  
    const gethistory= async ()=>{
      const result = await  gethistoryAPI()
      if(result?.status==200){
        sethistory(result.data)
      }
    }
console.log(history);
useEffect(()=>{
  gethistory()
},[])
const deleteHistory= async(Id)=>{
await DeletehistoryAPI(Id)
gethistory()

}
  return (
    <div className='container mt-5 mb-5'>
    <div className="d-flex justify-content-between">
      <h3>Watch History</h3>
      <Link to={'/home'}> <i className='fa-solid fa-arrow-left'></i>Back To <i className='fa-solid fa-home'></i> </Link>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Video Link</th>
          <th>Time Stamp</th>
          <th><i className='fa-solid fa-ellipsis-vertical'></i></th>
        </tr>
      </thead>
      <tbody>
       {history?.length > 0 ?    history?.map((history,index)=>(
        <tr key={index}>
          <td>{index+1}</td>
          <td>{history.caption}</td>
          <td><a href={history.YoutubeLink} target='_blank'>{history.YoutubeLink}</a></td>
          <td>{history.timeStamp}</td>
          <td onClick={()=>deleteHistory(history.id)} ><button className='btn'> <i className='fa-solid fa-trash text-danger'></i></button></td>
        </tr>
       )):<div className='text-danger fw-bolder'>NO video History</div> }
       
      </tbody>
    </table>
    </div>
  )
}

export default Watch
