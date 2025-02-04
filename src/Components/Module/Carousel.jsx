import React from 'react'
import { Carousel } from 'react-bootstrap'

const Carousel = () => {
  return (
    <>

    <Carousel>
    <Carousel.Item>
      <img className="d-block w-100"src={process.env.PUBLIC_URL + '/logo1.jpg'} alt="First silde" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>I am mansi</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img className="d-block w-100"src={process.env.PUBLIC_URL + '/logo2.jpeg'} alt="Second silde" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>I an currently learning React</p>
      </Carousel.Caption>
    </Carousel.Item>

    
    <Carousel.Item>
      <img className="d-block w-100"src={process.env.PUBLIC_URL + '/logo192.png'} alt="Third silde" />
      <Carousel.Caption>
        <h3>International Len Den</h3>
        <p>This is my E-commere page</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</>  )
}

export default Carousel