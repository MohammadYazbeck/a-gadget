export default function IncreaseQuantityButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="mx-1 flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-lg border-2 border-gray-300 text-xl text-gray-800 hover:cursor-pointer hover:border-green-50 hover:bg-green-50"
        >
            +
        </button>
    )
}
