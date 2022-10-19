import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import '../../scss/_newheader.scss'
import { FiLogOut } from 'react-icons/fi'
import noimage from 'src/assets/images/noimage.gif'
import { getUserInfo } from 'src/services/userInfo'

import { _navAdmin, _navFaculty, _navStudent, _navParent } from 'src/_navigation'

const Sidebar2 = ({ onLogout }) => {
  const [work, setWork] = useState()
  const [number, setNumber] = useState()
  const [navigation, setnavigation] = useState([])
  const userInFo = getUserInfo()
  const name = `${userInFo.object.firstName} ${userInFo.object.lastName}`

  useEffect(() => {
    if (userInFo && userInFo.object.type === 'student') {
      setWork('Student')
      setNumber(`Student No.: ${userInFo.object.studentNo}`)
      setnavigation(_navStudent)
    } else if (userInFo && userInFo.object.type === 'Admin') {
      setWork('Administrator')
      setNumber(`Admin ID.: ADMIN-0${userInFo.object.admin_id}`)
      setnavigation(_navAdmin)
    } else if (userInFo && userInFo.object.type === 'faculty') {
      setWork(userInFo.object.work)
      setNumber(`Faculty No.: ${userInFo.object.professorNo}`)
      setnavigation(_navFaculty)
    } else if (userInFo && userInFo.object.type === 'parent') {
      setWork('Parent')
      setNumber(`Parent No.: ${userInFo.object.parentNo}`)
      setnavigation(_navParent)
    }
  }, [userInFo])

  const showToastMessage = () => {
    toast.default('Goodbye for now !', {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  const handleClick = () => {
    onLogout()
    showToastMessage()
  }

  return (
    <div className="card-body text-center">
      <img src={noimage} alt="avatar" className="img-fluid" style={{ width: '150px' }} />
      <h5 className="my-3 maincolor">{name}</h5>
      <p className="text-dark mb-0">{work}</p>
      <hr className="hr" />
      <p className="text-dark mb-4">{number}</p>

      <div>
        <ul className="list-group list-group-flush rounded-3">
          {navigation.map((nav, index) => (
            <li className="list-group-item d-flex align-items-center transparent p-3" key={index}>
              {nav.icon}
              <div className="mb-0">
                <Link to={nav.link} className="link">
                  &nbsp;{nav.label}
                </Link>
              </div>
            </li>
          ))}
          <li className="list-group-item d-flex align-items-center transparent p-3">
            <FiLogOut className="nav-icon" />
            <div className="mb-0">
              <Link to="/" className="link" onClick={handleClick}>
                &nbsp;Logout
              </Link>
              <ToastContainer />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar2
