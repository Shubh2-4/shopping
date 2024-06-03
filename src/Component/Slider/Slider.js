import Carousel from 'react-bootstrap/Carousel';
import img1 from './Images/1.jpg';
import img2 from './Images/2.jpg';
import img3 from './Images/3.jpg';
import { Container } from 'react-bootstrap';
import './Slider.css';

function Slider() {
  return (
    <>
    <Carousel data-bs-theme="dark" className='my-5 slider'>
      <Carousel.Item className='shadow-lg'>
        <img
          className="d-block img-thumbnail"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-thumbnail"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img-thumbnail"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
    </>
  
  );
}

export default Slider;