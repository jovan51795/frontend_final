import React from 'react'
import AdminProfileForm from 'src/components/admin/AdminProfileForm'
import * as userInfoService from 'src/services/userInfo'

const AdminProfile = () => {
  const admin = userInfoService.getUserInfo().object
  return (
    <div>
      <AdminProfileForm adminInfo={admin} />
    </div>
  )
}

export default AdminProfile
