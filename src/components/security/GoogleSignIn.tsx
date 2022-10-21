import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom"
import { auth, provider } from "../../config/Firebase";

export const GoogleSignIn = () => {

    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const res = await signInWithPopup(auth, provider)
        navigate('/HomePage')
    }

    return (
        <div>
            <button className="GoogleSignIn" onClick={signInWithGoogle}>
                <img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Google.svg" alt="google logo" className="GLogo" />
                <div className="GText">
                    Sign in with Google
                </div>
            </button>
        </div>
    )
}