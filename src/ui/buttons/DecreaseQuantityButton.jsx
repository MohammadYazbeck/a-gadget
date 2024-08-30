export default function DecreaseQuantityButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="hover mx-1 flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-lg border-2 border-gray-300 text-xl text-gray-800 hover:cursor-pointer hover:border-red-50 hover:bg-red-50"
        >
            -
        </button>
    )
}
