import './ClassSchedule.css'
import Season from './components/Season/Season'
import { Link } from 'react-router-dom'

const ClassSchedule = () => {
    // make this updatable by admin
    return (
        <div className="schedule-con column flex align-center">
            <h2 className='schedule-header'>Upcoming Classes</h2>
            <div className="flex wrap just-center ">
                <Season season={'Fall'} months={['Nov', 'Dec']} days={['11-12, 18-19', '2-3, 9-10, 16-17']} />
                <Season season={'Winter'} months={['Jan', 'Feb']} days={['6-7, 20-21, 27', '3-4, 10-11, 24']} />
            </div>
            <Link to={'/reservation'} className='schedule-signup-btn'>Reserve</Link >
        </div>
    )
}

export default ClassSchedule