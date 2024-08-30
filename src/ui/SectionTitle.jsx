export default function SectionTitle({ title, additionalClassName }) {
    return (
        <div
            className={`${additionalClassName} mb-10 mt-10 flex items-center text-black`}
        >
            <p
                className={`mx-4 h-[29px] w-[150px] border-b-2 border-red-400 text-left text-xl font-bold`}
            >
                {title}
            </p>
        </div>
    )
}
