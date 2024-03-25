'use client'
import React from 'react'
import Heading from '../../../app/utils/Heading'
import AdminSidebar from '../../components/Admin/sidebar/AdminSidebar'
import CourseAnalytics from '../../components/Admin/Analytics/CourseAnalytics'
import DashboardHeader from '../../../app/components/Admin/DashboardHeader'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Heading
        title="Elearning - Admin"
        description='Elearning is a platform for students to learn and get help from teachers'
        keywords='Programming, MERN, Redux, Machine Learning'
        />
        <div className='flex h-[200vh]'>
            <div className='1500px:w-[16%] w-1/5'>
                <AdminSidebar/>
            </div>
            <div className='w-[85%]'>
                <DashboardHeader />
                <CourseAnalytics />
            </div>
        </div>
    </div>
  )
}

export default page