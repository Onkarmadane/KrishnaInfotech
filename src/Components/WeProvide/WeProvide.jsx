import React from 'react';
import hackImg from '../../../public/imgs/hack.webp';
import serviceImg from '../../../public/imgs/customer-service.webp'
 import feedBackImg from '../../../public/imgs/good-feedback.webp';
 import './WeProvide.css';
// Reusable Card component
function Card({ imageSrc, title, text }) {
  return (
    <div className="card">
      <img className="card-img-top m-3 mx-auto" loading="lazy" src={imageSrc} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

// Wrapper component using the Card component
function CardGroup() {
  return (
    <>
    <h1 className='bolder mt-4'  data-aos="fade-up"><b>We Can Provide</b></h1>
    <div className="line"  data-aos="fade-up"></div>
    <div className="card-group w-75 mx-auto" data-aos="zoom-in">
      <Card
        imageSrc={hackImg}
        title="Expert IT and Security Solutions"
        text="Access to an experienced and well-resourced specialist I.T. and Security Solution and service team"
      />
      <Card
        imageSrc={serviceImg}
        title="Rapid Response IT Support"
        text="Our expert team offers immediate assistance via phone and remote services, ensuring your technical issues are resolved swiftly and efficiently."
      />
      <Card
        imageSrc={feedBackImg}
        title="Reliable Performance History"
        text="Trust in Our Proven and Established Track Record of Success. With years of demonstrated expertise, we consistently deliver results that exceed expectations, ensuring your satisfaction and peace of mind."
      />
    </div>
    </>
  );
}

export default CardGroup;
