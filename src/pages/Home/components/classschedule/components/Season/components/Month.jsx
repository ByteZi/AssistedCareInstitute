import './Month.css'

const Month = ({month, days, k}) => {
    return (
        <div key={k} className="month-con flex space-between align-center">

            <h2 className='month'>{month}</h2>
            <div className="month-con-details flex column">
                <h4 classsName="month-header">Weekends</h4>
                <p className="month-days">{days[k]}</p>
            </div>
        </div>
    )
}

export default Month 