import React from 'react'
import CourseList from '../components/courses-page/Courses'
import Gatimaan from '../components/courses-page/Gatimaan'
import WhatsappIcon from '../components/common/Whatsappicon'

const Courses = () => {
  return (
    <div>
      <CourseList />
      <Gatimaan />
      <WhatsappIcon />
    </div>
  )
}

export default Courses
