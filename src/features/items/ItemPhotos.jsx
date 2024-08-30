import { useEffect, useRef, useState } from 'react'

export default function ItemPhotos({ photos }) {
    const photoContainerRef = useRef(null)
    const [selectedPhoto, setSelectedPhoto] = useState(0)
    // Scrolling Functionality
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = photoContainerRef.current.scrollLeft
            const photoWidth = photoContainerRef.current.clientWidth
            const newSelectedPhoto = Math.round(scrollPosition / photoWidth)

            if (newSelectedPhoto !== selectedPhoto) {
                setSelectedPhoto(newSelectedPhoto)
            }
        }

        const photoContainer = photoContainerRef.current
        photoContainer.addEventListener('scroll', handleScroll)

        return () => {
            photoContainer.removeEventListener('scroll', handleScroll)
        }
    }, [selectedPhoto])

    return (
        <div className="flex flex-col items-center justify-center">
            <div
                ref={photoContainerRef}
                className="no-scrollbar flex h-[20rem] w-[20rem] snap-x snap-mandatory items-center justify-start overflow-x-scroll"
            >
                {photos.length > 0 ? (
                    photos.map((photo, index) => (
                        <img
                            key={index}
                            className="mx-2 h-[100%] w-auto min-w-[20rem] snap-center object-contain" // Ensure each image takes up space
                            src={photo}
                            alt={`Photo-${index + 1}`}
                        />
                    ))
                ) : (
                    <img
                        className="mx-2 h-[100%] w-auto min-w-[20rem] snap-center" // Ensure each image takes up space
                        src="https://plwmolwghzszhrgeoeaq.supabase.co/storage/v1/object/public/App%20Photos/noimg.png"
                        alt={`Not Available`}
                    />
                )}
            </div>
            <div className="mt-10 flex items-center justify-center">
                {photos &&
                    photos.map((_, index) => (
                        <p
                            key={index}
                            className={`m-1 h-2 w-2 rounded-full border border-gray-400 ${
                                selectedPhoto === index ? 'bg-gray-400' : ''
                            }`}
                        ></p>
                    ))}
            </div>
        </div>
    )
}
