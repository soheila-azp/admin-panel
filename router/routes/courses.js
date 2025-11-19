import { lazy } from 'react'

const CoursesList = lazy(() => import('../../pages/courses/CoursesList'))
const YourCourses = lazy(() => import('../../pages/courses/YourCourses'))
const ReservedCourses = lazy(() => import('../../pages/courses/ReservedCourses'))
const BuildCourse = lazy(() => import('../../pages/courses/BuildCourse'))
const UserView = lazy(() => import('../../pages/users/userDetails/UserDetail'))
const CreateUser = lazy(()=> import('../../pages/users/NewUser/NewUser'))
const CourseDetails = lazy(()=> import('../../pages/courses/courseList/courseDetail/CourseDetail'))

const courses = [
  {
    element: <CoursesList />,
    path: '/coursesList'
  },
  {
    element: <YourCourses />,
    path: '/yourCourses'
  },
  {
    element: <ReservedCourses />,
    path: '/reservedCourses'
  },
  {
    element: <BuildCourse />,
    path: '/buildCourse'
  },
  {
    element: <UserView />,
    path: '/userDetail/:id'
  },
  {
    element: <CreateUser />,
    path: '/CreateUser'
  } ,
  {
    element: <CourseDetails />,
    path: '/CourseDetails/:id'
  }
]

export default courses