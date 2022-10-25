import { Link } from "react-router-dom"
import { BarComponents } from "./BarComponents"

export const NavContainer = () => {
    return (
        <div>
            <header>
                <nav id='customNav' className='navbar navbar-expand-sm bg-light fixed-top'>
                    <div className='container-fluid'>
                        <ul className='navbar-nav justify-content-start'>
                            <li>
                                <Link to='/' className="logoLink">
                                    <img alt='logo' src="https://avatars.githubusercontent.com/u/108736576?s=200&v=4"
                                        draggable='false' />
                                    Template
                                </Link>
                            </li>
                        </ul>
                        <BarComponents />
                    </div>
                </nav>
            </header>
        </div>
    )
}