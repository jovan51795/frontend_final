import React from 'react'
import { AppFooter } from 'src/components'
import Header from 'src/components/header/Header'
import 'src/scss/_public.scss'

const About = () => {
  return (
    <>
      <Header />
      <div className="row about">
        <div className="col-md-12">
          <div className="container py-3">
            <div className="about-title pb-2">About Atanasoff-Berry Computer University</div>
            <p>
              It all started when four visionaries conceptualized setting up a training center to
              fill very specific manpower needs.It was in the early ‘2000s when four entrepreneurs —
              J. Cabanatuan, M. Mirandilla, G. Miranda, and J. Ong — came together to set up
              Atanasoff-Berry Computer University (ABC University), a training center that delivers
              basic programming education to professionals and students who want to learn this new
              skill.
            </p>
            <p>
              It has emerged academically richer and stronger, accumulating layers of knowledge and
              experience that sustain its mission to provide education—the kind that meets stringent
              standards of quality yet affordable to those who have less. As ably pioneer in the
              field of IT education, it confidently and ably plays its role as an agent of personal
              as well as social transformation.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container about-header py-4">
          VISION, MISSION, CORE VALUES, STRATEGIC GOALS
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="container py-3">
            <div className="card aboutcard">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="container">
                    <div className="list-title py-3">VISSION</div>
                    <p className="pb-4 ptext">
                      Atanasoff-Berry Computer University will be the leader and dominant provider
                      of relevant globally recognized information technology-based education and
                      related services in the global market.
                    </p>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="container">
                    <div className="list-title py-3">MISSION</div>
                    <p className="pb-4 ptext">
                      Atanasoff-Berry Computer University shall provide a holistic, relevant,
                      quality and globally recognized IT-based education in all levels and
                      disciplines with the objective of producing professionals and leaders
                      responsive to the needs of Science and the international community cognizant
                      of the welfare and benefits of its men and women thereby realizing their
                      potential as productive members of the society for the honor and glory of God
                      Almighty.
                    </p>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="container">
                    <div className="list-title py-3">CORE VALUES</div>
                    <p className="pb-4 ptext">
                      <div className="list-subtitle py-2">Search for Excellence</div>
                      <p>
                        The highest standards of academic excellence and professionalism in service
                        are the hallmarks of Adamson University’s educative endeavors, thus,
                        programs in the University are regularly assessed and remodeled to ensure
                        efficacy and vigor in producing knowledgeable professionals who are expected
                        to manifest a strong sense of responsibility, competency, efficiency, and
                        professional conduct.
                      </p>
                      <div className="list-subtitle py-2">A Community of Belonging</div>
                      <p>
                        As a university founded to be a place where “…any person can find
                        instruction…,” we value diversity and inclusion, and we strive to be a
                        welcoming, caring, and equitable community where students, faculty, and
                        staff with different backgrounds, perspectives, abilities, and experiences
                        can learn, innovate, and work in an environment of respect, and feel
                        empowered to engage in any community conversation.
                      </p>
                      <div className="list-subtitle py-2"> Purposeful Discovery </div>
                      <p>
                        We value the process of discovery through learning, teaching, scholarship,
                        and innovation to advance the University’s mission, in all cases striving
                        with integrity for excellence and purpose. The search for and the
                        dissemination of knowledge are tightly linked: as A. D. White noted, “The
                        power of discovering truth and the power of imparting it are almost
                        invariably found together.”
                      </p>
                      <div className="list-subtitle py-2"> Solidarity </div>
                      <p>
                        The University believes education is a shared responsibility and a
                        collaborative effort where the gifts of brotherhood and sisterhood are
                        valued, a belief reflected in the institution’s community where
                        participation, teamwork, interdependence, communication, and dialogue
                        prevail; a. culture of appreciation that builds up the community,
                        encouraging it towards excellence and professionalism.
                      </p>
                      <div className="list-subtitle py-2"> Social Responsibility </div>
                      <p>
                        Education at Adamson University advocates for the development of a sense of
                        social responsibility - the mark of an authentic Christian faith. Social
                        responsibility leads to the empowerment of the marginalized sectors through
                        the permeation of knowledge and human development, thus, the University is
                        committed to work for the advancement of a society based on justice, peace,
                        and respect for human dignity and the integrity of creation. Sustained
                        Integral Development Education is a lifelong quest whose primary purpose is
                        the full and integral development of the human person, thus, the University
                        is committed to provide and develop programs for holistic development and
                        continuous learning through building partnerships with other educational
                        institutions, government agencies, industries, business, and other groups to
                        enhance the institution’s academic and professional capacit
                      </p>
                    </p>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="container">
                    <div className="list-title py-3">STRATEGIC GOALS</div>
                    <p className="pb-4 ptext">
                      <p>
                        <span className="fw-bold">Goal 1</span> - Quality & Responsive Curricular
                        Offerings
                      </p>
                      <p>
                        <span className="fw-bold">Goal 2</span> - Excellence in Engineering &
                        Technology Research
                      </p>
                      <p>
                        <span className="fw-bold">Goal 3</span> - Leadership in Community Services
                      </p>
                      <p>
                        {' '}
                        <span className="fw-bold">Goal 4</span> - Strengthening Capability &
                        Competence
                      </p>
                      <p>
                        <span className="fw-bold">Goal 5</span>- Modernized University System &
                        Efficient Management of Resources
                      </p>
                      <p>
                        <span className="fw-bold">Goal 6</span> - Increased Financial Viability
                      </p>
                      <p>
                        <span className="fw-bold">Goal 7</span> - Enhanced Network & Sustained
                        Collaboration Initiatives
                      </p>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  )
}

export default About
