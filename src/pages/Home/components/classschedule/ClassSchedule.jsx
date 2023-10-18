import './ClassSchedule.css'
import Season from './components/Season/Season'
import { Link } from 'react-router-dom'

const ClassSchedule = () => {
    // make this updatable by admin
    return (
        <div className="schedule-con column flex align-center">
            <h2 className='schedule-header'>Upcoming Weekend Classes</h2>
            <div className="flex column wrap just-center ">
                <Season season={'Fall 2023'} months={['Nov', 'Dec']} days={['11-12, 18-19', '2-3, 9-10, 16-17']} />
                <Season season={'Winter 2024'} months={['Jan', 'Feb']} days={['6-7, 20-21, 27', '3-4, 10-11, 24']} />
            </div>
            <Link to={'/reservation'} className='schedule-signup-btn'>Reserve</Link >
        </div>
    )
}

export default ClassSchedule