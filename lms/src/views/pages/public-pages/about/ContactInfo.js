import React from 'react'
import Header from 'src/components/header/Header'
import banner from 'src/assets/images/unilane.jfif'
import 'src/scss/_public.scss'
import { AppFooter } from 'src/components'

const ContactInfo = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 m-3 contact-banner">
          <div className="col">
            <img src={banner} alt="contact-us" className="contact-img"></img>
          </div>
          <div className="col ">
            <div className="container-fluid contact-info">
              <div className="container about-header py-4">CONTACT INFORMATION</div>
              <div className="contact-title py-2"> ABC University Main Campus </div>
              <div>
                <span className="fw-bold py-2">Adress:</span> 3 Humabon Place, Makati City 1232 PH
              </div>
              <div>
                <span className="fw-bold py-2">Hotline:</span> (02) 8656-0654 / 88443225
              </div>
              <div>
                <span className="fw-bold py-2">Mobile:</span> 0945 416 5812 / 0921 861 9122
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  )
}

export default ContactInfo
