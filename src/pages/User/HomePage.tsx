import { useEffect } from "react"
import { Link } from "react-router-dom"

export const HomePage = () => {
    //TITLE
    useEffect(() => {
        document.title = 'HomePage'
    })

    return (
        <div>
            <div className="mainSection" >
                <div className="subSection">
                    <h1>ContactUs</h1>
                    <Link to={'/ContactUs'}>
                        ContactUs
                    </Link>
                </div>
            </div>
            <div className="mainSection" >
                <div className="subSection">
                    <h1>Order</h1>
                    <Link to={'/Order'}>
                        Order
                    </Link>
                </div>
            </div>
        </div>
    )
}

