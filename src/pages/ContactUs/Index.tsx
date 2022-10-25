import { ContactForm as iPost } from "../../models/ContactForm";

interface Props {
    msg: iPost
}

export const ContactUsIndex = (props: Props) => {

    const { msg } = props
    return (
        <div className='subSection'>
            <h1>{msg.Name}</h1>
            <a href={'mailto:' + msg.Email} target='_blank'>{msg.Email}</a>
            <p>{msg.Date}</p>
            <p>{msg.Message}</p>
        </div>
    )
}

