import React from 'react'
import { Link } from 'react-router-dom'

const ContactOverlay = () => {
    return (
        <div>
            <div>
                <div id="whatsapp">
                    <Link to="https://whatsform.com/hB7yNC" target="_blank" id="toggle1" className="whatsapp">
                    <i className="fa fa-whatsapp fa-lg"></i>
                    </Link>
                </div>
                <div id="gmail">
                    <Link to="https://forms.gle/y6U76DMDySgs6LGr5" target="_blank" id="toggle2" className="gmail">
                        <i className="fa fa-envelope fa-lg"></i>
                    </Link>
                    <div id="phn">

                        <Link to="tel:+918419989089" id="toggle2" className="phn">
                            <i className="fa fa-phone fa-lg"></i>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactOverlay