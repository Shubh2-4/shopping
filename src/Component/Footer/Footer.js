import React from 'react'
import './Footer.css';
import img22 from './22.png';

export default function Footer() {
  return (
    <div>
      {/* <div className='container-fluid mt-5'>
            <div className='bg-dark text-light w-100 h-auto'>
                <h1></h1>
            </div>
        </div> */}


      <footer class="footer-section">
        <div class="container mt-5">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Find us</h4>
                    <span>H.No - 3/2520 Janak Nagar, Saharanpur</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Call us</h4>
                    <span> <a href={`tel:${+91-7895240724}`}></a></span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <span>shubhamdhiman194@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <a href="index.html"><img src={img22} class="img-fluid bg-white" alt="logo"/></a>
                  </div>
                  <div class="footer-text">
                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                      elit,Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div class="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                    <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                    <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">services</a></li>
                    <li><a href="#">portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Expert Team</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Latest News</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div class="footer-text mb-25">
                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                  </div>
                  <div class="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address"/>
                        <button><i class="fab fa-telegram-plane"></i></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>Copyright &copy; 2024, All Right Reserved <a href="#">Shubham</a></p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Policy</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
