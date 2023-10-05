import './About.css'

const About = () => {

    return (

        <div className="about-con flex just-center column ">
            <p className="about-tip h1-tip">━ About the Owner</p>
            <h1 className="about-title">Theresa Aguirre, RN-MSN</h1>
            <p className="about-desc">
                Theresa Aguirre, is the owner and training vendor 
                of Assisted Care Institute. A master’s degree
                prepare registered nurse with more than 15 years
                of patient care experience in a variety of health
                care settings.
            </p>
            <p className="about-list-header">
                Her professional background includes the roles :
            </p>
            <ul className="about-list-con flex column">
                <li>inpatient nurse</li>
                <li>advice nurse</li>
                <li>nurse leader</li>
                <li>nurse educator</li>
            </ul>
            <p className="about-desc2">
                her expertise and valuable experience to provide the students with the knowledge in passing the
                state certification exam. Theresa holds two college degrees, Bachelor of Computer Science and Master’s
                Degree in Nursing Leadership and Management. As a computer science major, her first career was a college professor. She currently
                works as a nurse educator in one of the largest healthcare organizations in the nation. As having an experience as both an
                instructor and healthcare professional, she has the unique experience of making the content to be easily understood and will
                provide you with strategies on how to prepare for the exam and ultimately pass the exam with flying colors.
                Having taken the exam herself with a score of 96%. She’ll share with you how to simplify the
                test preparation.
            </p>

        </div>

    )
}

export default About 