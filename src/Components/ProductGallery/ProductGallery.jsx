import React from 'react';
import Img1 from '../../../public/imgs/Picture1.webp';
import Img2 from '../../../public/imgs/Picture2.webp';
import Img3 from '../../../public/imgs/Picture3.webp';
import Img4 from '../../../public/imgs/Picture4.webp';
import Img5 from '../../../public/imgs/Picture5.webp';
import '../../../src/index.css';

const ImageGallery = () => {
  return (
    <>
      <h1 className='bolder mt-4' data-aos="fade-up"><b>Our Products</b></h1>
      <div className="line" data-aos="fade-up"></div>
      <div className="image-gallery-container">
        <div className="image-gallery">
          <img src={Img1} alt="Product 1" className="gallery-image" />
          <img src={Img2} alt="Product 2" className="gallery-image" />
          <img src={Img3} alt="Product 3" className="gallery-image" />
          <img src={Img4} alt="Product 4" className="gallery-image" />
          <img src={Img5} alt="Product 5" className="gallery-image" />
          <img src={Img1} alt="Product 1" className="gallery-image" />
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
