export default function ItemInfo({ item }) {
    const relatedAccessoriesLength = item.related_accessories.length - 1
    const variantsLength = item.variants.length - 1

    return (
        <div className="mx-10 flex flex-col lg:mx-40">
            {/* Variants */}

            <div className="mb-3 flex items-center border-b-2 pb-4">
                <p className="font-semibold text-gray-700">Variant:</p>
                <ul className="ml-5 flex">
                    {item.variants.map((variant, index) => (
                        <li className="mx-2 font-semibold" key={variant}>
                            {variant}
                            {index < variantsLength ? ',' : ''}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Related Accessories */}

            <div className="mb-3 flex items-center border-b-2 pb-4">
                <p className="font-semibold text-gray-700">
                    Related Accessories:
                </p>
                <ul className="ml-5 flex">
                    {item.related_accessories.map((accessorie, index) => (
                        <li className="mx-2 font-semibold" key={accessorie}>
                            {accessorie}
                            {index < relatedAccessoriesLength ? ',' : ''}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Brand Infromation */}

            <div className="mb-3 flex items-center border-b-2 pb-4">
                <p className="font-semibold text-gray-700">
                    Brand Infromation:
                </p>
                <p className="ml-7 font-semibold">{item.brand_information}</p>
            </div>

            {/* Delivery Infromation */}

            <div className="mb-3 flex items-center border-b-2 pb-4">
                <p className="font-semibold text-gray-700">
                    Delivery Infromation:
                </p>
                <p className="ml-7 font-semibold">
                    {item.delivery_information}
                </p>
            </div>

            {/* Warranty */}

            <div className="mb-3 flex items-center border-b-2 pb-4">
                <p className="font-semibold text-gray-700">Warranty Return:</p>
                <p className="ml-7 font-semibold">
                    {item.warranty_return_policy}
                </p>
            </div>

            {/* Rating */}

            <div className="mb-3 flex items-center border-b-2 pb-4">
                <p className="font-semibold text-gray-700">Average Rating:</p>
                <p className="ml-7 font-semibold">
                    ⭐ {item.customer_reviews.average_rating}
                </p>
            </div>

            {/* Highlighted Review */}

            <div className="mb-3 flex items-center border-b-2 pb-4">
                <p className="font-semibold text-gray-700">
                    Highlighted Review:
                </p>
                <p className="ml-7 font-normal italic text-gray-800">
                    &quot;{item.customer_reviews.highlighted_reviews}&quot;
                </p>
            </div>
            {/* Specification */}
            <div className="items- mb-3 flex flex-col pb-4">
                <p className="w-[8.3rem] border-b border-gray-400 text-lg font-semibold text-red-700">
                    Specifications
                </p>
                <ul className="mt-4">
                    {Array.from(Object.keys(item.specifications)).map(
                        (entry) => (
                            <li
                                key={entry}
                                className="border-b p-1 pl-8 font-semibold capitalize text-gray-700"
                            >
                                {entry}:
                                <span className="ml-7 font-bold text-black">
                                    {entry === 'available_sizes'
                                        ? item.specifications[entry].map(
                                              (size) => size + ', '
                                          )
                                        : item.specifications[entry]}
                                </span>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    )
}
