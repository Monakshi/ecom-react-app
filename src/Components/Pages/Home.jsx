import React from 'react'
import { Carousel } from 'react-bootstrap'



const Home = () => {
  return (
<>
    <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" height="600px" width="500px"src={process.env.PUBLIC_URL + '/logo1.jpg'} alt="First silde" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>I am mansi</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img className="d-block w-100"height="600px" width="500px"src={process.env.PUBLIC_URL + '/logo2.jpg'} alt="Second silde" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>I an currently learning React</p>
      </Carousel.Caption>
    </Carousel.Item>

    
    <Carousel.Item>
      <img className="d-block w-100" height="600px" width="500px"src={process.env.PUBLIC_URL + '/logo3.jpg'} alt="Third silde" />
      <Carousel.Caption>
        <h3>International Len Den</h3>
        <p>This is my E-commere page</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

    
    </>
  )
}

export default Home