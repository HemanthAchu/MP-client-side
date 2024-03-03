import React from 'react'
import { useState } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { uploadvideoAPI } from '../Services/allAPI';

function Add({setuploadVideoResponse}) {



    const [uploadVideo, setUploadVideo] = useState({
        caption: "", imageURL: "", YoutubeLink: ""
    })


    const [show, setShow] = useState(false);

    const handleClose = () => {
        setUploadVideo({ ...uploadVideo, caption: "", imageURL: "", YoutubeLink: "" })
        setShow(false)
    }

    const handleShow = () => setShow(true);
    //console.log(uploadVideo)

    const getyoutubeEmbed = (link) => {

        if (link.includes("v=")) {

            let videoId = link.split("v=")[1].slice(0, 11)
            setUploadVideo({ ...uploadVideo, YoutubeLink: `https://www.youtube.com/embed/${videoId}` })

        } else {
            setUploadVideo({ ...uploadVideo, YoutubeLink: "" })
            alert("input proper youtube link!!!")
        }

    }

    const handleupload = async () => {
        const { caption, imageURL, YoutubeLink } = uploadVideo
        if (caption && imageURL && YoutubeLink) {

            const result = await uploadvideoAPI(uploadVideo)
            if (result.status >= 200 && result.status < 300) {
                alert(`video ${result.data.caption} upload successfully`)
                setuploadVideoResponse(result.data)
                handleClose()
            } else {
                alert("API Call Failed.... Please try after some time!!!")
            }
        } else {
            alert("plz fill the form completely")
        }
    }



    return (
        <div>
            <div className="d-flex">
                <h5>Upload A Video</h5>
                <button onClick={handleShow} className='btn  bg-secondary d-flex justify-content-center align-items-center ms-2 rounded-circle'><i className='  fa-solid fa-plus'></i></button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload A Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please Fill the Following Details!!!</p>
                    <div className='border rounded p-3'> <FloatingLabel
                        controlId="floatingInputCaption"
                        label="Video Caption"
                        className="mb-3" value={uploadVideo.caption} onChange={e => setUploadVideo({ ...uploadVideo, caption: e.target.value })}
                    >
                        <Form.Control type="text" placeholder="video Caption" />
                    </FloatingLabel>


                        <FloatingLabel
                            controlId="floatingInputImg"
                            label="Image Url"
                            className="mb-3" value={uploadVideo.imageURL} onChange={e => setUploadVideo({ ...uploadVideo, imageURL: e.target.value })}
                        >
                            <Form.Control type="text" placeholder="Image Url" />
                        </FloatingLabel>


                        <FloatingLabel
                            controlId="floatingInputLink"
                            label="youtube Video Link"
                            className="mb-3" value={uploadVideo.YoutubeLink} onChange={e => getyoutubeEmbed(e.target.value)}
                        >
                            <Form.Control type="text" placeholder="Youtube Video Link" />
                        </FloatingLabel></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleupload} className=" btn btn-info">update</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Add
