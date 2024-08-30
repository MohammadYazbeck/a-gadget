import ItemPhotos from '../features/items/ItemPhotos'
import ItemDetails from '../features/items/ItemDetails'
import SectionTitle from '../ui/SectionTitle'
import FilterdItemList from '../features/items/FilterdItemList'
import Loader from '../ui/Loader'
import ItemInfo from '../features/items/ItemInfo'
import useItemDetailsPage from '../features/items/useItemDetailsPage'

export default function ItemDetailsPage() {
    const { isLoadingItem, isLoadingItemsList, detailedItem, categoryItems } =
        useItemDetailsPage()

    if (isLoadingItem || isLoadingItemsList)
        return (
            <>
                <div className="h-screen"></div>
                <Loader />
            </>
        )

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="mx-5 h-[100%] flex-col justify-center pt-40 md:flex md:flex-row md:xl:w-[80%]">
                <ItemPhotos photos={detailedItem.photos} />
                <ItemDetails item={detailedItem} />
            </div>
            <div className="mx-auto w-[100%] xl:w-[75%]">
                <SectionTitle
                    title="Item Information"
                    additionalClassName={
                        'sticky ml-5 sm:ml-8 md:ml-11 lg:ml-14 xl:ml-24'
                    }
                />
                <ItemInfo item={detailedItem} />
            </div>
            <div className="mx-auto w-[100%] xl:w-[75%]">
                <SectionTitle
                    title={`Other ${detailedItem.category}`}
                    additionalClassName={
                        'sticky ml-5 sm:ml-8 md:ml-11 lg:ml-14 xl:ml-24 '
                    }
                />
                <FilterdItemList items={categoryItems} />
            </div>
        </div>
    )
}
