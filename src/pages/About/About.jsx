import './About.css'
import Head from './components/Head/Head'
import Experience from './components/Experience/Experience'
import Mission from './components/Mission/Mission'

const About = () => {

    return (
        <div className="about-con flex just-center align-center  column">
            <Head />
            <Experience />
            <Mission/>
        </div>
    )
}

export default About 