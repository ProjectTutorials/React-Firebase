import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../../config/Firebase'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { OrdersForm } from '../../models/OrdersForm'
import { useEffect } from 'react'

export const Order = () => {
    //TITLE
    useEffect(() => {
        document.title = 'Order'
    })

    //NAVIGATION
    const navigate = useNavigate()

    //USER
    const [user] = useAuthState(auth)

    //FORM
    const schema = yup.object().shape({
        TransactionId: yup.string(),
        MemberId: yup.string().required(),
        ProductName: yup.string().required(),
        RequiredDate: yup.string().required(),
        Quantities: yup.string().required(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<OrdersForm>({
        resolver: yupResolver(schema)
    })

    //DB
    const postMessage = collection(db, 'Orders')

    const onSubmit = async (data: any) => {
        console.log(data)
        await addDoc(postMessage, {
            ...data,
            UserId: user?.uid,
            Name: user?.displayName,
            Email: user?.email
        })
        navigate('/OrderMessage')
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="contactForm">
                <h1 className="headerText">Orders</h1>
                <div className="form-group">
                    <input type="text" className="form-control" id="TransactionId" value={Math.random()} {...register('TransactionId')} readOnly />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="MemberId" placeholder='Enter MemberId' {...register('MemberId')} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="ProductName" placeholder='Enter ProductName' {...register('ProductName')} />
                </div>
                <div className="form-group" style={{ display: 'flex' }}>
                    <input type="date" className="form-control datedropper-init dateForm" id="RequiredDate" style={{ width: '80%' }} placeholder="Enter RequiredDate" {...register('RequiredDate')} />
                    <i className=" fa-regular fa-calendar-plus calIcon"></i>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" id="Quantities" placeholder='Enter Quantities' {...register('Quantities')} />
                </div>

                <p>{errors.MemberId?.message}</p>
                <p>{errors.ProductName?.message}</p>
                <p>{errors.RequiredDate?.message}</p>
                <p>{errors.Quantities?.message}</p>

                <button type="submit" className="contactButton">Submit</button>
            </form>
        </div>
    )
}

