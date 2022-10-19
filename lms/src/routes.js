import React from 'react'

//ADMIN MODULE

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//Students

const StudentList = React.lazy(() => import('./views/students/StudentList'))
const AddStudent = React.lazy(() => import('./views/students/AddStudent'))
const EditDepartment = React.lazy(() => import('./views/department/EditDepartment'))

const SubjectList = React.lazy(() => import('./views/subject/SubjectList'))
const AddSubject = React.lazy(() => import('./views/subject/AddSubject'))
const SubjectDetails = React.lazy(() => import('./views/subject/SubjectDetails'))
const EditSubject = React.lazy(() => import('./views/subject/EditSubject'))

const Departments = React.lazy(() => import('./views/department/Department'))
const AddDepartment = React.lazy(() => import('./views/department/AddDepartment'))

//professor imports
const AddProfessor = React.lazy(() => import('./views/professor/AddProfessor'))
const ProfessorList = React.lazy(() => import('./views/professor/ProfessorList'))
const EditProfessor = React.lazy(() => import('./views/professor/EditProfessor'))
const ProfessorDetails = React.lazy(() => import('./views/professor/ProfessorDetails'))

//FACULTY MODULE
const FacultyDashboard = React.lazy(() => import('./views/faculty/FacultyDashboard'))
const FacultyProfile = React.lazy(() => import('./views/faculty/FacultyProfile'))
const AttendanceSheet = React.lazy(() => import('./views/faculty/AttendanceSheet'))
const GradingSheet = React.lazy(() => import('./views/faculty/GradingSheet'))
const EditFacultyProfile = React.lazy(() => import('./views/faculty/EditFacultyProfile'))
const FacultySchedule = React.lazy(() => import('./views/faculty/FacultySchedule'))
const ClassCard = React.lazy(() => import('./views/faculty/ClassCard'))

//STUDENT MODULE
const StudentDashboard = React.lazy(() => import('./views/students/StudentDashboard'))
const StudentProfile = React.lazy(() => import('./views/students/StudentProfile'))
const StudentSubject = React.lazy(() => import('./views/students/StudentSubjectsPage'))
const StudentGrades = React.lazy(() => import('./views/students/StudentGradesPage'))
const EnrollSubjects = React.lazy(() => import('./views/students/EnrollSubjectsPage'))
const StudentDetails = React.lazy(() => import('./views/students/StudentDetails'))
const EditStudent = React.lazy(() => import('./views/students/EditStudent'))

export const routes = [
  //LANDING PAGE
  { path: '/', exact: true, name: 'Home' },

  //ADMIN MODULE
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/students', name: 'ABC Students', element: StudentList },
  { path: '/student/add', name: 'Student Add', element: AddStudent },
  { path: '/student/details/:id', name: 'Student Details', element: StudentDetails },
  { path: '/student/edit/:id', name: 'Student details', element: EditStudent },

  { path: '/subjects', name: 'Subjects', element: SubjectList },
  { path: '/subject/add', name: 'Add Subject', element: AddSubject },
  { path: '/subject/details/:id', name: 'Subject Details', element: SubjectDetails },
  { path: '/subject/edit/:id', name: 'Edit Subject', element: EditSubject },

  { path: '/departments', name: 'Department', element: Departments },
  { path: '/department/add', name: 'Add Department', element: AddDepartment },
  { path: '/department/edit/:id', name: 'Edit Department', element: EditDepartment },

  { path: '/professor/add', name: 'Add Professor', element: AddProfessor },
  { path: '/professors', name: 'Professors', element: ProfessorList },
  { path: '/professor/:id', name: 'Professors', element: ProfessorDetails },
  { path: '/professor/edit/:id', name: 'Professors', element: EditProfessor },

  //FACULTY MODULE
  { path: '/faculty/dashboard', name: 'Dashboard', element: FacultyDashboard },
  { path: '/faculty/profile', name: 'Profile', element: FacultyProfile },
  { path: '/faculty/profile/edit', name: 'Edit Profile', element: EditFacultyProfile },
  { path: '/faculty/class-schedule', name: 'Class Schedule', element: FacultySchedule },
  { path: '/faculty/attendance-monitoring', name: 'Attendance', element: AttendanceSheet },
  { path: '/faculty/students-grades', name: 'Grades', element: GradingSheet },
  { path: '/faculty/students-grades/id', name: 'Class Card', element: ClassCard },

  //STUDENT MODULE
  { path: '/student/dashboard', name: 'Student Dashboard', element: StudentDashboard },
  { path: '/student/profile', name: 'Student Profile', element: StudentProfile },
  { path: '/student/subjects', name: 'My Subjects', element: StudentSubject },
  { path: '/student/grades', name: 'Grades', element: StudentGrades },
  { path: '/student/enroll', name: 'Enroll Subjects', element: EnrollSubjects },
]
