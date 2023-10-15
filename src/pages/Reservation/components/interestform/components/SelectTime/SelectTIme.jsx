import { timeOptions } from "./data/timeOptions"
import './SelectTime.css'

const SelectTime = () => {

    return (
        <div className="interestform-time-con flex column align-center">
            <p className="interestform-time-txt">Best time to contact:</p>
            <div className="interestform-time flex">
                <div className="interestform-time-from-con">
                    <select className="time-from" name="timeFrom">
                        <option value="--" selected disabled hidden>---</option>
                        {timeOptions.map((value, k) => <option key={k} value={value}>{value}</option>)}
                    </select>

                    <select className="time-from" name="timeMeridiemFrom" defaultValue="--">
                        <option value="--" selected disabled hidden>---</option>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>
                </div>

                <p className="interestform-meridiem-div inline"> to </p>

                <div className="interestform-time-to">
                    <select className="time-from" name="timeTo">
                        <option value="--" selected disabled hidden>---</option>
                        {timeOptions.map((value, k) => <option key={k} value={value}>{value}</option>)}
                    </select>

                    <select className="time-from" name="timeMeridiemTo">
                        <option value="--" selected disabled hidden>---</option>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SelectTime