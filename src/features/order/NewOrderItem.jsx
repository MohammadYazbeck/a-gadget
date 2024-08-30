import { useSelector } from 'react-redux'
import { getItemQuantity } from '../cart/cartSlice'
import { useNavigate } from 'react-router-dom'

export default function NewOrderItem({ item }) {
    const itemQuantity = useSelector(getItemQuantity(item.id))
    const navigate = useNavigate()
    console.log(item)

    return (
        <li
            onClick={() =>
                navigate(`../item/${item.name + item.description + item.id}`)
            }
        >
            <div className="text mb-2 flex items-center justify-between border-b-2 pb-1 text-blue-gray-800 hover:cursor-pointer hover:text-red-900 sm:text-lg">
                <p className="font-semibold">{item.name}</p>
                <p>x{itemQuantity}</p>
            </div>
        </li>
    )
}
