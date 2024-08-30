import { useQuery } from '@tanstack/react-query'
import { getOrders } from '../../services/apiOrder'
import { useSelector } from 'react-redux'
import { getUser } from '../user/userSlice'
import { toast } from 'react-hot-toast'
export default function useOrderList() {
    const user = useSelector(getUser)
    const {
        isLoading,
        data: orders,
        error,
    } = useQuery({
        queryKey: ['orders'],
        queryFn: () => getOrders(user.userid),
    })
    console.log(orders)
    if (error) toast.error('ERROR: ', error)
    return { isLoading, orders }
}
