import './Reservation.css'
import Price from '../../components/Price/Price'
import InterestForm from './components/interestform/InterestForm'

const Reservation = () => {

    return (
        <div className="reservation-con flex align-center space-around">
            <Price/>
            <InterestForm/>
        </div>
    )
}

export default Reservation