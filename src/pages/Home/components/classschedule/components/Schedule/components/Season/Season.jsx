import Month from './components/Month'
import './Season.css'

const Season = ({ season, months, days }) => {

    return (
        // <div className=" flex">
        <div className='season-con flex just-center column align-center'>
            <h1 className='bullet-season'>{season}</h1>
            <div className='flex wrap align-center space-between season-month-con'>
            
                {
                    months.map((i, k) => (
                        <Month
                            month={i}
                            days={days}
                            k={k}
                            key={k}
                        />))
                }
            </div>
        </div>
        // </div>
    )
}

export default Season