import { useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../../config/Firebase"
import { LoadN } from "../../error/LoadN"


export const UserDetails = () => {
    //TITLE
    useEffect(() => {
        document.title = 'UserDetails'
    })

    const [user] = useAuthState(auth)

    const navigate = useNavigate()

    const Back = () => {
        navigate('/MyAccount')
    }

    return (
        <div>
            {user ? (
                <div>
                    <form className="contactForm ReadOnly">
                        <p>Name</p>
                        <input placeholder={user?.displayName} readOnly />
                        <p>Email</p>
                        <input placeholder={user?.email} readOnly />
                        <button onClick={Back} className="btn btn-primary">Back</button>
                    </form>
                </div >
            ) : (
                <LoadN />
            )}
        </div>
    )
}