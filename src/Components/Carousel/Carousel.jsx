import React from 'react';
import { Link } from 'react-router-dom';
import slide_1 from '../../../public/imgs/A (1).webp';
import slide_2 from '../../../public/imgs/A (2).webp';
import slide_3 from '../../../public/imgs/A (3).webp';
import slide_4 from '../../../public/imgs/A (4).webp';
import './Carousel.css';


function Carousel() { // Rename your local component
  return (
    <>
<div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel" data-aos="fade-up">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide_1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={slide_2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={slide_3} className="d-block w-100" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src={slide_4} className="d-block w-100" alt="Slide 4" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  );
}

export default Carousel;