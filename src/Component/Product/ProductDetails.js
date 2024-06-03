import React, { useState } from 'react'
import './ProductDetails.css';
import { FaRupeeSign } from "react-icons/fa";
import { Button, Col, Container, Row } from 'react-bootstrap';


export default function ProductDetails() {
  const slides = [
    {
      id: 1,
      img: './assets/shirt/31.jpg',
    },
    {
      id: 2,
      img: './assets/shirt/32.jpg',
    },
    {
      id: 3,
      img: './assets/shirt/33.jpg',
    },
  ]

  let [image, setImage] = useState(slides[0].img)
  return (
    <div>
      <Container className='mt-5 shadow-lg p-5'>
        <Row className=''> 
          <Col className=''>

           
              {slides.map((item) => {
                return (
                  <div className='a2 mb-4'>
                    <img src={item.img} key={item.id} onClick={() => setImage(item.img)}></img>
              </div>
                )
              })}
              <div className='a3'>
                <img src={image} style={{ width: '300px', height: '300px', borderRadius: '20px' }} ></img>
              </div>

                 
              <div className='mt-5 d-flex justify-content-center a3'>
                    <Button variant="primary" className='me-4 px-5'>Buy Now</Button>
                    <Button variant="primary" className='px-5'>Add to Cart</Button>
                  </div>
          </Col>
          <Col>
            <h1>Men Printed Neck Polyester Green T-Shirt</h1>
            <h3 className='fs-3'><FaRupeeSign className='fs-3' />699 <span className='fs-6'><del><FaRupeeSign></FaRupeeSign>1,299</del></span><span className='text-success fs-4'> 46% off</span></h3>
            <p className='mt-3'>{Array(5).fill(
              <small className="fa fa-star text-primary mr-1 fs-4"></small>
            )}</p>

            <p>Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.</p>
            <p className='fs-3'>Available offers</p>
            <p><b className='fs-4'>Bank Offer:</b> Get ₹25* instant discount for the 1st Order using BOB UPI.</p>
          </Col>
        </Row>
      </Container>
    </div >
  )
}
