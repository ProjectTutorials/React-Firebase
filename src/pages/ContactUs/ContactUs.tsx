import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../../config/Firebase'
import { ContactForm } from '../../models/ContactForm'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const ContactUs = () => {
    //TITLE
    useEffect(() => {
        document.title = 'ContactUs'
    })

    //NAVIGATION
    const navigate = useNavigate()

    //USER
    const [user] = useAuthState(auth)

    //FORM
    const schema = yup.object().shape({
        Name: yup.string().required(),
        Date: yup.string().required(),
        Email: yup.string().email().required(),
        Message: yup.string().required()
    })

    const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
        resolver: yupResolver(schema)
    })

    //DB
    const postMessage = collection(db, 'ContactUs')

    const onSubmit = async (data: any) => {
        console.log(data)
        await addDoc(postMessage, {
            ...data
        })
        navigate('/ContactUsMessage')
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="contactForm">
                <h1 className="headerText">ContactUs</h1>
                <div className="form-group">
                    <input asp-for="Date" type="text" className="form-control" id="date" value={Date.now()} hidden  {...register('Date')} />
                </div>
                {user ? (
                    <div>
                        <div className="form-group ReadOnly">
                            <input asp-for="Name" type="text" className="form-control" id="name" value={user?.displayName} {...register('Name')} />
                        </div>
                        <div className="form-group ReadOnly">
                            <input asp-for="Email" type="email" className="form-control" id="email" value={user?.email} {...register('Email')} />
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <input asp-for="Name" type="text" className="form-control" id="name" placeholder="Enter your name" {...register('Name')} />
                        </div>
                        <div className="form-group">
                            <input asp-for="Email" type="email" className="form-control" id="email" placeholder="Enter your email" {...register('Email')} />
                        </div>
                    </div>
                )}
                <div className="form-group">
                    <textarea asp-for="Message" className="form-control" id="message" rows={3}
                        placeholder="Enter your message"  {...register('Message')}></textarea>
                </div>

                <p>{errors.Name?.message}</p>
                <p>{errors.Date?.message}</p>
                <p>{errors.Email?.message}</p>
                <p>{errors.Message?.message}</p>

                <button type="submit" className="contactButton">Submit</button>
            </form>
        </div>
    )
}