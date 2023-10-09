import './ClassSchedule.css'
import Season from './components/Season/Season'
import { useRef } from 'react'
import InterestForm from './components/interestform/InterestForm'

const ClassSchedule = () => {
    // make this updatable by admin

    const interestFormRef = useRef()

    const interestFormDisplay = (e) => {
        e.preventDefault()
        interestFormRef.current.style.display = "flex"
    }

    return (
        <div className="schedule-con column flex align-center">
            <InterestForm interestFormRef={interestFormRef} />
            <h2 className='schedule-header'>Upcoming Classes</h2>
            <div className="flex wrap just-center ">
                <Season season={'Fall'} months={['Nov', 'Dec']} days={['11-12, 18-19', '2-3, 9-10, 16-17']} />
                <Season season={'Winter'} months={['Jan', 'Feb']} days={['6-7, 20-21, 27', '3-4, 10-11, 24']} />
            </div>
            <button onClick={(e) => interestFormDisplay(e)} className="schedule-signup-btn">Reserve</button>
        </div>
    )
}

export default ClassSchedule