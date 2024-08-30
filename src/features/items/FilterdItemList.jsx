import Item from './Item'

export default function FilterdItemList({ items }) {
    return (
        <div className="mx-auto flex h-[77dvh] w-[100%] flex-col items-center justify-center xl:w-[80%]">
            {items && items.length > 0 ? (
                <ul className="no-scrollbar grid h-full w-full grid-cols-2 gap-3 overflow-y-scroll sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
                    {items.map((item) => (
                        <Item item={item} key={item.id} />
                    ))}
                </ul>
            ) : (
                <p className="text-xl text-gray-400"> No Items Found</p>
            )}
        </div>
    )
}
