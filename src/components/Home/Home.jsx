import React, { useEffect } from 'react';
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';
import './Home.css';

function Home() {
  useEffect(() => {
    new Glide('.glide', { perView: 2, breakpoints: Breakpoints }).mount();
  }, []);

  return (
    <>
      <div>
        <img src="/images/IMG-20240202-WA0020.jpg" alt="home" className="w-100 hero" />
      </div>
<div className='container'>
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
      </div>
    </>
  );
}

export default Home;
