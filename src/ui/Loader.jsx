import { TailSpin } from 'react-loader-spinner'

export default function Loader({ className }) {
    return (
        <div
            className={`text-red-6 fixed right-0 top-0 z-30 flex h-[100%] w-[100%] flex-col items-center justify-center bg-black/30 ${className}`}
        >
            <TailSpin
                visible={true}
                height="50"
                width="70"
                color="#e57373"
                radius="0"
                ariaLabel="tail-spin-loading"
                wrapperClass=""
            />
        </div>
    )
}
