export default function OrderDetails({ orderDetails }) {
    return (
        <div className="flex flex-col space-y-4">
            <p className="border-b-2 border-red-300 pb-2 text-2xl font-semibold text-red-500">
                Order #{orderDetails.id}
            </p>
            <div className="flex justify-between border-b pb-2">
                <p className="font-semibold text-gray-700">Order Id:</p>
                <p>{orderDetails.id}</p>
            </div>
            <div className="flex justify-between border-b pb-2">
                <p className="font-semibold text-gray-700">Fullname:</p>
                <p>{orderDetails.fullname}</p>
            </div>
            <div className="flex justify-between border-b pb-2">
                <p className="font-semibold text-gray-700">Address:</p>
                <p>{orderDetails.address}</p>
            </div>
            <div className="flex justify-between border-b pb-2">
                <p className="font-semibold text-gray-700">Phone:</p>
                <p>{orderDetails.phone}</p>
            </div>
            <div className="flex justify-between border-b pb-2">
                <p className="font-semibold text-gray-700">Order Status:</p>
                <p className="text-green-500">{orderDetails.status}</p>
            </div>
            <div className="flex justify-between border-b pb-2">
                <p className="font-semibold text-gray-700">
                    Order Total Price:
                </p>
                <p className="text-lg font-semibold text-red-500">
                    ${orderDetails.total_price}
                </p>
            </div>
        </div>
    )
}
