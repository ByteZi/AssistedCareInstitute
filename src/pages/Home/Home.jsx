import Banner from './components/banner/Banner'
import Course from './components/course/Course'
import CourseObjective from './components/courseobjective/CourseObjective'
import ClassSchedule from './components/classschedule/ClassSchedule'
import About from './components/about/About'
import InterestForm from './components/interestform/InterestForm';

const Home = (props) => {
    return (
        <>
            <InterestForm/>

            <Banner />
            <Course />
            <CourseObjective />
            <ClassSchedule />
            <About />


        </>
    )
}

export default Home