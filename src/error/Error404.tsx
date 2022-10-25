import { useEffect } from "react"

export const Error404 = () => {
    //TITLE
    useEffect(() => {
        document.title = 'Not Found'
    })

    return (
        <div className="sectioN noSelect">
            <h1>404.</h1> <br />
            <h2>This is not the</h2>
            <h2>webpage you</h2>
            <h2>are looking for.</h2>
        </div>
    )
}