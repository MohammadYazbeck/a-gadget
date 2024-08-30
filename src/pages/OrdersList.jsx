import useOrderList from '../features/order/useOrderList'
import Order from '../features/order/Order'
import Loader from '../ui/Loader'

export default function Orders() {
    const { isLoading, orders } = useOrderList()

    return (
        <div className="flex min-h-screen flex-col items-center p-4 pt-32 hover:cursor-default">
            {isLoading && <Loader />}
            {!isLoading && orders.length > 0 ? (
                <div className="mx-auto w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl">
                    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                        {orders &&
                            orders.map((order) => (
                                <Order order={order} key={order.id} />
                            ))}
                    </ul>
                </div>
            ) : (
                <p className="mt-20 text-xl font-semibold text-gray-500">
                    You have not placed any order yet!
                </p>
            )}
        </div>
    )
}
