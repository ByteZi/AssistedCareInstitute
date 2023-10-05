import Banner from './components/banner/Banner'
import Course from './components/course/Course'
import CourseObjective from './components/courseobjective/CourseObjective'
import ClassSchedule from './components/classschedule/ClassSchedule'
import Footer from './components/footer/footer'



const Home = () => {
    return (
        <>
            <Banner />
            <Course />
            <CourseObjective />
            <ClassSchedule />
            <Footer/>
        </>
    )
}

export default Home