import { useRef } from "react"

const Statement = ({ data, flag }) => {



    return (
        flag
            ? <div className="statement-con flex just-center align-center">
                < div className="statement-img-con flex flex-1" >
                    <img src={require(`${data.statementImg}`)} className="statement-img flex-1" />
                </div >

                <div className="statement-statement-con flex-2 just-center align-center ">
                    <p className="statement-statement">
                        <h1 className="statement-title">{data.statementTitle}</h1>
                        <p className='text-divider'>━━━━━</p>{data.statement}</p>
                </div>
            </div>
            :
            <div className="statement-con-reverse flex just-center align-center">
                <div className="statement-statement-con flex-2 just-center align-center ">
                    <p className="statement-statement">
                        <h1 className="statement-title">{data.statementTitle}</h1>
                        <p className='text-divider'>━━━━━</p>{data.statement}</p>
                </div>

                <div className="statement-img-con  flex flex-1">
                    <img src={require(`${data.statementImg}`)} className="statement-img flex-1" />
                </div>


            </div >
    )
}

export default Statement