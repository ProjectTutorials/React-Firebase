import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../../config/Firebase"

export const GoogleSignOut = () => {

    const navigate = useNavigate()

    const signUserOut = async () => {
        signOut(auth)
        navigate('/')
    }

    return (
        <div>
            <button onClick={signUserOut} className="nav-link logOutBTN">
                LogOut
            </button>
        </div>
    )
}