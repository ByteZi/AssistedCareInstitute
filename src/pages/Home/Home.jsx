import Banner from './components/banner/Banner'
import Course from './components/course/Course'
import CourseObjective from './components/courseobjective/CourseObjective'
import ClassSchedule from './components/classschedule/ClassSchedule'
import Statements from './components/Statements/Statements'

const Home = (props) => {
    return (
        <>
            <Banner />
            <Course />
            <CourseObjective />
            <ClassSchedule />
            <Statements/>
        </>
    )
}

export default Home