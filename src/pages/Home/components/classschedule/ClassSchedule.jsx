import './ClassSchedule.css'
import Season from './components/Season/Season'
import { useRef} from 'react'
import InterestForm from './components/interestform/InterestForm'

const ClassSchedule = () => {
    // make this updatable by admin

    const interestFormRef = useRef()

    const interestFormDisplay = (e) => {
        e.preventDefault()
        interestFormRef.current.style.display = "flex"
    }

    return (
        <div className="schedule-con column flex just-center align-center ">
            <InterestForm interestFormRef={interestFormRef}/>
            <h1 className='schedule-header text-center'>Upcoming Classes</h1>
            <p className='text-divider'>━━━━</p>
            <div className="flex wrap just-center">
                <Season season={'Fall'} months={['Nov', 'Dec']} days={['4-5, 11-12, 18', '2-3, 9-10, 16']} />
                <Season season={'Winter'} months={['Jan', 'Feb']} days={['6-7, 20-21, 27', '3-4, 10-11, 24']} />
            </div>
            <button onClick={(e) => interestFormDisplay(e)} className="schedule-signup-btn">Reserve</button>
        </div>
    )
}

export default ClassSchedule