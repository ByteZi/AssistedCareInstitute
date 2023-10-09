import './Price.css'
import EnrollItem from './components/EnrollItem/EnrollItem'
import enrollmentData from './data/enrollmentData'

const Enrollment = () => {
    return (
        <div className="enrollment-con flex just-center">

            <div className="enrollment-card flex column">
                <div className="enrollment-card-price-con flex column just-center">
                    {/* <span className="enrollment-card-price-dollar">$</span> */}
                    <h1 className="enrollment-card-price-header flex  just-center">529</h1>
                    <p className="enrollment-card-price-txt">One time payment</p >
                </div>
                <div className="enrollment-card-content">
                    <ul className='enrollment-list'>
                        {enrollmentData.map((item, k) => <EnrollItem key={k} item={item} />)}
                    </ul>
                </div>
                <div className="enrollment-card-div" />

            </div>

        </div>
    )
}

export default Enrollment