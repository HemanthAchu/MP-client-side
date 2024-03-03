import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { AddcategoryAPI, DeleteCategoryAPI, GetAVideoAPI, getCategoryAPI, getsingleCategoryAPI, updateCategoryAPI } from '../Services/allAPI';
import VideoCard from './VideoCard';
function Categories() {

  const [cate, setcate] = useState([])
  const [Categories, setcategories] = useState("")
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
    setcategories("")
  }
  const handleShow = () => setShow(true);


  const handleAddCategory = async () => {
    if (Categories) {
      const result = await AddcategoryAPI({ Categories, allvideos: [] })
      handleClose()

    } else {
      alert("please fill the form completely !!!")
    }
  }

  const getCategories = async () => {
    const result = await getCategoryAPI()
    setcate(result.data)
  }
  
  useEffect(() => {
    getCategories()
  }, [handleAddCategory])

  const Deletecategories= async (Id)=>{
   await DeleteCategoryAPI(Id)
   getCategories()
  }

  const dragOverCategory =(e)=>{
    e.preventDefault()
    console.log('dragging over category');
  }



const  videoDropped = async (e,Id)=>{
  const videoid =  e.dataTransfer.getData("videoId")
  const {data} =await GetAVideoAPI(videoid)
  console.log(data);
  let selectedCategory =cate.find(item=>item.id==Id)

  selectedCategory.allvideos.push(data)
  console.log(selectedCategory);
  await updateCategoryAPI(Id,selectedCategory)
  getCategories()
console.log(`video dropped with vid: ${videoid} , inside Category id : ${Id}`);
}

const videodragstarted= async (e,vdId,caId)=>{
console.log(`Drag started from category Id: ${caId} with video id : ${vdId}`);
let datashare ={vdId,caId}
e.dataTransfer.setData('removeVideoDetails',JSON.stringify(datashare))



}


  return (
    <div>
      <div className='d-flex justify-content-around'> <h3>All Categories</h3>
      <button onClick={handleShow} className='btn mb-2  btn-info py-2 fs-5 rounded-circle'><i className='  fa-solid fa-plus'></i></button>
        </div>
        <div className='container-fluid'>
          { cate.length>0?  cate?.map((cate)=>(
            <div  droppable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,cate?.id)}  className="border rounded p-3 mb-2"><div className='d-flex justify-content-between'>
              <h5>{cate.Categories}</h5>
              <button onClick={()=>Deletecategories(cate?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></div>
              
              <div className='row mt-2'>
                {
                  cate.allvideos?.length>0 && cate.allvideos?.map((video,index)=>(
                    <div key={index} draggable onDragStart={e=>videodragstarted(e,video?.id,cate?.id)} className='col-lg-6'>
                      <VideoCard insidecategory={true}  view={video} />
                    </div>
                  ))
                }
              </div>
              
              </div>
          )):<div className='text-danger'>no Categories</div>}
          
          
        </div>
     
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category from </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Enter Category Name</p>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control value={Categories}
              onChange={(e) => setcategories(e.target.value)} type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCategory} className='btn btn-info'>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Categories
