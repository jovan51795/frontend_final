import React from 'react'
import { CContainer, CRow, CCol } from '@coreui/react'
import { data } from 'src/components/info-section/NewsCarouselData'
import 'src/scss/_public.scss'
import Header from 'src/components/header/Header'
import { AppFooter } from 'src/components'

const NewsPage = () => {
  return (
    <>
      <Header />
      <CContainer>
        <div className="about-header py-3">LATEST NEWS</div>
        <hr />
        {data.map((el, index) => (
          <div key={index}>
            <CRow>
              <CCol className="news-head py-4">{el.title}</CCol>
            </CRow>
            <CRow>
              <div className="container-fluid">
                <CCol className="d-flex justify-content-center">
                  <img src={el.image} className="news-image w-50 pb-4" />
                </CCol>
              </div>
            </CRow>
            <CRow>
              <CCol className="mx-5">
                <div className="container">
                  <p>{el.p1}</p>
                  <p>{el.p2}</p>
                  <p>{el.p3}</p>
                  <p>{el.p4}</p>
                  <p>{el.p5}</p>
                </div>
              </CCol>
            </CRow>
            <hr />

            {/* <CRow>
              <CCol sm style={{ backgroundColor: 'aquamarine' }}>
                1 of 3
              </CCol>
              <CCol sm style={{ backgroundColor: 'bisque' }}>
                2 of 3
              </CCol>
              <CCol sm style={{ backgroundColor: 'cadetblue' }}>
                3 of 3
              </CCol>
            </CRow> */}
          </div>
        ))}
      </CContainer>
      <AppFooter />
    </>
  )
}

export default NewsPage
