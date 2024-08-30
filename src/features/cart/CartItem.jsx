import Button from '../../ui/buttons/Button'

import DecreaseQuantityButton from '../../ui/buttons/DecreaseQuantityButton'
import IncreaseQuantityButton from '../../ui/buttons/IncreaseQuantityButton'
import useCartItems from './useCartItems'

export default function CartItem({ item }) {
    const {
        handleDeleteItem,
        handleIncreaseItemQuantity,
        handleDecreaseItemQuantity,
    } = useCartItems(item)

    return (
        <>
            <div className="mb-2 flex flex-col justify-center border-b-2 pt-4 text-black">
                <div className="flex justify-center">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-lg font-semibold">
                            {item.name}{' '}
                            <span className="text-gray-600">
                                x{item.quantity}
                            </span>
                        </h1>
                        <p className="text-base font-bold">
                            {' '}
                            <span className="text-sm font-semibold text-gray-800">
                                Unit Price:{' '}
                            </span>
                            ${item.price}
                        </p>
                    </div>
                    <img
                        src={item.photos[0]}
                        alt=""
                        className="ml-auto h-[75px] w-[75px] object-contain"
                    />
                </div>
                <div className="mb-4 mt-7 flex justify-between">
                    <div className="flex items-center gap-2">
                        <DecreaseQuantityButton
                            onClick={handleDecreaseItemQuantity}
                        />
                        <IncreaseQuantityButton
                            onClick={handleIncreaseItemQuantity}
                        />
                    </div>
                    <Button
                        onClick={handleDeleteItem}
                        text="Drop"
                        size="small"
                        hoverTextColor="red"
                    />
                </div>
            </div>
        </>
    )
}
