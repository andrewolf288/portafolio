import {useState} from "react";

export default function ModalProjectDetail({ detail, onClose }) {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % detail.images.length);
    };

    const handlePrev = () => {
        setCurrentImage((prev) =>
            prev === 0 ? detail.images.length - 1 : prev - 1
        );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg w-11/12 max-w-5xl flex flex-col md:flex-row">
                {/* Carousel */}
                <div className="relative w-full md:w-1/2 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-t-lg md:rounded-t-none md:rounded-l-lg overflow-hidden">
                    <img
                        src={`/portafolio${detail.images[currentImage]}`}
                        alt={`Project image ${currentImage + 1}`}
                        className="w-full min-h-60 transition duration-500 sm:h-full md:scale-100"
                    />
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
                    >
                        &#8592;
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
                    >
                        &#8594;
                    </button>
                </div>

                {/* Project Details */}
                <div className="w-full md:w-1/2 p-6 flex flex-col gap-y-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                            {detail.title}
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            aria-label="Close"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                            Características:
                        </h3>
                        <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400">
                            {detail.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}