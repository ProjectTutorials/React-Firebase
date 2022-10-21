import { useEffect } from "react"
import { Link } from "react-router-dom"

export const ControlPannel = () => {
    //TITLE
    useEffect(() => {
        document.title = 'ControlPannel'
    })

    return (
        <div>
            <div className="mainSection" >
                <div className="subSection">
                    <h1>ContactUs</h1>
                    <Link to={'/ViewPost'}>
                        ContactUs
                    </Link>
                </div>
            </div>
            <div className="mainSection" >
                <div className="subSection">
                    <h1>Management</h1>
                    <Link to={'/ViewOrder'}>
                        Orders Recieved
                    </Link>
                </div>
            </div>
        </div >
    )
}
