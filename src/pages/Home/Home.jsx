import Banner from './components/banner/Banner'
import Course from './components/course/Course'
import CourseObjective from './components/courseobjective/CourseObjective'
import ClassSchedule from './components/classschedule/ClassSchedule'
import Statements from './components/Statements/Statements'
import TermsOfCondition from './components/termsofcondition/TermsOfCondition'
import RefundPolicy from './components/refund/RefundPolicy'
import Footer from './components/footer/footer'

const Home = () => {
    return (
        <>
            <Banner />
            <Course />
            <CourseObjective />
            <ClassSchedule />
            <Statements/>
            <TermsOfCondition/>
            <RefundPolicy/>
            <Footer/>
        </>
    )
}

export default Home