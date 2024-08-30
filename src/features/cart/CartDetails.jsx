import OrderButton from '../../ui/buttons/OrderButton'
import useCartDetails from './useCartDetails'

export default function CartDetails({ closeDrawer }) {
    const { totalItmes, totalQuantity, totalPrice, handleClickOrder } =
        useCartDetails(closeDrawer)
    return (
        <div className="mt-4 flex flex-col font-bold text-black">
            <div className="m-1 flex items-center justify-between border-b">
                <p>Total Items:</p>
                <p>{totalItmes}</p>
            </div>
            <div className="m-1 flex items-center justify-between border-b">
                <p>Total Quantity:</p>
                <p>{totalQuantity}</p>
            </div>{' '}
            <div className="m-1 flex items-center justify-between border-b">
                <p>Total Price:</p>
                <p className="text-xl text-green-600">${totalPrice}</p>
            </div>
            <div className="mt-2 flex items-center justify-center">
                <OrderButton onClick={handleClickOrder} text="Order Now" />
            </div>
        </div>
    )
}
