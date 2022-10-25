import { getDocs, collection } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../config/Firebase";
import { ContactUsIndex } from "./Index"
import { ContactForm } from "../../models/ContactForm";

export const ViewPost = () => {
    //TITLE
    useEffect(() => {
        document.title = 'ViewPost'
    })

    const [messages, SetMessages] = useState<ContactForm[]>(null)
    const messagesRef = collection(db, 'ContactUs')

    const getMessages = async () => {
        const data = await getDocs(messagesRef)
        SetMessages(
            data.docs.map((doc) => ({ ...doc.data() })) as ContactForm[]
        )
    }

    useEffect(() => {
        getMessages();
    }, [])

    return (
        <div>
            <div className="mainSection">
                {messages?.map((msg) => (
                    <ContactUsIndex msg={msg} />
                ))}
            </div>
        </div>
    )
}