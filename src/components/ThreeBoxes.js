import React from "react";

const ThreeBoxes = () => {
    return (
        <section className="pb-20 bg-gray-300 -mt-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                    <i className="far fa-file-alt"></i>
                                </div>
                                <h6 className="text-xl font-semibold">1. Enter your text</h6>
                                <p className="mt-2 mb-4 text-gray-600">
                                    Copy and paste the text that you want to classify to the text filed above and click ANALYZE to start the process
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                    <i className="fas fa-hourglass-start"></i>
                                </div>
                                <h6 className="text-xl font-semibold">
                                    2. Wait for the platform calculations
                                </h6>
                                <p className="mt-2 mb-4 text-gray-600">
                                    The platform is going to analyze your text and classify it according to the 4 categories mentioned bellow: 1: one, 2: two, 3: three, 4: four
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h6 className="text-xl font-semibold">
                                    3. Read and download the results
                                </h6>
                                <p className="mt-2 mb-4 text-gray-600">
                                    The results are displayed on your screen, you can now download them using the download button at the top right corner of the screen
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThreeBoxes