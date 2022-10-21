import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { GoogleSignIn } from "../../components/security/GoogleSignIn"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../config/Firebase"
import { useEffect } from "react"

export const Login = () => {
    //TITLE
    useEffect(() => {
        document.title = 'Login'
    })

    const schema = yup.object().shape({
        Email: yup.string().required(),
        Password: yup.string().min(4).max(20).required(),
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    const [user] = useAuthState(auth)

    return (
        <div>
            {!user ? (
                <form onSubmit={handleSubmit(onSubmit)} className="border contactForm">
                    <h1 className="headerText">Log in</h1>

                    <div className="form-group row">
                        <input placeholder="Email" {...register('Email')} />
                    </div>

                    <div className="form-group row PassWord">
                        <input placeholder="Password" type="password" id="PassWord" {...register('Password')} />
                        <i className="fa-sharp fa-solid fa-eye" id="PassWordIcon"></i>
                    </div>

                    <button type="submit" className="contactButton">LOG IN</button><br /><br />

                    <GoogleSignIn />

                    <h6>If you dont have an account, <Link to="/NewUser/Create">Register Here</Link></h6>
                </form>
            ) : (
                <div style={{ textAlign: 'center', color: 'var(--accent)' }}>
                    <h1>You've already signed in</h1>
                </div>
            )}
        </div>
    )
}