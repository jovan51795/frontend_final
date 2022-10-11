import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))
//----------------------------------------------------------------------//

//LMS IMPORTS//

//Admin Module
const StudentList = React.lazy(() => import('./views/students/StudentList'))
const AddStudent = React.lazy(() => import('./views/students/AddStudent'))

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
const EnrollSubjects = React.lazy(() => import('./views/students/EnrollSubjectsPage'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },

  //--------------------------------LMS ROUTES----------------------------------//

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

  { path: '/subjects', name: 'Subjects', element: SubjectList },
  { path: '/subject/add', name: 'Add Subject', element: AddSubject },
  { path: '/departments', name: 'Department', element: Departments },
  { path: '/department/add', name: 'Add Department', element: AddDepartment },

  //Faculty
  { path: '/faculty/dashboard', name: 'Dashboard', element: FacultyDashboard },
  { path: '/faculty/profile', name: 'Profile', element: FacultyProfile },
  { path: '/faculty/profile/edit', name: 'Edit Profile', element: EditFacultyProfile },
  { path: '/faculty/attendance-monitoring', name: 'Attendance', element: AttendanceSheet },
  { path: '/faculty/grades-monitoring', name: 'Grades', element: GradingSheet },
  { path: '/faculty/grades-monitoring/id', name: 'Class Card', element: ClassCard },

  //Student Module
  { path: '/student/dashboard', name: 'Student Dashboard', element: StudentDashboard },
  { path: '/student/profile', name: 'Student Profile', element: StudentProfile },
  { path: '/student/subjects', name: 'My Subjects', element: StudentSubject },
  { path: '/student/enroll', name: 'Enroll Subjects', element: EnrollSubjects },
]

export default routes
