import { useSearchParams } from 'react-router-dom'

export default function FilterOptionButton({ text }) {
    const [searchParams, setSearchParams] = useSearchParams()

    const isDefaultFilter =
        searchParams.get('filter') === null && text.toLowerCase() == 'all'

    return (
        <button
            className={`border-1 m-2 h-10 w-24 font-semibold text-gray-500 shadow-md hover:border-none hover:bg-gray-100 hover:text-red-600 hover:transition-colors ${searchParams.get('filter') === text.toLowerCase() ? 'text-red-400' : 'text-gray-500'} ${isDefaultFilter ? 'text-red-400' : 'text-gray-500'}`}
            onClick={() => setSearchParams({ filter: text.toLowerCase() })}
        >
            {text}
        </button>
    )
}
