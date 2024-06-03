import React, { useState } from 'react'
import { Button, Card, Container, Modal } from 'react-bootstrap'
import { jeans } from './StoreJeans'
import { FaRupeeSign } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Jeans = () => {

  return (
    <div>
      <Container className="mt-4">
        <h1 className='fw-bolder text-decoration-underline'>Jeans</h1>
      
        <div className='d-flex justify-content-between flex-wrap'>
          {jeans.map((item) => {
            return (
              <Link to="" className='text-decoration-none'><Card style={{ width: '17rem' }} key={item.id} className='shadow-lg mt-5'>
                <Card.Img variant="top" src={item.product_Img} style={{ height: '300px' }} className='img-thumbnail'/>
                <Card.Body className='lh-base'>
                  <Card.Title>{item.product_Name}</Card.Title>
                  <h3 className='fs-3'><FaRupeeSign className='fs-3'/>{item.price} <span className='fs-6'><del><FaRupeeSign></FaRupeeSign>3,999</del></span><span className='text-success fs-4'> 73% off</span></h3>
                  <Card.Text className='fs-4'>
                    {item.text}
                  </Card.Text>
                  <p className='fs-4'>{item.Stars}</p>
                  <p>{item.size}</p>
                  {/* <Button variant="primary">{item.btn_Buy}</Button>
                  <Button variant="primary" className="float-end">{item.btn_Add}</Button> */}
                </Card.Body>
              </Card></Link>
            )
          })}
          
        </div>
       

      </Container>
    </div>
  )
}

export default Jeans