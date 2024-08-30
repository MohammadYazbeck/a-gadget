import { useState } from 'react'

import NewOrderItem from '../features/order/NewOrderItem'
import { useNewOrder } from '../features/order/useNewOrder'
import OrderButton from '../ui/buttons/OrderButton'
import Loader from '../ui/Loader'

export default function NewOrder() {
    const [fullname, setFullname] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const {
        items,
        totalPrice,
        errors,
        handleInputChange,
        handleSubmit,
        validateAddress,
        validateFullname,
        validatePhone,
        status,
    } = useNewOrder(fullname, address, phone)

    return (
        <>
            {status === 'pending' && <Loader />}
            <div className="flex h-full w-full items-start justify-center">
                <form
                    className="flex flex-col justify-center pt-36"
                    onSubmit={handleSubmit}
                >
                    <p className="mb-8 rounded-t-lg border-b-2 border-red-500 py-3 text-center text-2xl font-bold hover:cursor-default sm:mb-14">
                        Placing Order
                    </p>
                    <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:text-lg">
                        <label className="font-bold text-gray-700">
                            Full Name:
                        </label>
                        <div>
                            <input
                                className="h-9 w-72 rounded-full border-2 border-gray-400 px-5 text-base hover:border-red-200 focus:border-none focus:bg-red-50/25 focus:outline-red-200 sm:h-10 sm:w-72"
                                type="text"
                                name="fullname"
                                value={fullname}
                                placeholder="Enter your full name"
                                onChange={(e) =>
                                    handleInputChange(
                                        e,
                                        validateFullname,
                                        setFullname
                                    )
                                }
                                required
                            />
                            {errors.fullname && (
                                <p className="text-right text-sm text-red-500">
                                    {errors.fullname}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:text-lg">
                        <label className="font-bold text-gray-700">
                            Address:
                        </label>
                        <div>
                            <input
                                className="h-9 w-72 rounded-full border-2 border-gray-400 px-5 text-base hover:border-red-200 focus:border-none focus:bg-red-50/25 focus:outline-red-200 sm:h-10 sm:w-72"
                                type="text"
                                name="address"
                                placeholder="Enter your correct address"
                                value={address}
                                onChange={(e) =>
                                    handleInputChange(
                                        e,
                                        validateAddress,
                                        setAddress
                                    )
                                }
                                required
                            />
                            {errors.address && (
                                <p className="text-right text-sm text-red-500">
                                    {errors.address}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:text-lg">
                        <label className="font-bold text-gray-700">
                            Phone Number:
                        </label>
                        <div>
                            <input
                                className="h-9 w-72 rounded-full border-2 border-gray-400 px-5 text-base hover:border-red-200 focus:border-none focus:bg-red-50/25 focus:outline-red-200 sm:h-10 sm:w-72"
                                type="tel"
                                name="phone"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) =>
                                    handleInputChange(
                                        e,
                                        validatePhone,
                                        setPhone
                                    )
                                }
                                required
                            />
                            {errors.phone && (
                                <p className="text-right text-sm text-red-500">
                                    {errors.phone}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="my-5 flex flex-col">
                        <label className="mb-2 text-left text-lg font-bold text-red-400 sm:mb-5 sm:text-xl">
                            Cart Details
                        </label>

                        <ul className="mb-4">
                            {items &&
                                items.map((item) => (
                                    <NewOrderItem item={item} key={item.id} />
                                ))}
                        </ul>

                        <div className="mb-4 flex items-center justify-between hover:cursor-default">
                            <label className="text-left text-lg font-bold text-gray-800 sm:text-xl">
                                Total Price:
                            </label>
                            <p className="text-lg font-semibold text-green-500 sm:text-xl">
                                ${totalPrice}
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <OrderButton
                                text="Submit Order"
                                onClick={handleSubmit}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
