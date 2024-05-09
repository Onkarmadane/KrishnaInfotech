import React from 'react';
import './Footer.css';

const Footer = () => {
  // const [footerData, setfooterData] = useState()
  const footerData = ["Krishna Infotech | © 2024 All Rights Reserved | GSTN :- 27AOAPM2539L1ZR"];
  return (
    <footer className="text-center text-black">
      <div className="text-center p-3">
        {footerData}
      </div>
    </footer>
  );
};

export default Footer;
