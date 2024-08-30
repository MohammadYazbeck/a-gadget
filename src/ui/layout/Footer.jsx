export default function Footer() {
    const date = new Date()
    return (
        <div className="flex h-[10rem] w-[100%] flex-col items-center justify-around pt-4">
            <div className="mt-auto w-[100%] flex-col bg-gray-100 sm:flex sm:flex-row sm:items-center sm:justify-around">
                <div className="flex items-center justify-center">
                    <p className="my-auto hidden font-bold text-gray-500 sm:block">
                        Made with:
                    </p>
                    <a
                        href="https://www.javascript.com/"
                        className="ml-2 w-[3rem] hover:opacity-80"
                    >
                        <img
                            src="https://plwmolwghzszhrgeoeaq.supabase.co/storage/v1/object/public/App%20Photos/Footer/js.png"
                            alt="js"
                        />
                    </a>
                    <a
                        href="https://react.dev/"
                        className="ml-2 w-[3rem] hover:opacity-80"
                    >
                        <img
                            src="https://plwmolwghzszhrgeoeaq.supabase.co/storage/v1/object/public/App%20Photos/Footer/react.png"
                            alt="React.js"
                        />
                    </a>
                    <a
                        href="https://tailwindcss.com/"
                        className="ml-2 w-[8rem] hover:opacity-80"
                    >
                        <img
                            src="https://plwmolwghzszhrgeoeaq.supabase.co/storage/v1/object/public/App%20Photos/Footer/tailwind.png"
                            alt="Tailwind CSS"
                        />
                    </a>
                    <a
                        href="https://supabase.com/"
                        className="w-[8rem] hover:opacity-80"
                    >
                        <img
                            src="https://plwmolwghzszhrgeoeaq.supabase.co/storage/v1/object/public/App%20Photos/Footer/supabase.png"
                            alt="Supabase"
                        />
                    </a>
                </div>
                <p className="py-3 text-center font-semibold hover:cursor-default">
                    © {date.getFullYear()} Copyright{' '}
                    <span className="font-bold text-gray-600">
                        <span className="text-red-600">A</span>-Gadget
                    </span>
                </p>
            </div>
        </div>
    )
}
