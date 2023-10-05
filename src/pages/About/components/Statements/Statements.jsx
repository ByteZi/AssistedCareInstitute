import './Statements.css'
import stateData from './data/stateData'

const Statements = () => {

    return (
        <>
            <div className="statement-con flex align-center">
                <div className="statement-img-con flex-1">
                    <img src={require(`${stateData.mission.img}`)} className="statement-img" />
                </div>
                <div className="statement-desc-con state-box1 flex-2">
                    <p className="h1-tip">━ Our Mission</p>
                    <h1 className="statement-title">{stateData.mission.title}</h1>
                    <p className="statement-desc">{stateData.mission.statement}</p>
                </div>
            </div>

    
        </>
    )
}

export default Statements