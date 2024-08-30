import { useQuery } from '@tanstack/react-query'
import { getItemsByStatus } from '../../services/apiItems'
import { toast } from 'react-hot-toast'

export default function useTrendingItems() {
    const {
        isLoading,
        data: items,
        error,
    } = useQuery({
        queryKey: ['trendingItems'],
        queryFn: () => getItemsByStatus('trending'),
    })
    if (error) toast.error('ERROR: ', error)

    return { isLoading, items }
}
