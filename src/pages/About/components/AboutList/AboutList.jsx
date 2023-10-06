import './AboutList.css'

const AboutList = () => {
    return (
        <div className="about-list-con flex column ">
            <h3 className="about-list-header">
                Her professional background includes the roles :
            </h3>

            <ul className="about-ul flex column">
                <li>inpatient nurse</li>
                <li>advice nurse</li>
                <li>nurse leader</li>
                <li>nurse educator</li>
            </ul>
        </div>
    )
}

export default AboutList