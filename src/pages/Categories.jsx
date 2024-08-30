import FilterOptionButton from '../features/items/FilterOptionButton'
import FilterdItemList from '../features/items/FilterdItemList'
import useCategories from '../features/items/useCategories'

import Loader from '../ui/Loader'

export default function Categories() {
    const { isLoading, items } = useCategories()
    const categories = [
        'All',
        'Electronics',
        'Books',
        'Furniture',
        'Clothing',
        'Home',
        'Tools',
        'Food',
    ]

    return (
        <div className="flex h-[100%] flex-col items-center justify-center">
            <div
                className={`mt-20 grid h-[20%] max-w-[80%] grid-cols-3 gap-0 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8`}
            >
                {categories.map((category) => (
                    <FilterOptionButton text={category} key={category} />
                ))}
            </div>
            <div className="mt-10 w-[85%] md:w-[70%]">
                {!isLoading ? (
                    <FilterdItemList items={items} />
                ) : (
                    <>
                        <div className="h-screen"></div>
                        <Loader />
                    </>
                )}
            </div>
        </div>
    )
}
