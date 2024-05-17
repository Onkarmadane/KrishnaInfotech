import React from 'react'
import './Intro.css';

const Intro = () => {
   const introduction = ['Krishna Infotech is an Information Technology company located in Badlapur servicing more than 700+ satisfied clients all over Mumbai & Maharashtra Krishna Infotech is the leading provider of Security & I.T. solutions in the Mumbai with the best of breed technologies such as Hewlett Packard, D-Link and Microsoft, we employ best practices developed over Eight years of service. We are extremely committed to delivering quality advice, sales and support to assist our clients to achieve the maximum from their I.T. investment.']
  return (
    <>
    <p className='w-75 mx-auto text-justify p-1' data-aos="fade-up"
     data-aos-duration="1000">{introduction}</p>
    <hr className='w-75 mx-auto' data-scroll data-scroll-speed="4" data-scroll-direction="horizontal"/>
    </>
  )
}

export default Intro