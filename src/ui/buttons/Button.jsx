export default function Button({ onClick, text, size, hoverTextColor }) {
    return (
        <button
            className={`border-1 m-1 ${size === 'small' ? 'h-8 w-36 text-base' : 'h-10 w-40'} hover:bg-gray-10 rounded-full font-bold text-gray-600 shadow-md hover:border-none hover:transition-colors ${hoverTextColor === 'green' ? 'hover:text-green-400' : hoverTextColor === 'red' ? 'hover:text-red-400' : 'hover:text-gray-600'}`}
            onClick={onClick}
        >
            <p>{text}</p>
        </button>
    )
}
