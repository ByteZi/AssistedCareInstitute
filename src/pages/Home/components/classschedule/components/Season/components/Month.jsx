import './Month.css'

const Month = ({month, days, k}) => {
    return (
        <div key={k} className="month-con flex align-center ">
            <h2 className='month'>{month}</h2>
            <div className="month-con-details flex column">
                <h3>Weekends</h3>
                <p className="month-days">{days[k]}</p>
                {console.log(days[k])}
            </div>
        </div>
    )
}

export default Month 