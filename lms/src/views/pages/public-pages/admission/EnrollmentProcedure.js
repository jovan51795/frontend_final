import React from 'react'
import { AppFooter } from 'src/components'
import Header from 'src/components/header/Header'
import 'src/scss/_public.scss'

const EnrollmentProcedure = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="about-header py-4">ENROLLMENT PROCEDURE FOR FRESHMEN STUDENTS</div>
          <ol className="list-group-numbered unborder">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Secure Notice of Admission from the Office of the Admissions upon presentation of
                  the following documents:
                </div>
                <ul className=" list-group-flush">
                  <li className="list-group-item">
                    High School Card (Form 138) and Transcript of Records for transferees (Original)
                  </li>
                  <li className="list-group-item">
                    Certificate of Good Moral Character (Original)
                  </li>
                  <li className="list-group-item">Test Permit</li>
                </ul>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Report to the University Clinic and secure Medical Certificate.
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Proceed to your course adviser for enlistment.</div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Students availing scholarship, report to the Office of Student Affairs for
                  scholarship notation.
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Proceed to the Accounting Office for assessment and secure registration form.
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Pay the assessed fees at the Cashier&apos;s Office.</div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  With your Registration Form, present original requirements stated in Step #1 to
                  the Registrar&apos;s Office for confirmation.
                </div>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Proceed to the Office of Student Affairs for Identification (ID) Card processing.
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <AppFooter />
    </>
  )
}

export default EnrollmentProcedure
