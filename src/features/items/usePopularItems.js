import { useState } from 'react'
import { getItemsByStatus } from '../../services/apiItems'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

export default function usePopularITems() {
    const [maxShownItems, setMaxShownItems] = useState(6)
    const {
        isLoading,
        data: items,
        error,
    } = useQuery({
        queryKey: ['popularItems'],
        queryFn: () => getItemsByStatus('popular'),
    })
    if (error) toast.error('ERROR: ', error)

    function increaseShownItem() {
        setMaxShownItems((item) => item + 5)
    }
    return { increaseShownItem, maxShownItems, isLoading, items }
}
