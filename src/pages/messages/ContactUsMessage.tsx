import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ContactUsMessage = () => {
    //TITLE
    useEffect(() => {
        document.title = 'ContactUsMessage'
    })

    const navigate = useNavigate()

    setTimeout(function () {
        navigate('/')
    }, 5000);

    return (
        <div>
            <div className="sectioN sectioNG noSelect">
                <h2>Your message was sent <span style={{ fontWeight: '800' }}>Successfully</span> </h2>
                <h2>We would get back to you soon</h2>
            </div>
        </div>
    )
}