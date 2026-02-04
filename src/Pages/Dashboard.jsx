import React from 'react'
import WelcomeComponent from '../Components/DashboardComponents/WelcomeComponent'
import JobStats from '../Components/DashboardComponents/JobStats'
import Charts from '../Components/DashboardComponents/charts'
import JobActivityBoard from '../Components/DashboardComponents/JobActivityBoard'

const Dashboard = () => {
  return (
    <div>
      <WelcomeComponent/>
      <JobStats/>
      <Charts/>
      <JobActivityBoard/>
    </div>
  )
}

export default Dashboard