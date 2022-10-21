import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavContainer } from '../components/navbar/NavContainer'
import { Error404 } from '../error/Error404'
import { Load4 } from '../error/Load4'
import { LoadN } from '../error/LoadN'
import { NotLoggedIn } from '../error/NotLoggedIn'
import { ContactUs } from '../pages/ContactUs/ContactUs'
import { ViewPost } from '../pages/ContactUs/ViewPost'
import { Home } from '../pages/Home/Home'
import { ContactUsMessage } from '../pages/messages/ContactUsMessage'
import { OrderMessage } from '../pages/messages/OrderMessage'
import { NewUserCreate } from '../pages/NewUser/Create'
import { UserDetails } from '../pages/NewUser/Details'
import { Order } from '../pages/Order/Order'
import { ViewOrder } from '../pages/Order/ViewOrder'
import { ControlPannel } from '../pages/User/ControlPannel'
import { HomePage } from '../pages/User/HomePage'
import { Login } from '../pages/User/Login'
import { MyAccount } from '../pages/User/MyAccount'

export const AppRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <NavContainer />
                <Routes>
                    <Route >
                        <Route index element={<Home />} />
                        <Route path='/Login' element={<Login />} />
                        <Route path='/HomePage' element={<HomePage />} />
                        <Route path='/MyAccount' element={<MyAccount />} />
                        <Route path='/ControlPannel' element={<ControlPannel />} />

                        <Route path='/ContactUs' element={<ContactUs />} />
                        <Route path='/ViewPost' element={<ViewPost />} />
                        <Route path='/ContactUsMessage' element={<ContactUsMessage />} />

                        <Route path='/Order' element={<Order />} />
                        <Route path='/ViewOrder' element={<ViewOrder />} />
                        <Route path='/OrderMessage' element={<OrderMessage />} />

                        <Route path='/NewUser/Create' element={<NewUserCreate />} />
                        <Route path='/NewUser/Details' element={<UserDetails />} />

                        <Route path='/Load4' element={<Load4 />} />
                        <Route path='/LoadN' element={<LoadN />} />
                        <Route path='/NotLoggedIn' element={<NotLoggedIn />} />
                        <Route path='/Error404' element={<Error404 />} />
                        <Route path='*' element={<Load4 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}