import React from 'react'
import Header from 'src/components/header/Header'
import 'src/scss/_public.scss'

const EstTuition = () => {
  return (
    <>
      <Header />
      
      <div className="container ">
        <div className="row">
          <div className="card unborder my-4">
            <ul className="list-group-flush">
              <li className="list-group-item campus-header nobullet pb-3 ">
               Tuition fees and Miscellaneous 
              </li>
             
              <li className="list-group-item">
                <div className="campus-title py-3">Highlights</div>
                <div>
                  <ul>
                    <li>
                      <span className="px-3 bullet">•</span>
                      Type: Private College
                    </li>
                    <li>
                      <span className="px-3 bullet">•</span>
                      Entrance exam: Not required
                    </li>
                    <li>
                      <span className="px-3 bullet">•</span>
                      Term structure: Trimester
                    </li>
                    <li>
                      <span className="px-3 bullet">•</span>
                      School year: starts in October
                    </li>
                  </ul>
                </div>
              </li>
              
              <li className="list-group-item">
                <div className="list-subtitle py-3"> Tuition Fees</div>
                <p>
                  Bachelors degree: ₱ 40,000-51,000 per year
                </p>
              </li>
              <li className="list-group-item">
                <div className="list-subtitle py-3">Registration Fee</div>
                <p>
                   ₱ 250.00
                </p>
              </li>
              <li className="list-group-item">
                <div className="list-subtitle py-3"> Library Fee</div>
                <p>
                   ₱ 50.00
                </p>
              </li>
              <li className="list-group-item">
                <div className="list-subtitle py-3"> Identification Card (ID)</div>
                <p>
                   ₱ 100.00
                </p>
              </li>
              <li className="list-group-item">
                <div className="list-subtitle py-3"> Student Handbook</div>
                <p>
                   ₱ 50.00
                </p>
              </li>
              <li className="list-group-item">
                <div className="list-subtitle py-3"> Student Information System</div>
                <p>
                   ₱ 140.00
                </p>
              </li>
              <div className="list-subtitle py-3"> Other fees</div>
              <li className="list-group-item">
                  <div className="container">
                   
                    <p className="pb-4 ptext">
                      <p>
                        <span className="fw-bold">Diploma Fee</span> ₱ 450.00
                      </p>
                      <p>
                        <span className="fw-bold">Graduation Fee</span> ₱ 250.00
                      </p>
                      <p>
                        <span className="fw-bold">Transcript of Records</span> ₱ 600.00
                      </p>
                      <p>
                        {' '}
                        <span className="fw-bold">Completion Fee </span> ₱ 250.00
                        
                      </p>
                      <p>
                        <span className="fw-bold">Psychological Examination Fee</span> ₱ 900.00
                      </p>
                      <p>
                        <span className="fw-bold">Aptitude Test Fee (Entrance Scholar)</span> ₱ 50.00
                      </p>
                      <p>
                        <span className="fw-bold">Change of Subject </span> ₱ 250.00
                        
                      </p>
                      <p>
                        <span className="fw-bold">Change of Schedule  </span> ₱ 250.00
                      </p>
                    </p>
                  </div>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default EstTuition
