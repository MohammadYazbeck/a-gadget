import Loader from '../../ui/Loader'
import Item from './Item'
import useTrendingItems from './useTrendingItems'

export default function TrendingItemList() {
    const { isLoading, items } = useTrendingItems()
    return (
        <>
            {!isLoading ? (
                <div className="mx-9 mb-14 flex w-[90%] flex-col items-center justify-center sm:w-[80%] 2xl:w-[60%]">
                    <ul className="no-scrollbar flex w-[90%] overflow-x-scroll">
                        {items?.map((item) => (
                            <Item
                                additionalClassname="mx-2"
                                item={item}
                                key={item.id}
                            />
                        ))}
                    </ul>
                </div>
            ) : (
                <>
                    <div className="h-[20rem]"></div>
                    <Loader />
                </>
            )}
        </>
    )
}
