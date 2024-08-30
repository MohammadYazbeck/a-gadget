import OrderButton from '../../ui/buttons/OrderButton'
import useCartDetails from './useCartDetails'

export default function CartDetails({ closeDrawer }) {
    const { totalItems, totalQuantity, totalPrice, handleClickOrder } =
        useCartDetails(closeDrawer)

    return (
        <div className="flex flex-col p-4 font-bold text-black">
            <div className="flex items-center justify-between border-b py-2">
                <p>Total Items:</p>
                <p>{totalItems}</p>
            </div>
            <div className="flex items-center justify-between border-b py-2">
                <p>Total Quantity:</p>
                <p>{totalQuantity}</p>
            </div>
            <div className="flex items-center justify-between border-b py-2">
                <p>Total Price:</p>
                <p className="text-xl text-green-600">${totalPrice}</p>
            </div>
            <div className="mt-4 flex justify-center">
                <OrderButton onClick={handleClickOrder} text="Order Now" />
            </div>
        </div>
    )
}
