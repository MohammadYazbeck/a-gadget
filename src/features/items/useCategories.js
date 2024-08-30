import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { getItemsByCategory } from '../../services/apiItems'
import { toast } from 'react-hot-toast'

export default function useCategories() {
    const [searchParams] = useSearchParams()
    const category = searchParams.get('filter')
    const {
        isLoading,
        data: items,
        error,
    } = useQuery({
        queryKey: [`${category}Items`],
        queryFn: () => getItemsByCategory(category),
    })
    if (error) toast.error('ERROR: ', error)
    return { isLoading, items }
}
