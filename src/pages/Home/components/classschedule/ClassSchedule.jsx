import './ClassSchedule.css'

const ClassSchedule = () => {
    // make this updatable by admin
    return (
        <div className="schedule-con column flex align-center">
            <h1 className='schedule-header'>Upcoming Classes</h1>

            <h1>Fall</h1>
            <p className='text-divider'>━</p>
            <div className='fall flex wrap just-center'>

                <div className="month-1 flex align-center ">
                    <h2 className='flex align-center just-center '>Nov</h2>
                    <div className="month-1-details flex column">
                        <h3>Weekends</h3>
                        <p>4-5, 11-12, 18</p>
                    </div>
                </div>

                <div className="month-1 flex align-center ">
                    <h2 className='flex align-center just-center '>Dec</h2>
                    <div className="month-1-details flex column">
                        <h3>Weekends</h3>
                        <p>2-3, 9-10, 16</p>
                    </div>
                </div>

            </div>
            <h1>Winter</h1>
            <p className='text-divider'>━</p>
            <div className='winter flex wrap just-center'>

                <div className="month-1 flex align-center ">
                    <h2 className='flex align-center just-center '>Jan</h2>
                    <div className="month-1-details flex column">
                        <h3>Weekends</h3>
                        <p>6-7, 20-21, 27</p>
                    </div>
                </div>

                <div className="month-1 flex align-center ">
                    <h2 className='flex align-center just-center '>Feb</h2>
                    <div className="month-1-details flex column">
                        <h3>Weekends</h3>
                        <p>3-4, 10-11, 24</p>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default ClassSchedule