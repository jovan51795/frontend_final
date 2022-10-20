import React from 'react'
import Header from 'src/components/header/Header'
import { AppFooter } from 'src/components'
import { getAllDepartmentWithSubject } from 'src/services/departmentService'
import { useState, useEffect } from 'react'
import 'src/scss/_public.scss'

const ProgramsPage = () => {
  const [departments, setDepartments] = useState([])
 useEffect(() => {
    getAllDepartmentWithSubject().then((res) => {
      setDepartments([...res.data.object])
      console.log(res.data)
      
    })
  }, [])
  console.log(departments);
  return (
    
    <>
      <Header />
    <div className="row about">
        <div className="col-md-12">
          
        </div>
      </div>
      <div className="row">
        <div className="container about-header py-4">
          Programs Offered
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="container py-3">
            <div className="card aboutcard">
           
              <ul className="list-group list-group-flush">
              {departments.map((department) => (
                <li key={department.department_id} className="list-group-item">
                  <div className="container">
                    <div className="list-title py-3">
                        {department.departmentName}
                    </div>
                      <p className="pb-4 ptext">
                      <ul>
                        {department.course.map((c) => (
                          <li key={c.courseId}>{c.courseTitle}</li>
                        ))}
                      </ul>
                    </p>
                  </div>
                </li>
                ))}
              </ul>
               
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
    
  )
}

export default ProgramsPage
