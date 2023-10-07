import Banner from './components/Banner/Banner'
import Course from './components/Course/Course'
import CourseObjective from './components/CourseObjective/CourseObjective'
import ClassSchedule from './components/ClassSchedule/ClassSchedule'

import './Home.css'


const Home = () => {
    return (
        <div className="home-con">
            <Banner />
            <Course />
            <CourseObjective />
            <ClassSchedule />
        </div>
    )
}

export default Home