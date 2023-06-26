export const Features = () => {
    return (
        <div className="w-full h-full">
            <ol className="top-20 left-10 relative border-l border-gray-200 dark:border-gray-700">
                <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2023</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Watch-Movies UI code in Tailwind CSS</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
            </ol>
        </div>
    )
};