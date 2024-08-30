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
                    className="flex h-full w-full"
                >
                    <div className="flex h-full flex-col">
                        <div className="flex items-center justify-start bg-white p-4">
                            <button onClick={closeDrawer}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                                    />
                                </svg>
                            </button>
                            <h1 className="ml-4 border-b-2 border-red-400 text-2xl font-semibold">
                                CART
                            </h1>
                        </div>

                        {cart.length === 0 && (
                            <p className="flex flex-grow items-center justify-center text-base font-semibold text-gray-400">
                                Your cart is empty!
                            </p>
                        )}

                        {cart.length > 0 && (
                            <div className="flex h-full flex-col justify-between">
                                <div className="no-scrollbar h-[20rem] flex-grow overflow-y-auto px-5">
                                    {cart.map((item) => (
                                        <CartItem item={item} key={item.id} />
                                    ))}
                                </div>
                                <div className="bg-white p-4">
                                    <CartDetails closeDrawer={closeDrawer} />
                                </div>
                            </div>
                        )}
                    </div>
                </Card>
            </Drawer>
        </>
    )
}
