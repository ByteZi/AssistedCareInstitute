import './CourseObjective.css'
import './components/ObjectiveItem/ObjectiveItem.css'
import ObjectiveItem from './components/ObjectiveItem/ObjectiveItem'
import Objectives from './data/objectives'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'

const CourseObjective = () => {

    return (
        <div className="objective-con flex column align-center">

            <div className="objective-title-con flex align-center">
                <FontAwesomeIcon icon={faAsterisk} className="h1-ast" />
                <h2 className="objective-title ">Course Objective</h2>
            </div>

            <h3 className='objective-desc text-center'>Upon completion of the RCFE ICTP course, the student will
                gain knowledge and understanding in the following areas</h3>
            <ul className="objective-ul">
                {
                    Objectives.map((item, i) => {
                        return <ObjectiveItem i={i} item={item} key={i} />
                    })
                }
            </ul>
        </div>


    )
}

export default CourseObjective