import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { store1 } from './ShirtStore';
import './Cardgallery.css';
import { Link } from 'react-router-dom';

function Cardgallery() {
    return (
        <>
            <Container className="mt-0">
                <h1 className='fw-bolder text-decoration-underline'>Categories</h1>
                <span className=''></span>
                <div className='d-flex justify-content-between flex-wrap'>
                    {store1.map((item) => {
                        return (
                            <Card style={{ width: '17rem' }} key={item.id} className='shadow-lg mt-5'>
                                <Card.Img variant="top" src={item.product_img} style={{ height: '300px' }} className='img-thumbnail' />
                                <Card.Body>
                                    <Card.Title>{item.product_name}</Card.Title>
                                    <Card.Text>
                                        {item.text}
                                    </Card.Text>
                                    <p>{item.stars}</p>
                                    <Link to={item.pathName}><Button variant="primary">{item.btn_name}</Button></Link>
                                </Card.Body>
                            </Card>
                        )
                    })}
                    </div>

            </Container>
        </>
    );
}

export default Cardgallery;