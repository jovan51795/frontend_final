import http from './http'

export const getDashboardReports = () => {
  return http.get('/dashboard/dashboardreports')
}
