import React from 'react'
import styles from './CallNow.module.css'
import { Link } from 'react-router-dom';

const CallNow = () => {
    return (
        <div className="container text-center mt-5">
            
            <button id="callNowBtn" className={`btn mb-3 ${styles.button}`}>
            <Link to="tel:+918419989089" id="toggle2" className={`${styles.Link}`}>
                <i className="fa fa-phone fa-lg"></i> Call Now
            </Link>
            </button>
        </div>
    )
}

export default CallNow