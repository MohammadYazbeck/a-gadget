import supabase from './supabase'

export async function placeNewOrder(order) {
    const { data: orderResponse, error: placingOrderError } = await supabase
        .from('Orders')
        .insert([
            {
                address: order.address,
                status: 'inProgress',
                user_id: order.userId,
                fullname: order.fullname,
                phone: order.phone,
                total_price: order.totalPrice,
            },
        ])
        .select()

    if (placingOrderError) {
        console.error('Error placing order:', placingOrderError)
        throw new Error('Could not place the order')
    }

    const orderId = orderResponse[0].id

    const orderItems = order.items.map((item) => ({
        item_id: item.id,
        order_id: orderId,
        quantity: item.quantity,
    }))

    console.log(orderItems)

    const { data: itemsResponse, error: linkingOrderError } = await supabase
        .from('Order_Items')
        .insert(orderItems)

    if (linkingOrderError) {
        console.error('Error linking order items:', linkingOrderError)
        // Rollback order insertion if linking fails
        await supabase.from('Orders').delete().eq('id', orderId)
        throw new Error('Could not link order items')
    }

    return { order: orderResponse, items: itemsResponse }
}

export async function getOrders(userId) {
    const { data, error } = await supabase
        .from('Orders')
        .select(
            `
            id,
            address,
            status,
            fullname,
            phone,
            total_price,
            Order_Items (
                order_id,
                quantity,
                item_id,
                Items (
                    id,
                    name,
                    description
                )
            )
        `
        )
        .eq('user_id', userId)

    if (error) {
        console.error('Error fetching orders:', error)
        return []
    }

    return data
}
