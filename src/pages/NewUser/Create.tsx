import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useEffect } from 'react'

export const NewUserCreate = () => {
    //TITLE
    useEffect(() => {
        document.title = 'Register'
    })

    const schema = yup.object().shape({
        FirstName: yup.string().required(),
        LastName: yup.string().required(),
        Email: yup.string().required(),
        Password: yup.string().min(4).max(20).required()
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="contactForm">
                <h1 className="headerText">Register</h1>
                <fieldset>
                    <div className="row">
                        <input placeholder="FirstName"  {...register('FirstName')} />
                    </div>
                    <div className="row">
                        <input placeholder="LastName"  {...register('LastName')} />
                    </div>
                    <div className="row">
                        <input placeholder="Email"  {...register('Email')} />
                    </div>
                    <div className="form-group row PassWord">
                        <input placeholder="Password" type="password" id="PassWord"  {...register('Password')} />
                        <i className="fa-sharp fa-solid fa-eye" id="PassWordIcon"></i>
                    </div>
                    <div className="row">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}