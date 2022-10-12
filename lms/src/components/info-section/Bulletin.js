import React from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'

const Bulletin = () => {
  return (
    <CCard>
      <CCardHeader className="bg-blue text-light">UNIVERSITY BULLETIN</CCardHeader>
      <CCardBody>
        <blockquote className="blockquote mb-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </CCardBody>
    </CCard>
  )
}

export default Bulletin
