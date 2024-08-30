export default function OrderButton({ onClick, text }) {
    return (
        <button
            className={`s mt-4 h-10 w-40 rounded-full border border-gray-400 bg-gray-50 font-bold text-gray-700 shadow-sm hover:bg-gray-100 hover:text-green-600`}
            onClick={onClick}
        >
            <p>{text}</p>
        </button>
    )
}
