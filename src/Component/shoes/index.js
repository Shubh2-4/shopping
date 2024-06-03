import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { shoes } from './StoreShoes'
import { FaRupeeSign } from "react-icons/fa";

const Shoes = () => {
  return (
    <div>
      <Container className="mt-4">
        <h1 className='fw-bolder text-decoration-underline'>Jeans</h1>
        <span className=''></span>
        <div className='d-flex justify-content-between flex-wrap'>
          {shoes.map((item) => {
            return (
              <Card style={{ width: '17rem' }} key={item.id} className='shadow-lg mt-5'>
                <Card.Img variant="top" src={item.product_Img} style={{ height: '300px' }} className='img-thumbnail' />
                <Card.Body>
                  <Card.Title>{item.product_Name}</Card.Title>
                  <h3 className='fs-3'><FaRupeeSign className='fs-3' />{item.price} <span className='fs-6'><del><FaRupeeSign></FaRupeeSign>4,499</del></span><span className='text-success fs-4'> 53% off</span></h3>
                  <Card.Text className='fs-4'>
                    {item.text}
                  </Card.Text>
                  <p className='fs-4'>{item.Stars}</p>
                  <p>{item.size}</p>
                </Card.Body>
              </Card>
            )
          })}
        </div>

      </Container>
    </div>
  )
}

export default Shoes