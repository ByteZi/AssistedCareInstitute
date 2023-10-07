import Banner from './components/banner/Banner'
import Course from './components/course/Course'
import CourseObjective from './components/courseobjective/CourseObjective'
import ClassSchedule from './components/classschedule/ClassSchedule'

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