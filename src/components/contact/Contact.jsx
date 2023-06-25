
export const Contact = () => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
                <div className="max-h-96 md:h-screen">
                    <img className="w-screen h-screen object-cover object-top" src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
                <div className="flex bg-gray-100 p-10">
                    <div className="mb-auto mt-auto max-w-lg">
                        <h1 className="text-3xl">Nicolas Ggd</h1>
                        <p className="font-semibold mb-5">Web Developer</p>
                        <p>Never say never, because the limits like fears are often just an illusion.</p>
                        <button className="bg-black rounded-md py-3 px-7 mt-6 text-white">Email Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
};