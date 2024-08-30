import Button from '../../ui/buttons/Button'
import Item from './Item'
import Loader from '../../ui/Loader'
import usePopularITems from './usePopularItems'

export default function PopularItemList() {
    const { increaseShownItem, maxShownItems, isLoading, items } =
        usePopularITems()
    return (
        <>
            {!isLoading ? (
                <div className="flex flex-col items-center justify-center">
                    <div className="my-scrollbar flex flex-col items-center justify-between overflow-x-hidden overflow-y-scroll px-5">
                        <ul className="grid min-h-[100%] min-w-[85%] grid-cols-2 gap-4 sm:min-w-[80%] sm:grid-cols-2 md:min-w-[75%] lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
                            {items?.map(
                                (item, index) =>
                                    index < maxShownItems && (
                                        <Item item={item} key={item.id} />
                                    )
                            )}
                        </ul>
                    </div>
                    <div className="mt-7">
                        {items?.length > maxShownItems && (
                            <Button
                                text="Show More"
                                onClick={increaseShownItem}
                            />
                        )}
                    </div>
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
