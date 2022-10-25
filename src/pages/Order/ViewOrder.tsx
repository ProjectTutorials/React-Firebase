import { getDocs, collection } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../config/Firebase";
import { OrderIndex } from "./Index"
import { OrdersForm } from "../../models/OrdersForm";

export const ViewOrder = () => {
    //TITLE
    useEffect(() => {
        document.title = 'ViewOrder'
    })

    const [order, setOrder] = useState<OrdersForm[]>(null)
    const orderRef = collection(db, 'Orders')

    const GetOrders = async () => {
        const data = await getDocs(orderRef)
        setOrder(
            data.docs.map((doc) => ({ ...doc.data() })) as OrdersForm[]
        )
    }

    useEffect(() => {
        GetOrders();
    }, [])

    return (
        <div className="mainSection">
            {order?.map((msg) => (
                <OrderIndex msg={msg} />
            ))}
        </div>
    )
}