import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//Admin Module
const StudentList = React.lazy(() => import('./views/students/StudentList'))
const AddStudent = React.lazy(() => import('./views/students/AddStudent'))
const EditDepartment = React.lazy(() => import('./views/department/EditDepartment'))

//LANDING HEADER ROUTES
//About
const About = React.lazy(() => import('./views/about/About'))
const ContactInfo = React.lazy(() => import('./views/about/ContactInfo'))
//Admission
const AdminProcedure = React.lazy(() => import('./views/admission/AdminProcedure'))
const EnrollmentProcedure = React.lazy(() => import('./views/admission/EnrollmentProcedure'))
const EstTuition = React.lazy(() => import('./views/admission/EstTuition'))
//Campus Life
const CampusLife = React.lazy(() => import('./views/campus-life/CampusLife'))

//Students

const SubjectList = React.lazy(() => import('./views/subject/SubjectList'))
const AddSubject = React.lazy(() => import('./views/subject/AddSubject'))
const SubjectDetails = React.lazy(() => import('./views/subject/SubjectDetails'))
const EditSubject = React.lazy(() => import('./views/subject/EditSubject'))

const Departments = React.lazy(() => import('./views/department/Department'))
const AddDepartment = React.lazy(() => import('./views/department/AddDepartment'))

//Faculty
const FacultyDashboard = React.lazy(() => import('./views/faculty/FacultyDashboard'))
const FacultyProfile = React.lazy(() => import('./views/faculty/FacultyProfile'))
const AttendanceSheet = React.lazy(() => import('./views/faculty/AttendanceSheet'))
const GradingSheet = React.lazy(() => import('./views/faculty/GradingSheet'))
const EditFacultyProfile = React.lazy(() => import('src/components/faculty/EditFacultyProfile'))
const ClassCard = React.lazy(() => import('./views/faculty/ClassCard'))

//Student Module
const StudentDashboard = React.lazy(() => import('./views/students/StudentDashboard'))
const StudentProfile = React.lazy(() => import('./views/students/StudentProfile'))
const StudentSubject = React.lazy(() => import('./views/students/StudentSubjectsPage'))
const StudentGrades = React.lazy(() => import('./views/students/StudentGradesPage'))
const EnrollSubjects = React.lazy(() => import('./views/students/EnrollSubjectsPage'))
const StudentDetails = React.lazy(() => import('./views/students/StudentDetails'))
const EditStudent = React.lazy(() => import('./views/students/EditStudent'))

//professor imports
const AddProfessor = React.lazy(() => import('./views/professor/AddProfessor'))
const ProfessorList = React.lazy(() => import('./views/professor/ProfessorList'))
const EditProfessor = React.lazy(() => import('./views/professor/EditProfessor'))
const ProfessorDetails = React.lazy(() => import('./views/professor/ProfessorDetails'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/about/vision-mission-core-values-strategic-goals', name: 'About ABC', element: About },
  { path: '/about/contact-us', name: 'Contact Info', element: ContactInfo },

  { path: '/admission/admission-procedures', name: 'Admission Procedure', element: AdminProcedure },
  {
    path: '/admission/enrollment-procedure',
    name: 'Enrollment Procedure',
    element: EnrollmentProcedure,
  },
  { path: '/admission/estimated-tuition-fees', name: 'Estimated Tuition', element: EstTuition },

  { path: '/campus-life', name: 'Campus Life', element: CampusLife },

  { path: '/students', name: 'Students', element: StudentList },
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

  //Faculty
  { path: '/faculty/dashboard', name: 'Dashboard', element: FacultyDashboard },
  { path: '/faculty/profile', name: 'Profile', element: FacultyProfile },
  { path: '/faculty/profile/edit', name: 'Edit Profile', element: EditFacultyProfile },
  { path: '/faculty/attendance-monitoring', name: 'Attendance', element: AttendanceSheet },
  { path: '/faculty/grades-monitoring', name: 'Grades', element: GradingSheet },
  { path: '/faculty/grades-monitoring/id', name: 'Class Card', element: ClassCard },

  //professor
  { path: '/professor/add', name: 'Add Professor', element: AddProfessor },
  { path: '/professors', name: 'Professors', element: ProfessorList },
  { path: '/professor/:id', name: 'Professors', element: ProfessorDetails },
  { path: '/professor/edit/:id', name: 'Professors', element: EditProfessor },

  //Student Module
  { path: '/student/dashboard', name: 'Student Dashboard', element: StudentDashboard },
  { path: '/student/profile', name: 'Student Profile', element: StudentProfile },
  { path: '/student/subjects', name: 'My Subjects', element: StudentSubject },
  { path: '/student/grades', name: 'Grades', element: StudentGrades },
  { path: '/student/enroll', name: 'Enroll Subjects', element: EnrollSubjects },
]

export default routes
