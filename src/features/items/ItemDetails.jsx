import Button from '../../ui/buttons/Button'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import {
    addItem,
    decreaseItemQuantity,
    deleteItem,
    getItemQuantity,
    increaseItemQuantity,
    isItemInCart,
} from '../cart/cartSlice'
import IncreaseQuantityButton from '../../ui/buttons/IncreaseQuantityButton'
import DecreaseQuantityButton from '../../ui/buttons/DecreaseQuantityButton'

export default function ItemDetails({ item }) {
    const dispatch = useDispatch()
    const inCart = useSelector(isItemInCart(item.id))
    const itemQuantity = useSelector(getItemQuantity(item.id))

    function handleAddItem() {
        const newitem = {
            id: item.id,
            name: item.name,
            price: item.price,
            photos: item.photos,
            quantity: 1,
            description: item.description,
        }
        dispatch(addItem(newitem))
        toast.success(`${item.name} Added Cart`)
    }
    function handleDeleteItem() {
        dispatch(deleteItem(item.id))
        toast.error(`${item.name} Removed from your Cart`)
    }

    function handleDecreaseItemQuantity() {
        dispatch(decreaseItemQuantity(item.id))
    }

    function handleIncreaseItemQuantity() {
        dispatch(increaseItemQuantity(item.id))
    }

    return (
        <>
            <div className="mx-2 mt-5 flex flex-col sm:mx-10 md:mx-16 lg:mx-20">
                <div className="sm:flex">
                    <p className="text-3xl font-semibold">{item.name}</p>
                    <p
                        className={`mt-[2px] text-right text-base font-semibold ${item.available ? 'text-green-400' : 'text-red-400 line-through'} text-justify sm:ml-4`}
                    >
                        {item.available && item.quantity
                            ? 'Available'
                            : 'Not Available'}
                    </p>
                </div>
                <ul>
                    <li className="mt-4 border-b py-2 text-base font-semibold">
                        <span className="mr-2 text-sm font-bold text-gray-600">
                            Description:
                        </span>
                        {item.description}
                    </li>
                    <li className="mt-1 border-b py-2 text-base font-semibold">
                        <span className="mr-2 text-sm font-bold text-gray-600">
                            Category:
                        </span>
                        {item.category}
                    </li>
                    <li className="mt-1 border-b py-2 text-base font-semibold text-green-400">
                        <span className="mr-2 text-sm font-bold text-gray-600">
                            Unit Price:
                        </span>
                        ${item.price}
                    </li>
                </ul>
                {!inCart && item.available && (
                    <div className="mt-9 flex items-center justify-end">
                        <Button
                            text="Add to cart"
                            onClick={handleAddItem}
                            hoverTextColor="green"
                        />
                    </div>
                )}
                {inCart && (
                    <>
                        <div className="flex items-center justify-between sm:flex-col md:flex-row">
                            <div className="mt-9 flex items-center gap-2">
                                <DecreaseQuantityButton
                                    onClick={handleDecreaseItemQuantity}
                                />
                                <p className="font-bold text-gray-600">
                                    {itemQuantity}
                                </p>
                                <IncreaseQuantityButton
                                    onClick={handleIncreaseItemQuantity}
                                />
                            </div>
                            <div className="mt-9 flex items-center justify-end sm:mt-2 md:mt-9">
                                <Button
                                    text="Drop Item"
                                    onClick={handleDeleteItem}
                                    hoverTextColor="red"
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
