import React from 'react'

//ADMIN MODULE

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const AdminProfile = React.lazy(() => import('./views/admin/AdminProfile'))

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
const FacultyClasses = React.lazy(() => import('./views/faculty/FacultyClasses'))
const AttendanceSheet = React.lazy(() => import('./views/faculty/AttendanceSheet'))
const AttendanceMonitoring = React.lazy(() => import('./views/faculty/AttendanceMonitoring'))
const GradingSheet = React.lazy(() => import('./views/faculty/GradingSheet'))
const EditFacultyProfile = React.lazy(() => import('./views/faculty/EditFacultyProfile'))
const FacultySchedule = React.lazy(() => import('./views/faculty/FacultySchedule'))

//STUDENT MODULE
const StudentDashboard = React.lazy(() => import('./views/students/StudentDashboard'))
const StudentProfile = React.lazy(() => import('./views/students/StudentProfile'))
const StudentSubject = React.lazy(() => import('./views/students/StudentSubjectsPage'))
const StudentGrades = React.lazy(() => import('./views/students/StudentGradesPage'))
const EnrollSubjects = React.lazy(() => import('./views/students/EnrollSubjectsPage'))
const StudentDetails = React.lazy(() => import('./views/students/StudentDetails'))
const EditStudent = React.lazy(() => import('./views/students/EditStudent'))
const StudentSchedule = React.lazy(() => import('./views/students/StudentSchedule'))
const StudentAttendance = React.lazy(() => import('./views/students/StudentAttendancePage'))
const StudentCourseEval = React.lazy(() => import('./views/students/StudentCourseEvalPage'))

//professor-subjects
const ProfessorSubjectList = React.lazy(() =>
  import('./views/professor/professor-subject/ProfessorSubjectList'),
)
const SubjectSchedule = React.lazy(() =>
  import('./views/professor/professor-subject/SubjectSchedule'),
)

//parent-module
const ParentDashboard = React.lazy(() => import('./views/parent/parentDashboard'))
const ParentChildProfile = React.lazy(() => import('./views/parent/parentChildProfilePage'))
const ParentChildSchedule = React.lazy(() => import('./views/parent/parentChildSchedulePage'))
const ParentChildGrade = React.lazy(() => import('./views/parent/parentChildGradePage'))
const ParentChildAttendance = React.lazy(() => import('./views/parent/parentChildAttendance'))

export const routes = [
  //LANDING PAGE
  { path: '/', exact: true, name: 'Home' },

  //ADMIN MODULE
  { path: '/admin/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/admin/profile', name: 'Profile', element: AdminProfile },
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

  //professor-subjects
  { path: '/professor/subjects/:id', name: 'Subjects', element: ProfessorSubjectList },
  {
    path: '/subject/:subject_id/professor/:professor_id',
    name: 'Subjects',
    element: SubjectSchedule,
  },

  //FACULTY MODULE
  { path: '/faculty/dashboard', name: 'Dashboard', element: FacultyDashboard },
  { path: '/faculty/profile', name: 'Profile', element: FacultyProfile },
  { path: '/faculty/profile/edit', name: 'Edit Profile', element: EditFacultyProfile },
  { path: '/faculty/classes', name: 'Class Subjects', element: FacultyClasses },
  { path: '/faculty/schedule', name: 'Class Schedule', element: FacultySchedule },
  {
    path: '/faculty/attendance/:subject_id',
    name: 'Class Schedule',
    element: AttendanceMonitoring,
  },
  {
    path: '/professor/attendance/subject/:subject_id/prof/:professor_id/student/:student_id',
    name: 'Attendance',
    element: AttendanceSheet,
  },
  {
    path: '/professor/grades/subject/:subject_id/prof/:professor_id/student/:student_id',
    name: 'Grades',
    element: GradingSheet,
  },

  //STUDENT MODULE
  { path: '/student/dashboard', name: 'Student Dashboard', element: StudentDashboard },
  { path: '/student/profile', name: 'Student Profile', element: StudentProfile },
  { path: '/student/subjects', name: 'My Subjects', element: StudentSubject },
  { path: '/student/grades', name: 'Grades', element: StudentGrades },
  { path: '/student/enroll', name: 'Enroll Subjects', element: EnrollSubjects },
  { path: '/student/schedule', name: 'My Schedule', element: StudentSchedule },
  { path: '/student/attendance', name: 'My Attendance', element: StudentAttendance },
  { path: '/student/course-eval', name: 'Course Evaluation', element: StudentCourseEval },

  //PARENT MODULE
  { path: '/parent/dashboard', name: 'Dashboard', element: ParentDashboard },
  { path: '/parent/profile', name: 'Profile', element: ParentChildProfile },
  { path: '/parent/grades', name: 'Grades', element: ParentChildGrade },
  { path: '/parent/schedule', name: 'Schedule', element: ParentChildSchedule },
  { path: '/parent/attendance', name: 'Attendance', element: ParentChildAttendance },
]
