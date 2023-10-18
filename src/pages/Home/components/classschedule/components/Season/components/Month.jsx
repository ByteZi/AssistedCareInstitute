import './Month.css'

const Month = ({month, days, k}) => {
    return (
        <div key={k} className="month-con flex space-between align-center">

            <h3 className='month'>{month}</h3>
            <div className="month-con-details flex column">
                <h4 classsName="month-header">Weekends</h4>
                <p className="month-days">{days[k]}</p>
            </div>
        </div>
    )
}

export default Month 