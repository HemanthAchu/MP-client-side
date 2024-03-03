import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllvideoAPI, getsingleCategoryAPI, updateCategoryAPI } from '../Services/allAPI'

function View({uploadVideoResponse}) {
  const [view, setview] = useState([])
  const [deletevideo,setdeletevideo]=useState("")
  const getvideos = async () => {
    const result = await getAllvideoAPI()
    if (result?.status == 200) {
      setview(result?.data)
    }
  }

  useEffect(() => {
    getvideos()
  }, [uploadVideoResponse,deletevideo])

const dragoverview=(e)=>{
  e.preventDefault()

}
const handleCategoryvideo= async (e)=>{

const {vdId,caId} =JSON.parse(e.dataTransfer.getData("removeVideoDetails"))
console.log(`remove video Id : ${vdId} from category id :${caId}`);
const {data} =await getsingleCategoryAPI(caId)
const updateVideoList =data.allvideos.filter(item=>item.id!==vdId)
console.log(updateVideoList);
const {id,categories}= data
await updateCategoryAPI(caId,{id,categories,allvideos:updateVideoList})

}

  return (
    <Row droppable="true" onDragOver={(e)=>dragoverview(e)} onDrop={(e)=>handleCategoryvideo(e)} >
      {view?.length > 0 ? view?.map((view,index) => (
        <Col key={index} className='mb-5' sm={12} md={6} lg={4}><VideoCard view={view} setdeletevideo={setdeletevideo} /></Col>
      )) : <div className='text-danger fw-bolder'>No videos are upload yet!!!</div>}



    </Row>
  )
}

export default View
