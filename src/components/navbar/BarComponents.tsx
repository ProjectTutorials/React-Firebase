import { auth } from "../../config/Firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link } from "react-router-dom"
import { GoogleSignOut } from "../security/GoogleSignOut"

export const BarComponents = () => {

    const [user] = useAuthState(auth)

    return (
        <div>
            {user ? (
                <div>
                    <ul className='navbar-nav justify-content-end'>
                        <li className="barItem ">
                            <Link to='/MyAccount' className="nav-link">
                                MyAccount
                            </Link>
                        </li>
                        <li className="barItem ">
                            <Link to='/ControlPannel' className="nav-link">
                                ControlPannel
                            </Link>
                        </li>
                        <li className="barItem ">
                            <GoogleSignOut />
                        </li>
                    </ul>
                </div>
            ) : (
                <div>
                    <ul className='navbar-nav justify-content-end'>
                        <li className="barItem ">
                            <Link to='/Login' className="nav-link">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}