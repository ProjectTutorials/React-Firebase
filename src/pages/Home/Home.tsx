import { useEffect } from "react"

export const Home = () => {
    //TITLE
    useEffect(() => {
        document.title = 'HomePage'
    })

    return (
        <div>
            <div className="containerMod container1" style={{ display: 'block' }}>
                <h1 className="head">Template</h1>
                <h2 className="head">Using React</h2>
            </div>


            <div className="footerLogo containerMod">
                <h5>Copyright © 2022, Template. All rights reserved.</h5>
            </div>
        </div>
    )
}