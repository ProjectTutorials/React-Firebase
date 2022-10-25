import { useEffect } from "react"
import { Link } from "react-router-dom"

export const NotLoggedIn = () => {
    //TITLE
    useEffect(() => {
        document.title = 'Not Logged In'
    })

    return (
        <div className="sectioN noSelect">
            <h1>Not Logged In</h1> <br />
            <h2>Please <Link to={'/LogIn'}>Login</Link> or <Link to={'/NewUser/Create'}>Register</Link></h2>
        </div>
    )
}