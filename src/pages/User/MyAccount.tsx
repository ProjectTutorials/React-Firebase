import { useEffect } from "react"
import { Link } from "react-router-dom"

export const MyAccount = () => {
    //TITLE
    useEffect(() => {
        document.title = 'MyAccount'
    })

    return (
        <div>
            <div className="mainSection">
                <div className="subSection">
                    <Link to={'/NewUser/Details'}>
                        User Details
                    </Link>
                </div>
            </div>
        </div>
    )
}