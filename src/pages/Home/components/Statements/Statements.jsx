import './Statements.css'
import Statement from './components/statement/Statement'
import statementsData from './components/statement/data/statementsData'

const Statements = () => {


    return (
        <>
            <Statement data={statementsData.Mission} flag={1}/>
            <Statement data={statementsData.About} flag={0}/>
        </>
    )
}

export default Statements