import React from 'react'
import Header from 'src/components/header/Header'
import 'src/scss/_public.scss'

const CampusLife = () => {
  return (
    <>
      <Header />
      <div className="container ">
        <div className="row">
          <div className="card unborder my-4">
            <ul className="list-group-flush">
              <li className="list-group-item campus-header nobullet pb-3 ">
                &quot; Feel welcome and safe in a community that is open to people of different
                backgrounds. &quot;
              </li>
              <li className="list-group-item">
                <p className="pb-1 ptext">
                  An Atanasoff-Berry education is a twofold package: an enriching of the mind and a
                  molding of a character. Some of the most impactful lessons you&apos;ll learn will
                  happen among friends, at unplanned hours, at unexpected places.
                </p>

                <p className="pb-1 ptext">
                  With various clubs and organizations, there is an experience for everyone.
                  Diversity and openness is part of what makes the ABC community unique and alive,
                  and we are always working to improve and become more inclusive and safe for
                  everyone.
                </p>

                <p className="pb-1 ptext">
                  Discover where your passions lie, and make your time at ABC more fun. If a club or
                  activity you&apos;re seeking doesn&apos;t exist, create it. After all, part of
                  exploration is invention.
                </p>
              </li>
              <li className="list-group-item">
                <div className="campus-title py-3">STUDENT LIFE DEVELOPMENT</div>

                <div>This unit undertakes the following:</div>
                <div>
                  <ul>
                    <li>
                      <span className="px-3 bullet">•</span>
                      Accreditation of student clubs and organizations per school year;
                    </li>
                    <li>
                      <span className="px-3 bullet">•</span>
                      Monitoring of activities and projects of the different accredited student
                      organizations, college student councils and the supreme student council;
                    </li>
                    <li>
                      <span className="px-3 bullet">•</span>
                      Implementation of the Rules and Regulations Governing Organized Student
                      Activities and Rules on Discipline;
                    </li>
                    <li>
                      <span className="px-3 bullet">•</span>
                      Recommendation of University-wide activities geared towards the wholesome
                      development of the student-mentally, physically, emotionally, spiritually and
                      morally.
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-group-item campus-title mt-2 py-3">STUDENT PRIVILEGES</li>
              <li className="list-group-item">
                <div className="list-subtitle py-3">SCHOLARSHIPS/EDUCATIONAL GRANTS</div>
                <p>
                  The Office of Student Affairs is in charge of the different scholarship and
                  educational grants offered to students either by the university, the national
                  government or by any interested individual, group of persons or company.{' '}
                </p>
                <p>
                  As may be required by the Memorandum of Agreement between the grantor and the
                  university through the Office of Student Affairs, the faculty-in-charge for
                  Scholarship may conduct the screening of interested students wishing to avail of
                  the scholarship grant. Likewise, OSA also undertakes processing of papers.{' '}
                </p>

                <p>
                  Scholarship and educational grants that are being offered by the university are
                  categorized into the following:
                  <ul>
                    <li>
                      <span className="bullet">•</span>&emsp; Institutionally funded grants, which
                      include: Academic scholars, Philippine Artisan staffers, Physical Education
                      grants (i.e. University athletes and Kalinangan Dance Troupe) and Grants as
                      per Board Resolutions
                    </li>
                    <li>
                      {' '}
                      <span className="bullet">•</span>&emsp; Privately-funded grants
                    </li>
                    <li>
                      <span className="bullet">•</span>&emsp; Government-funded grants, which
                      include: Study Now Pay Later Plan, State Scholarship Program, Armed Forces of
                      the Philippines, Clark PAF Educational Fund, Baranggay Grant/Sangunniang
                      Kabataan, Department of Science and Technology, and ABC-PASUC{' '}
                    </li>
                  </ul>
                </p>
              </li>
              <li className="list-group-item">
                <div className="list-subtitle py-3">STUDENT GROUP INSURANCE</div>
                <p>
                  {' '}
                  All students wishing to avail of the student group accident insurance may avail of
                  such from the Faculty-in-charge of Ancillary Services. However, students enrolled
                  in the On-the-Job Training and/or Supervised Industrial Training Program is
                  required to have the student group insurance. Any student who meets an accident
                  during the affectivity of the one-year insurance plan will be reimbursed of the
                  incurred expenses in accordance with the guidance set forth in the insurance plan.{' '}
                </p>

                <div className="fw-bold">
                  How to Apply for Student Group Insurance (for OJT/SIT students):
                </div>
                <div>1.&emsp; Present the current registration form for S.I.T. </div>
                <div>2.&emsp; Pay the required amount for insurance.</div>
                <div>
                  3.&emsp; Sign in the official logbook for insured students and claim insurance
                  stub.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default CampusLife
