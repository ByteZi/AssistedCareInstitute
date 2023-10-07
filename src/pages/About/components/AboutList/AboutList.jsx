import './AboutList.css'

const AboutList = () => {
    return (
        <div className="about-list-con flex column ">
            <h3 className="about-list-header">
                Her professional background includes the roles :
            </h3>

            <ul className="about-ul flex column just-center">
                <li>Inpatient nurse</li>
                <li>Advice nurse</li>
                <li>Nurse lead</li>
                <li>Nurse educator</li>
            </ul>
        </div>
    )
}

export default AboutList