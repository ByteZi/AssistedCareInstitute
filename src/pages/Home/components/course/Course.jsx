import './Course.css'


const Course = () => {

    return (
        <div className="course-container section flex column align-center text-center ">
            <img className='cert' src={require('./assets/certblue.png')}/>
            < h1 > RCFE Certification</h1 >
            <p className='text-divider'>━━━</p>
            <p className="course-description">The RCFE Initial Certification Training Program (ICTP) is an 80-hour live
                stream course that prepares the student for the state administrator
                certification exam. This course focuses on Title 22, and the topics listed in
                the Core of Knowledge. It also includes review sessions, practice
                assessments, and test-taking strategies to help the student successfully
                pass the exam. This interactive course provides the student an opportunity
                to work with simulation exercises and hands-on activities to prepare for the
                role of an administrator in the real world.</p>
        </div>
    )
}

export default Course

