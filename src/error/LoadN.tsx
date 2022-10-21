import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoadN = () => {
    //TITLE
    useEffect(() => {
        document.title = 'loading..'
    })

    const navigate = useNavigate()

    setTimeout(function () {
        navigate('/NotLoggedIn')
    }, 3000);

    return (
        <div>
            <div className="mainSection" style={{ boxShadow: 'none', marginTop: '200px' }}>
                <img src="https://github.com/dependabot-pr/Static-Files/raw/main/Assets/spinner.gif" alt="load" />
            </div>
        </div>
    )
}