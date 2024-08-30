import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getItemById, getItemsByCategory } from '../../services/apiItems'
import { toast } from 'react-hot-toast'

export default function useItemDetailsPage() {
    const { nameDescriptionId } = useParams('nameDescriptionId')
    const id = Number(
        nameDescriptionId.substring(nameDescriptionId.lastIndexOf('.') + 1)
    )

    const {
        isLoading: isLoadingItem,
        data: detailedItem,
        error: itemError,
    } = useQuery({
        queryKey: [`#${id}Item`],
        queryFn: () => getItemById(id),
    })

    if (itemError) toast.error('ERROR: ', itemError)

    const {
        isLoading: isLoadingItemsList,
        data: categoryItems,
        error: categoryItemsError,
    } = useQuery({
        enabled: !!detailedItem,
        queryKey: [
            detailedItem ? `${detailedItem.category.toLowerCase()}Items` : '',
        ],
        queryFn: () => getItemsByCategory(detailedItem.category.toLowerCase()),
    })

    if (categoryItemsError) toast.error('ERROR: ', categoryItemsError)

    return {
        isLoadingItem,
        isLoadingItemsList,
        detailedItem,
        categoryItems,
    }
}
