import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './component/home';
import About from './component/about';
import Products from './component/products';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

class App extends Component {
  render() {
    return (
      <Router>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="App">
          <div className='topnav'>
            <ul className='topnav_table'>
              <li className='logo'>
                <a href='/'><img src={require('./Images/logo.png')} height="20" width="20" /></a>
              </li>
              <li>
                <Link to="/about" class="btn btn-outline-info"> About Us</Link>
              </li>
              <li>
                <Link to="/products" class="btn btn-outline-info">Products</Link>
              </li>
              <li>
                <Link to="/" class="btn btn-outline-info"> <i class="fa fa-home"></i> Home</Link>
              </li>

            </ul>
          </div>
          
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/products' element={< Products />}></Route>
          </Routes>
          <div>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
              <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                {/*
                <div className='me-5 d-none d-lg-block'>
                  <span>Get connected with us on social networks:</span>
                </div>
                <div>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="twitter" />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="google" />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="instagram" />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="linkedin" />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="github" />
                  </a>
                </div>
                */}
              </section>

              <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                  <MDBRow className='mt-3'>
                    <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                      <h6 className='text-uppercase fw-bold mb-4'>
                        <MDBIcon icon="gem" className="me-3" />
                        XC.LLC
                      </h6>
                      <p>
                        This is something you can say about the company
                      </p>
                    </MDBCol>

                    <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                      <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                      <p>
                        <a href='products' className='text-reset'>
                          product1 link
                        </a>
                      </p>
                      <p>
                        <a href='products' className='text-reset'>
                          Could be product 2 link
                        </a>
                      </p>
                    </MDBCol>

                    <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                      <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                      <p>
                        <a href='#!' className='text-reset'>
                          Pricing
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                          Help
                        </a>
                      </p>
                    </MDBCol>

                    <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                      <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                      <p>
                        <MDBIcon icon="home" className="me-2" />
                        Utah, US
                      </p>
                      <p>
                        <MDBIcon icon="envelope" className="me-3" />
                        XC.LLC@outlook.com
                      </p>
                      <p>
                        <MDBIcon icon="phone" className="me-3" /> 
                        +1 111 111 1111
                      </p>
                      <p>
                        <MDBIcon icon="print" className="me-3" /> 
                        print number?
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </section>

              <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright:
                <a className='text-reset fw-bold' href='https://google.com/'>
                  XC.LLC.com
                </a>
              </div>
            </MDBFooter>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;