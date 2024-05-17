import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ContactOverlay.module.css';

const ContactOverlay = () => {
    return (
        <div>
        <div>
          <div id="whatsapp" className={styles.whatsapp}> {/* Use className from CSS module */}
            <Link to="https://whatsform.com/hB7yNC" target="_blank" id="toggle1" className={styles.whatsapp}>
              <i className="fa fa-whatsapp fa-lg"></i>
            </Link>
          </div>
          <div id="gmail" className={styles.gmail}> {/* Use className from CSS module */}
            <Link to="https://forms.gle/y6U76DMDySgs6LGr5" target="_blank" id="toggle2" className={styles.gmail}>
              <i className="fa fa-envelope fa-lg"></i>
            </Link>
            <div id="phn" className={styles.phn}> {/* Use className from CSS module */}
              <Link to="tel:+918419989089" id="toggle2" className={styles.phn}>
                <i className="fa fa-phone fa-lg"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
   
    )
}

export default ContactOverlay