import { useState } from "react";
import { MainHeader } from "../header/Header";

import { ContactModal } from "./ContactModal";

export const Contact = () => {
    const [isClick, setIsClick] = useState(false);

    const contactEmailHandler = () => {
        setIsClick(prevData => !prevData);
    };

    return (
        <div className="w-full h-full dark:bg-gray-800">
            <MainHeader />
            <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
                <div className="max-h-96 md:h-screen">
                    <img className="w-screen h-screen object-cover object-top" src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
                <div className="flex bg-gray-100 p-10 dark:bg-gray-800 bg-white">
                    <div className="mb-auto mt-auto max-w-lg">
                        <h1 className="text-3xl text-dark dark:text-white">Nicolas Ggd</h1>
                        <p className="font-semibold mb-5 text-dark dark:text-white">Web Developer</p>
                        <p className="text-dark dark:text-white">Never say never, because the limits like fears are often just an illusion.</p>
                        <button onClick={contactEmailHandler} className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Email Me</button>
                    </div>
                </div>
            </div>
            {isClick && <ContactModal onClose={contactEmailHandler} />}
        </div>
    )
};