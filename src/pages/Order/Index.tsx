import { OrdersForm as iPost } from '../../models/OrdersForm';

interface Props {
    msg: iPost
}

export const OrderIndex = (props: Props) => {

    const { msg } = props
    return (
        <div className='subSection'>
            <p>TransactionId: <em>{msg.TransactionId}</em></p>
            <p>MemberId: <em>{msg.MemberId}</em></p>
            <p>ProductName: <em>{msg.ProductName}</em></p>
            <p>RequiredDate: <em>{msg.RequiredDate}</em></p>
            <p>Quantities: <em>{msg.Quantities}</em></p>
            <p>UserId: <em>{msg.UserId}</em></p>
            <p>Name: <em>{msg.Name}</em></p>
            <p>Email: <em>{msg.Email}</em></p>
        </div>
    )
}

