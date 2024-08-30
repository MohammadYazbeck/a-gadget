import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'

export default function AppLayout() {
    return (
        <div className="h-screen">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}
