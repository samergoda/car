import React, { useEffect } from 'react';
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import {  Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';
import './Home.css';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee ,faCar,faCarSide,faSeedling,faPumpMedical,faCarTunnel } from '@fortawesome/free-solid-svg-icons';
function Home() {
  useEffect(() => {

    new Glide('.glide', { perView: 2, breakpoints: Breakpoints }).mount();
  }, []);

  return (
    <>
      <div className='hero'>
        {/* <img src="/images/IMG-20240202-WA0020.jpg" alt="home" className="w-100 hero" /> */}
      <div className='vh-100 d-flex flex-column container justify-content-center align-items-start'>
        <h1 className='fs-1 fw-bold'>Jet Care</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, <br/> cupiditate tempore dolorem perspiciatis at ipsam autem esse?</p>
        <Button className='btn'>Shop Now</Button>
      </div>
      
      </div>
<div className='container'>
  <h2 className='text-center'>Shop Best Sellers</h2>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <img src="/images/IMG-20240202-WA0009.jpg" alt="home" className="w-100" />
            </li>
            <li className="glide__slide">
              <img src="/images/IMG-20240202-WA0010.jpg" alt="home" className="w-100" />
            </li>
            <li className="glide__slide">
              <img src="/images/IMG-20240202-WA0021.jpg" alt="home" className="w-100" />
            </li>
            <li className="glide__slide">
              <img src="/images/IMG-20240202-WA0024.jpg" alt="home" className="w-100" />
            </li>
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
            prev
          </button>
          <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
            next
          </button>
        </div>



        <div className="glide__bullets" data-glide-el="controls[nav]">
    <button className="glide__bullet" data-glide-dir="=0"></button>
    <button className="glide__bullet" data-glide-dir="=1"></button>
    <button className="glide__bullet" data-glide-dir="=2"></button>
  </div>
      </div>
     



      {/* accordion */}
      <h2 className='text-center'>FAQs</h2>
      <Accordion defaultActiveKey="0" flush className='mt-5'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>











    <div>
      <h2 className='text-center mt-5 mb-5'>Why Jet Care</h2>
      <div className='row'>
        <div className='col-md-4'>
        <FontAwesomeIcon icon={faCoffee} />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eum!</p>
          <FontAwesomeIcon icon={faCar} />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eum!</p>
          <FontAwesomeIcon icon={ faCarSide} />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eum!</p>
          <FontAwesomeIcon icon={ faCarTunnel} />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eum!</p>
        </div>
        <div className='col-md-4 text-center'><img src="/images/IMG-20240202-WA0011.jpg" className='w-50 text-center' alt="img" /></div>
        <div className='col-md-4'>
        <FontAwesomeIcon icon={ faSeedling} />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eum!</p>
          <FontAwesomeIcon icon={ faPumpMedical} />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eum!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eum!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eum!</p></div>
      </div>


    </div>
    </div>
    </>
  );
}

export default Home;
