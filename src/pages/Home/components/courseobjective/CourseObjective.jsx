import './CourseObjective.css'
import './components/ObjectiveItem/ObjectiveItem.css'
import ObjectiveItem from './components/ObjectiveItem/ObjectiveItem'
import Objectives from './data/objectives'

const CourseObjective = () => {

    return (
        <div className="objective-con flex column align-center text-center">
            <h1>Course Objective</h1>
            <p className='text-divider'>━━━</p>
            <p className='objective-description'>Upon completion of the RCFE ICTP course, the student will gain knowledge and understanding in the following areas</p>
            <ul className='objective-items flex wrap just-center text-center'>
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