import Month from './components/Month'
import './Season.css'

const Season = ({ season, months, days }) => {

    return (
        // <div className=" flex">
        <div className='season-con flex just-center'>
            <h1 className='bullet-sched'>{season}</h1>
            <div className='fall flex column wrap just-center'>
                {
                    months.map((i, k) =>
                        <Month
                            month={i}
                            days={days}
                            k={k}
                            />)
                }
            </div>
        </div>
        // </div>
    )
}

export default Season