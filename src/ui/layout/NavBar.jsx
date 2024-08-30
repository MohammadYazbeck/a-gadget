import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Cart from '../../features/cart/Cart'
import LoginButton from '../buttons/LoginButton'
import { useSelector } from 'react-redux'
import AuthComponenet from '../../features/user/AuthComponent'
import { useLogout } from '../../features/user/useLogout'
import LogoutButton from '../buttons/LogoutButton'
import Loader from '../Loader'
import useCheckAuth from '../../features/user/useCheckAuth'
import { Toaster } from 'react-hot-toast'
export default function NavBar() {
    const [cartIsOpen, setCartIsOpen] = useState(false)
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const showAuth = useSelector((state) => state.auth.showAuth)
    const { logout, status } = useLogout()

    console.log(isAuthenticated, status)
    const isLoading = status === 'pending'
    useCheckAuth()

    return (
        <>
            <Toaster position="bottom-right" reverseOrder={true} />
            {showAuth ? <AuthComponenet /> : null}
            {isLoading ? <Loader /> : null}
            <nav className="fixed z-10 w-full">
                <div className="flex flex-col items-center justify-around bg-white px-5 py-3 text-lg sm:flex-row sm:px-0 sm:pt-4 sm:text-xl">
                    <NavLink
                        to="./"
                        className="mb-1 flex items-center justify-center text-xl font-bold text-gray-600 sm:mb-0 sm:text-2xl lg:text-[1.7rem]"
                    >
                        <img
                            src="/images/logo.png"
                            className="h-[1.4rem] w-[1.3] sm:h-[2rem] sm:w-[2.2rem]"
                        ></img>
                        <span className="ml-1">A</span>
                        -Gadget
                    </NavLink>
                    <div className="flex items-center px-2">
                        <NavLink
                            onClick={() => setCartIsOpen(false)}
                            to="/home"
                            className="pl-4 font-semibold hover:text-red-600 hover:transition-all hover:duration-300 sm:text-lg"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            onClick={() => setCartIsOpen(false)}
                            to="/categories?filter=all"
                            className="pl-4 font-semibold hover:text-red-600 hover:transition-all hover:duration-300 sm:text-lg"
                        >
                            Categories
                        </NavLink>
                        {isAuthenticated ? (
                            <>
                                <NavLink
                                    onClick={() => setCartIsOpen(false)}
                                    to="/orders"
                                    className="pl-4 font-semibold hover:text-red-600 hover:transition-all hover:duration-300 sm:text-lg"
                                >
                                    Orders
                                </NavLink>
                                <LogoutButton onClick={logout} />
                            </>
                        ) : (
                            <LoginButton />
                        )}
                        <div
                            className="ml-2 hover:cursor-pointer"
                            onClick={() => setCartIsOpen(!cartIsOpen)}
                        >
                            <Cart />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
