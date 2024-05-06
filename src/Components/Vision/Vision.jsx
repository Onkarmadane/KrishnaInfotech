import React from 'react'
import visionImg from '../../../public/imgs/vision.webp'
import styles from './Vision.module.css'; 
const Vision = () => {
  const cardData = {
    path: { visionImg },
    title: 'Our Vision',
    text: 'Krishna Infotech focus is to provide a long term I.T. & Security partnerships with our clients. Most of our client relationships have been for at least five years, many much longer. These long term relationships allow us to understand our clients’ unique needs and requirements and provide a high level of service. We believe we can provide cost effective service & support allowing you to get the best from your I.T. & Security investment.'
  }
  return (

    <div>
      <h1 className='bolder mt-4'><b>Our Vision</b></h1>
    <div className="line"></div>
      <div className={`${styles.card} card mt-5 w-75 mx-auto`}>
        <img src={cardData.path.visionImg} className="card-img-top" alt="VisionImg" />
        <div className="card-body">
          <h5 className="card-title text-center">{cardData.title}</h5>
          <p className="card-text text-justify">{cardData.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Vision