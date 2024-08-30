import { useNavigate } from 'react-router-dom'

export default function Item({ item, additionalClassname }) {
    const navigate = useNavigate()
    const nameDescriptionId = item.name + item.description + item.id
    return (
        <li
            onClick={() => {
                navigate(`/item/${nameDescriptionId}`)
            }}
            className={
                `mx-1 flex flex-col items-center justify-center border p-2 text-black hover:cursor-pointer hover:border-b-2 hover:border-b-gray-400 hover:shadow-lg ` +
                additionalClassname
            }
        >
            <div className="h-[160px] w-[130px] p-4 sm:h-[200px] sm:w-[160px] md:h-[220px] md:w-[200px]">
                {item.photos ? (
                    <img
                        src={item.photos[0]}
                        className="h-full w-full object-contain"
                        alt=""
                    />
                ) : (
                    <img
                        src="https://plwmolwghzszhrgeoeaq.supabase.co/storage/v1/object/public/App%20Photos/noimg.png"
                        className="h-full w-full object-contain"
                        alt=""
                    />
                )}
            </div>

            <div className="ml-4 mr-auto mt-5 flex h-20 flex-col border-t pt-2 text-sm sm:text-base lg:text-lg">
                <p className="font-bold uppercase">{item.name}</p>
                <p className="mt-1 text-sm">
                    <span className="font-bold">Category: </span>
                    {item.category}
                </p>
            </div>
            <p className="sm mb-5 ml-auto mr-5 mt-10 flex font-bold text-green-400 sm:mt-8 lg:mt-4">
                ${item.price}
            </p>
        </li>
    )
}
