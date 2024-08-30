import { useDispatch } from 'react-redux'
import {
    decreaseItemQuantity,
    deleteItem,
    increaseItemQuantity,
} from './cartSlice'
import { toast } from 'react-hot-toast'

export default function useCartItems(item) {
    const dispatch = useDispatch()

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
    return {
        handleDeleteItem,
        handleIncreaseItemQuantity,
        handleDecreaseItemQuantity,
    }
}
