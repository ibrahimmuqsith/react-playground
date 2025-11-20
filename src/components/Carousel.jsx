import React, { useState } from "react";
import { CAROUSEL_IMAGES } from "../utils/constants";

const Carousel = () => {
    const [imageIndex, setImageIndex] = useState(0)

    const nextImage = () => {
        if (imageIndex + 1 === CAROUSEL_IMAGES.length) {
            setImageIndex(0)
        } else {
            setImageIndex(imageIndex + 1)
        }
    }

    const previousImage = () => {
        if (imageIndex === 0) {
            setImageIndex(CAROUSEL_IMAGES.length - 1)
        } else {
            setImageIndex(imageIndex - 1)
        }
    }

    return (
        <div className="flex justify-center">
            <button
                className="bg-green-300 cursor-pointer px-2 mx-3 rounded min-w-20"
                onClick={() => previousImage()}
            >
                Previous
            </button>
            <img
                className="max-w-[80%] rounded"
                alt="carousel"
                src={CAROUSEL_IMAGES[imageIndex]}
            >
            </img>
            <button
                className="bg-green-300 cursor-pointer px-2 mx-3 rounded min-w-20"
                onClick={() => nextImage()}
            >
                Next
            </button>
        </div>
    )
}

export default Carousel