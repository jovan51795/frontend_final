import React from 'react'
import { AppFooter } from 'src/components'
import Header from 'src/components/header/Header'
import 'src/scss/_public.scss'

const AdminProcedure = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="about-header py-4">ADMISSION PROCEDURE</div>
          <div className="list-title py-3">STEPS ON ABC ADMISSIONS:</div>
          <ol className="list-group-numbered unborder">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Fill out online application form</div>
                Note: Use recent 2” x 2” picture on plain white background with name tag (Surname,
                Given Name, Middle Initial)
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Secure admission approval from the Office of Admissions.
                </div>
                <ul className=" list-group-flush">
                  <li className="list-group-item">Bring the following:</li>
                  <li className="list-group-item">
                    Evidence of Grades (i.e. Form 138 of Grade 11/1stsem. of Grade 12 or equivalent)
                  </li>
                  <li className="list-group-item">Application I.D. Number</li>
                </ul>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Bring your test permit printout, 2 sharpened pencils with eraser & 1 SHS ID, Take
                  the test on scheduled date/time and specified venue.
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Test result will be posted at ABC Bulletin</div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Report on the specified date for your interview and bring the following documents
                  for enrolment.
                </div>
                <ul className="list-group-flush">
                  <li className="list-group-item">Test permit.</li>
                  <li className="list-group-item">
                    Original copy of Form138/137 or Transcript of Records.
                  </li>
                  <li className="list-group-item">Certificate of Good Moral Character.</li>
                  <li className="list-group-item">
                    Photocopy of Philippine Statistics Authority (PSA) released Birth certificate.
                  </li>
                  <li className="list-group-item">
                    <b>
                      *Failure to report on the specified date will mean forfeiture of Admission
                      slot.*
                    </b>
                  </li>
                </ul>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Secure your Notice of Admissions and proceed to the University Clinic for medical
                  examination.
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Report to your respective course adviser for enrolment.
                </div>
              </div>
            </li>
          </ol>
          <div>
            Note: <b>*Enrolment will be on a FIRST COME FIRST SERVED basis.*</b>
          </div>
          <div className="pb-5">
            For more inquiries, call the Office of Admissions at Tel.# 5301-3042 or trunkline number
            5301-3001 local 603
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  )
}

export default AdminProcedure
