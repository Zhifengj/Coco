import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './component/home';
import About from './component/about';
import Products from './component/products';
import logo from './Images/logo.png'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
       <Router>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
           <div className="App">
            <div className='topnav'>
              <ul className='topnav_table'>
                <li className='logo'>
                  <a href='/'><img src={logo} height="20" width = "20" /></a>
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
          </div>
       </Router>
   );
  }
}
  
export default App;