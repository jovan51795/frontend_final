import http from './http'

export const updateAdmin = (data) => {
  return http.patch(`/updateadmin/${data.admin_id}`, data)
}
