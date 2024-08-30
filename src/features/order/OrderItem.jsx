import { useNavigate } from 'react-router-dom'
export default function OrderItem({ orderItem }) {
    const navigate = useNavigate()
    return (
        <li
            onClick={() =>
                navigate(
                    `../item/${orderItem.Items.name + orderItem.Items.description + orderItem.Items.id}`
                )
            }
            className="flex justify-between border-b p-2 text-blue-gray-800 hover:cursor-pointer hover:text-red-900"
        >
            <p className="t font-bold">{orderItem.Items.name}</p>
            <p className="font-semibold">x{orderItem.quantity}</p>
        </li>
    )
}
