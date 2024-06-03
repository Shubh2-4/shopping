import React from 'react'
import { shirt } from './StoreShirt'
import { Button, Card, Container } from 'react-bootstrap'
import { FaRupeeSign } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Shirt() {
    return (
        <div>
            <Container className="mt-4">
                <h1 className='fw-bolder text-decoration-underline'>Shirt</h1>
                <span className=''></span>
                <div className='d-flex justify-content-between flex-wrap'>
                    {shirt.map((item) => {
                        return (
                            <Link to="/product" className='text-decoration-none'>
                                <Card style={{ width: '17rem' }} key={item.id} className='shadow-lg mt-5'>
                                    <Card.Img variant="top" src={item.product_Img} style={{ height: '300px' }} className='img-thumbnail' />
                                    <Card.Body>
                                        <Card.Title>{item.product_Name}</Card.Title>
                                        <h3 className='fs-3'><FaRupeeSign className='fs-3' />{item.price} <span className='fs-6'><del><FaRupeeSign></FaRupeeSign>1,299</del></span><span className='text-success fs-4'> 46% off</span></h3>
                                        <Card.Text className='fs-4'>
                                            {item.text}
                                        </Card.Text>
                                        <p className='fs-4'>{item.Stars}</p>
                                        <p>{item.size}</p>
                                        {/* <Button variant="primary">{item.btn_Buy}</Button>
                                    <Button variant="primary" className="float-end">{item.btn_Add}</Button> */}
                                    </Card.Body>
                                </Card>
                            </Link>
                        )
                    })}
                </div>

            </Container>
        </div>
    )
}
