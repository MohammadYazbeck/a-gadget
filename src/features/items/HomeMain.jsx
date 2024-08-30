import { Link } from 'react-router-dom'

export default function HomeMain() {
    return (
        <div className="mx-[3rem] mb-5 flex h-[40dvh] flex-col items-center justify-center text-gray-700 sm:grid sm:grid-cols-4 sm:grid-rows-2 sm:gap-1 md:mx-[5rem] md:h-[45dvh] lg:mx-[8rem] lg:h-[50dvh] xl:mx-[19rem] xl:h-[55dvh] 2xl:mx-[25rem]">
            <div className="m-2 h-[4rem] w-[85dvw] hover:cursor-pointer hover:opacity-95 hover:shadow-md hover:shadow-gray-700 sm:col-span-2 sm:row-span-2 sm:m-3 sm:h-[100%] sm:w-[100%]">
                <Link
                    to="/categories?filter=electronics"
                    className="block h-full w-full"
                >
                    <img
                        src="https://plwmolwghzszhrgeoeaq.supabase.co/storage/v1/object/public/App%20Photos/Main%20Page/main1.jpg"
                        alt="electronics"
                        className="h-16 w-[100%] sm:h-[100%]"
                    />
                    <p className="relative bottom-[3rem] text-center text-4xl font-bold sm:bottom-[3rem] sm:ml-4 sm:text-left sm:text-2xl md:text-3xl">
                        Electronics
                    </p>
                </Link>
            </div>

            <div className="m-2 h-[4rem] w-[85dvw] hover:cursor-pointer hover:opacity-90 hover:shadow-md hover:shadow-gray-700 sm:col-start-3 sm:row-span-2 sm:m-0 sm:ml-3 sm:h-[100%] sm:w-[100%]">
                <Link
                    to="/categories?filter=clothing"
                    className="block h-full w-full"
                >
                    <img
                        src="https://plwmolwghzszhrgeoeaq.supabase.co/storage/v1/object/public/App%20Photos/Main%20Page/main2.webp"
                        alt="clothing"
                        className="h-16 w-[100%] sm:h-[100%]"
                    />
                    <p className="relative bottom-[3rem] text-center text-4xl font-bold sm:bottom-[3rem] sm:ml-4 sm:text-left sm:text-2xl md:text-3xl">
                        Clothing
                    </p>
                </Link>
            </div>

            <div className="m-2 h-[4rem] w-[85dvw] hover:cursor-pointer hover:opacity-90 hover:shadow-md hover:shadow-gray-700 sm:col-start-4 sm:m-0 sm:ml-3 sm:h-[100%] sm:w-[100%]">
                <Link
                    to="/categories?filter=books"
                    className="block h-full w-full"
                >
                    <img
                        src="https://plwmolwghzszhrgeoeaq.supabase.co/storage/v1/object/public/App%20Photos/Main%20Page/main3.jpg"
                        alt="books"
                        className="h-16 w-[100%] sm:h-[100%]"
                    />
                    <p className="relative bottom-[3rem] text-center text-4xl font-bold sm:bottom-[3rem] sm:ml-4 sm:text-left sm:text-2xl md:text-3xl">
                        Books
                    </p>
                </Link>
            </div>

            <div className="m-2 h-[4rem] w-[85dvw] hover:cursor-pointer hover:opacity-90 hover:shadow-md hover:shadow-gray-700 sm:col-start-4 sm:row-start-2 sm:m-0 sm:ml-3 sm:h-[100%] sm:w-[100%]">
                <Link
                    to="/categories?filter=furniture"
                    className="block h-full w-full"
                >
                    <img
                        src="https://plwmolwghzszhrgeoeaq.supabase.co/storage/v1/object/public/App%20Photos/Main%20Page/main4.avif"
                        alt="furniture"
                        className="h-16 w-[100%] sm:h-[100%]"
                    />
                    <p className="relative bottom-[3rem] text-center text-4xl font-bold sm:bottom-[3rem] sm:ml-4 sm:text-left sm:text-2xl md:text-3xl">
                        Furniture
                    </p>
                </Link>
            </div>
        </div>
    )
}
