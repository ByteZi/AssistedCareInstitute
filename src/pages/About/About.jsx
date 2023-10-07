import './About.css'
import Head from './components/Head/Head'
import AboutList from './components/AboutList/AboutList'
import Description from './components/Description/Description'

const About = () => {

    return (
        <div className="about-con flex just-center column">
            <Head />
            <AboutList />
            <Description/>
        </div>
    )
}

export default About 