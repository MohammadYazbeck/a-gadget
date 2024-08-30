import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Drawer, Card } from '@material-tailwind/react'
import { getCart } from './cartSlice'
import CartItem from './CartItem'
import OpenCartButton from '../../ui/buttons/OpenCartButton'
import CartDetails from './CartDetails'

export default function Cart() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const openDrawer = () => setIsDrawerOpen(true)
    const closeDrawer = () => setIsDrawerOpen(false)
    const cart = useSelector(getCart)

    return (
        <>
            <OpenCartButton onClick={openDrawer} isDrawerOpen={isDrawerOpen} />
            <Drawer
                open={isDrawerOpen}
                placement="right"
                onClose={closeDrawer}
                overlay={true}
                size={400}
                overlayProps={{
                    className: 'fixed cursor-default',
                }}
            >
                <Card
                    color="transparent"
                    shadow={false}
                    className="px- h-[calc(100vh-2rem)] w-full cursor-default"
                >
                    <div className="flex-col items-center justify-center p-4">
                        <div className="fixed top-0 z-20 flex w-full items-center bg-white py-8">
                            <button onClick={closeDrawer}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                    stroke="currentColor"
                                    className="size-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                                    />
                                </svg>
                            </button>
                            <h1 className="ml-4 w-[7rem] border-b-2 border-red-400 text-left text-2xl font-semibold">
                                CART
                            </h1>
                        </div>
                        {cart.length === 0 && (
                            <p className="flex items-center justify-center text-base font-semibold text-gray-400">
                                You cart is empty!
                            </p>
                        )}
                        <div className="no-scrollbar mt-20 h-[47rem] w-full overflow-y-scroll border-b-4 px-5">
                            {cart.length > 0 &&
                                cart.map((item) => (
                                    <CartItem item={item} key={item.id} />
                                ))}
                        </div>
                        {cart.length > 0 && (
                            <CartDetails closeDrawer={closeDrawer} />
                        )}
                    </div>
                </Card>
            </Drawer>
        </>
    )
}
