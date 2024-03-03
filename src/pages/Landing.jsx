import React from 'react'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const naviagte = useNavigate()
  const handleNavigate = () => {
    naviagte('/home')
  }
  return (
    <div className='container mt-5'>
      <div className="header row mt-3">
        <div className="col-5">

          <h1 className=''>Welcome to <span className='text-warning' >Media Player</span></h1>
          <p style={{ textAlign: 'justify' }} className='mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, ad consequuntur, modi nobis in libero cupiditate, laborum nostrum adipisci labore quae perferendis rerum saepe voluptas. Quis ipsum deleniti expedita eius.</p>

          <button onClick={handleNavigate} className='btn btn-info mt-5' >Get Started</button>
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <img width={"100%"} src="https://imgs.search.brave.com/SV50TqFlpCE4arpOmiNjeE03T-pvN9eaKcql4lt7Ye4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9iZXN0/YW5pbWF0aW9ucy5j/b20vbWVkaWEvdmlu/eWwvOTkxODI0Mjky/dmludGFnZS1yZWNv/cmQtcGxheWVyLXBs/YXlpbmctbXVzaWMt/YW5pbWF0ZWQtZ2lm/LTUuZ2lm.gif" alt="langingImage" />
        </div>
      </div>
      <div className="features">
        <h3 className='text-center m-5'>Features</h3>
        <div className='d-flex'>
          <div className="col-lg-4 d-flex justify-content-center ">

            <div class="card" style={{width:"18rem",
          height:"430px"
          }}>
              <img width={"100"} src="https://imgs.search.brave.com/vZ3aEGDXC3-ZXbf07WAT53DzNJV0LRuPwgFcxldxMyk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/RDJHTFlRNXJ3Q01B/QUFBTS9zZXR0aW5n/LXNldHRpbmdzLmdp/Zg.gif" class="card-img-top" alt="..." />
              <div class="card-body">
              <h5>categorize videos</h5>
                <p class="card-text">User can upload, view and remove the videos</p>
              </div>
            </div>
          </div>


          <div className="col-lg-4 d-flex justify-content-center ">
            
            <div class="card" style={{width:"18rem",
          height:"430px"}}>
              <img  width={"100"} src="https://imgs.search.brave.com/0l6QuCZrMCP4L09mdwDCqqkq-0hCIMTs6Yu8mjk4R4c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTAuZ2lwaHkuY29t/L21lZGlhL2JyNnM4/dGI0U0poWlR1ZTBK/aS9naXBoeS5naWY_/Y2lkPTc5MGI3NjEx/OWY2YWpyZTZnZDJy/eDYwZWRncmUxaDA0/amZoMmlkNDlydzht/cmN4dyZlcD12MV9n/aWZzX3NlYXJjaCZy/aWQ9Z2lwaHkuZ2lm/JmN0PWc.jpeg" class="card-img-top" alt="..." />
              <div class="card-body">
              <h5>Manageing Videos</h5>
                <p class="card-text">user can categorise the videos according to their performance using drag and drop features</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-flex justify-content-center ">
            
            <div class="card" style={{width: "18rem", height:"430px"}}>
              <img width={"100"} src="https://imgs.search.brave.com/mc3pBLgPPszO_C6uXDjxy248rh7pkug47hCKvVmi7CU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTAuZ2lwaHkuY29t/L21lZGlhL3YxLlky/bGtQVGM1TUdJM05q/RXhPV1kyWVdweVpU/Wm5aREp5ZURZd1pX/Um5jbVV4YURBMGFt/Wm9NbWxrTkRseWR6/aHRjbU40ZHlabGNE/MTJNVjluYVdaelgz/TmxZWEpqYUNaamRE/MW4vaUZuMDhzZGhh/dXJVZnc4VUpwL2dp/cGh5LmdpZg.gif" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5>Watch History</h5>
                <p class="card-text">user are able to see the history of watched videos</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="video row mt-3 border rounded">
<div className="col-lg-5 p-5">

<h3 className='text-warning mb-5'> Simple, Fast and powerfull</h3>
<p style={{textAlign:"justify"}}> <h5>Play Everything:</h5> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ipsum quibusdam autem nam ut numquam, nobis aliquid quos aperiam dolore, suscipit amet alias, nesciunt veritatis. Voluptatum in ad nostrum ratione. </p>
<p style={{textAlign:"justify"}}> <h5>Categorize Videos:</h5> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ipsum quibusdam autem nam ut numquam, nobis aliquid quos aperiam dolore, suscipit amet alias, nesciunt veritatis. Voluptatum in ad nostrum ratione. </p>
<p style={{textAlign:"justify"}}> <h5>Watch History:</h5> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ipsum quibusdam autem nam ut numquam, nobis aliquid quos aperiam dolore, suscipit amet alias, nesciunt veritatis. Voluptatum in ad nostrum ratione. </p>
</div><div className="col-lg-6 d-flex justify-content-center align-items-center">
<iframe width="660" height="515" src="https://www.youtube.com/embed/3wDiqlTNlfQ?si=Z1KyR9P0V6oYS_sk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
      </div>

    </div>

  )
}

export default Landing
