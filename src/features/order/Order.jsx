import OrderDetails from './OrderDetails'
import OrderItem from './OrderItem'

export default function Order({ order }) {
    return (
        <li className="flex w-full flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-md">
            <OrderDetails orderDetails={order} />
            <div className="mt-4">
                <p className="mb-2 border-b-2 pb-2 text-lg font-semibold text-gray-700">
                    Order Items
                </p>
                <ul>
                    {order.Order_Items.map((orderItem) => (
                        <OrderItem
                            orderItem={orderItem}
                            key={orderItem.item_id}
                        />
                    ))}
                </ul>
            </div>
        </li>
    )
}
