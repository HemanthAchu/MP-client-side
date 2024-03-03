import React from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import { useState } from 'react';
import { DeleteVideoAPI, savehistoryAPI } from '../Services/allAPI';
function VideoCard({ view,setdeletevideo ,insidecategory }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true)
  const {caption,YoutubeLink}=view
let timeData =new Date()
let timeStamp =new Intl.DateTimeFormat('en-US',{
  year:'numeric',month:"2-digit",day:"2-digit",hour:'2-digit',minute:'2-digit',second:"2-digit"
}).format(timeData)
console.log(timeStamp);
await savehistoryAPI({caption,YoutubeLink,timeStamp})
  }

  const VideoDeleteAPI =async (Id)=>{
    await DeleteVideoAPI(Id)
    setdeletevideo(Id)
  }

  const dragStarted=(e,Id)=>{
console.log(`Dragging started with video id : ${Id}`);
e.dataTransfer.setData("videoId",Id)
  }

  return (
    <div>
      <Card draggable onDragStart={(e)=>dragStarted(e,view?.id)} className='shadow'>
        <Card.Img style={{ cursor: "pointer" }} onClick={handleShow} variant="top" height={'200px'} src={view?.imageURL} />
        <Card.Body>
          <Card.Title className='d-flex  justify-content-between  ' >
            <p>{view?.caption}</p>
            {insidecategory?null:<button onClick={()=>VideoDeleteAPI(view?.id)} className='btn' ><i className='fa-solid fa-trash text-danger'></i></button>}
          </Card.Title>


        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{view?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src={`${view?.YoutubeLink
            }?autoplay=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>

      </Modal>
    </div>
  )
}

export default VideoCard
